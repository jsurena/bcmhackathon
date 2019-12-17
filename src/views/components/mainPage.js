import React, { Component } from 'react';
import {Graph} from "react-d3-graph";
import axios from 'axios'
import SideBar from './sidebar';
import TopBar from './topBar';
import '../css/mainPage.scss';
 



let lightTheme = [
    "bLight ", 
    "widgetLight ", 
    "darkFont "
]

let darkTheme = [
    "bDark ", 
    "widgetDark ", 
    "lightFont "
]
/*
    Internal vs. External Data
    Token, Margin, Country, Total

    Pie chart widget

*/



let MyGraph = (theme, themeState, transactions) => {    
    let nodes = [{ id: "Harry" }, { id: "Sally" }, { id: "Alice" }], 
        links = [{ source: "Harry", target: "Sally" }, { source: "Harry", target: "Alice" }];
    if (transactions.length>0) {
        let filterNames = (trans) => {
            let outputs = [], flags={}, i;
            for (i=0;i<trans.length;i++) {
                if (typeof(flags[trans[i].Customer_Name]) == "undefined") {
                    outputs.push(trans[i].Customer_Name);
                }
                flags[trans[i].Customer_Name] = true;
                
            }
            return outputs
        }

        let getConnections = (trans, names) => {
            let outputs = [], flags = [], i, fTrans;
            for (let name of names) {
                name = name.id
                fTrans = trans.filter(item=>{return item.Customer_Name===name});
                console.log("ftrans", fTrans)
                for (i=0; i<fTrans.length; i++) {
                    if (fTrans[i].Category == "Cryptocurrency") {
                        let key = fTrans[i].Merchant_Name + name
                        if (typeof(flags[key]) == "undefined") {
                            outputs.push({source: name, target:fTrans[i].Merchant_Name});
                        }
                        flags[key] = true;
                    }
                }
            }
            return outputs
        }
        let names = filterNames(transactions).map(name=>{return {id :name, symbolType: "square"}});
        let connections = getConnections(transactions, names);
        let exchanges = [], flags={}
        for (let item of connections) {
            if (typeof(flags[item.target]) == "undefined") {
                exchanges.push({"id":item.target});
            }
            flags[item.target] = true;
        }
        links = connections;
        console.log(names)
        nodes = names.concat(exchanges);
    }
    console.log("GRAPH DATA: ", nodes, links)

    const graphData = {
        nodes: nodes,
        links: links,
    };

    let dark = ["#fafafa"]
    let light = ["212121"]
    let cols = themeState? dark : light
     
    // the graph configuration, you only need to pass down properties
    // that you want to override, otherwise default ones will be used
    const myConfig = {
        height: 400,
        width: 800,
        nodeHighlightBehavior: true,
        node: {
            color: "#ff9ff3",
            size: 350,
            fontColor: cols[0],
            fontSize: 16,
            highlightFontSize: 16,
            highlightStrokeColor: "#00d2d3",
        },
        link: {
            color: cols[0],
            highlightColor: "lightblue",
        },
    };

    return (
        <div className={"graphContainer " + theme[1]}>
            <div className={"graphHeader " + theme[2]}>Customer-Exchange Relationship</div>
            <Graph
            id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
            data={graphData}
            config={myConfig}
            />
        </div>);
}


let transactionWidget = (theme, transactions) => {
    let transDescription = transactions.map( trans => {
        return (
            <div className={"transRow "+ theme[2]}>
                <div className={"transCell small"}>{trans.Transaction_ID}</div>
                <div className={"transCell small"}>{trans.Date}</div>
                <div className={"transCell medium"}>{trans.Customer_Name}</div>
                <div className={"transCell large"}>{trans.Merchant_Name}</div>
                <div className={"transCell large"}>{trans.Category}</div>
                <div className={"transCell small"}>{trans.Amount}</div>
            </div>
        )
    })
    return (
        <div className={"transWidget " + theme[1]}>
            <div className={"transRow "+ theme[2]}>
                <div className={"transCell small rowHeader "}>Trans. ID</div>
                <div className={"transCell small rowHeader "}>Date</div>
                <div className={"transCell medium rowHeader "}>Cust. Name</div>
                <div className={"transCell large rowHeader "}>Merchant Name</div>
                <div className={"transCell large rowHeader "}>Category</div>
                <div className={"transCell small rowHeader "}>Amount</div>
            </div>
            {transDescription}
        </div>
    )
};


class MainPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            theme: true,
            lightTheme: lightTheme,
            darkTheme: darkTheme,
            HOSTNAME: 'http://localhost:8000/',
            transactions: []
        }
    }

    componentDidMount() {
        document.title = "R.A.T.";
        let url = `${this.state.HOSTNAME}transactions`;
        axios.get(url).then(res=> {
            console.log(res.data.transactions)
            this.setState({transactions: res.data.transactions})
        })
    }

    render() {
        let theme = this.state.theme? darkTheme : lightTheme;
        return (
            <div className={"background " + theme[0] + theme[2]}>
                <div className="sideBarMain">
        <div className="sideSlot" onClick={()=>this.setState({theme: !this.state.theme})}>{this.state.theme? "Light Theme": "Dark Theme"}</div>
                </div>
                <div className="Spacer"></div>
                {transactionWidget(theme, this.state.transactions)}
                {MyGraph(theme, this.state.theme, this.state.transactions)}
            </div>
        );
    }
}

export default MainPage;