import React, {Component} from 'react'
import {slide as Menu} from 'react-burger-menu'
import logo from '../css/favicon.png'
import '../css/homepage.scss'
import background from '../css/background.jpg'
import rachel from '../css/rachel.jpg'
import amber from '../css/amber.jpg'
import zeyaam from '../css/zeyaam.jpg'
import jean from '../css/jean.jpg'
import d3L from '../css/d3.png'
import reactL from '../css/react.png'
import nodeL from '../css/node.png'
import vscodeL from '../css/vscode.png'
import django from '../css/django.png'


/*
    Presentation webpage for codebrokers.
    TODO: 
        - Make a team logo
        - Implement a burger menu - No longer needed!
        - Implement smooth scroll to hrefs
        - Add content to the webpage

        
                <div className="TopBar">
                    <p className="mainHeading">CODEBROKERS</p>
                </div>
*/

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
        }
    }

    componentDidMount() {
        document.title = "Codebrokers"
    } 

    render() { 

        let roadMap = () => {
            let dates = ['01/2020', '03/2020', '06/2020', '09/2020', '01/2021']
            let descr = [
                'Refactor the codebase to further enhance modularity',
                'Implement more widgets focusing on Client Risk Assessment e.g. Popup Alerts & Heatmaps etc.',
                'Implement Websocket support for synchronous data processing',
                'Add support for older browsers for improved backward compatibility',
                'Implement widgets for transaction monitoring across multiple clients for network based Risk Assessment'
            ]
            let roadmap = dates.map( (date, index) => {
                return (
                    <div className="roadMapRow">
                        <div className="dot"></div>
                        <div className="rowDate">{date}</div>
                        <div className="rowDesc">{descr[index]}</div>
                    </div>
                )
            })
            return (
                <div className="roadWrap">
                    {roadmap}
                </div>
            )
        }
        
        return ( 
        <div id='outer-container' className="fuckthisshit">
            <div id="page-wrap">
                <div className="topWrap">
                    <div id="logo"><img className ="logo" src={logo} /></div>
                    <div className="textBox">
                        <h2 className="title">Presents R. A. T. (Risk Assessment Tool)</h2>
                        <h3 className="subtitle">A transaction monitoring tool built for banks and their customers.</h3>

                        <p className="quote">"One of the keys to a better working world is better data, and that starts with how people consume and understand it."</p>
                        
                    </div>
                </div>
                <div className="garbageWrapper">
                    <div className = "boxText">
                        <div className="leftP">We live in a world where banks have to process millions of transactions every hour. With such a large
                            quantity of data beiing transferred, banks have to find a way to not only catch, but to stay ahead
                            of issues, like fraudulent transactions. The tool we are presenting today will alert banks of possible fraud
                            based on historical data and analysis. This tool will also serve to assign a risk rating to their customers'
                            transactions. We will place these risk ratings, and the aformentioned transactions into graphs so that
                            banks can understand, at a glance, their data.
                        </div>

                        <div className="rightP">The banks' customers will also benefit from this tool as we will be able to provide them with easily
                            digestible graphs that depict the risk ratings of various cryptocurrencies, before a transaction occurs. 
                            This will empower customers to make more informed decisions and to understand the risk associated with
                            partaking in potentially risky assets. We believe that one of the keys to a better working world
                            is better data, and that starts with how people consume and understand it.
                        </div>
                    </div>
                    <div className ="buttons">
                            <a href="#ourTeam"><button className="btn">Our Team</button></a>
                            <a href="#tryApp"><button className="btn">Demo</button></a>
                            <a href="#ourTools"><button className="btn">Technology</button></a>
                            <a href="#futureRoadmap"><button className="btn">Roadmap</button></a>
                    </div>
                </div>
                <div className="teamInfo">
                    <h2 className="sectionTitle"><a name="ourTeam">Meet The CodeBrokers</a></h2>
                    <div className="profileCard leftPro">
                        <div className="profilePicture"><img className="picture" src={amber} /></div>
                        <div className="content">
                            <p>
                                <h3 className="profileName">Amber Chowdhury</h3>
                                <h4 className="profileTitle">Data Specialist</h4>
                                <div className="proDes">No data escapes Amber's Keen Eye</div>
                            </p>
                        </div>
                    </div>
                    <div className="profileCard">
                        <div className="profilePicture"><img className="picture" src={rachel} /></div>
                        <div className="content">
                                <h3 className="profileName">Rachel Hayden</h3>
                                <h4 className="profileTitle">Mockup Design Guru</h4>
                                <div className="proDes">Rachel's abilities lie within identifying and refining the details</div>
                        </div>
                    </div>
                    <div className="profileCard leftPro">
                    <div className="profilePicture"><img className="picture" src={rachel} /></div>                        <div className="content"> 
                            <p>
                                <h3 className="profileName">Alex Johnson</h3>
                                <h4 className="profileTitle">Visionary Extraordinaire</h4>
                                <div className="proDes">Alex has a talent for laying out a roadmat for an established product</div>
                            </p>
                        </div>
                    </div>
                    <div className="profileCard">
                    <div className="profilePicture"><img className="picture" src={jean} /></div>                        <div className="content"> 
                            <p>
                                <h3 className="profileName">Jean-Sebastien Surena</h3>
                                <h4 className="profileTitle">Fullstack Developer, Story Teller</h4>
                                <div className="proDes">The man, the myth, the legend</div>
                            </p>
                        </div>
                    </div>
                    <div className="profileCard">
                    <div className="profilePicture"><img className="picture" src={zeyaam} /></div>                        <div className="content"> 
                            <p>
                                <h3 className="profileName">Zeyaam Shahid</h3>
                                <h4 className="profileTitle">Team Leader, Fullstack Developer, Designer</h4>
                                <div className="proDes">A jack (& master) of all trades, a wizard with a keyboard and Picasso with colors</div>
                            </p>
                        </div>
                    </div>

                </div>
                <div className="tryApp">
                    <h2 className="sectionTitle"><a name="tryApp">RAT Demo</a></h2>
                    <div className="ratInfo">The RAT Demo features a Transactions Display Module along with a Cryptocurrency exchange and customer relational graph widget and an Transaction Risk Analyzer widget. The Demo is designed and developed in a modular fashion which enables the widgets to be used as standalone components in any other React application. The demo also features fully functional light & dark theming system.</div>
                    {/* Some info about the app and button that takes you to app */}
                    <div className="ourTools">
                    <h2 className="sectionTitle"><a name="ourTools">Our Tools</a></h2>
                        <div className="ratInfo">RAT has been developed using JavaScript (React + d3) for frontend and Python (Django REST API) for backend in Microsoft Visual Studio Code.</div>
                        <div className="toolsWrapper">
                            <div id="tool"><img className ="tool" src={d3L} /></div>
                            <div id="tool"><img className ="tool" src={reactL} /></div>
                            <div id="tool"><img className ="tool" src={nodeL} /></div>
                            <div id="tool"><img className ="tool" src={vscodeL} /></div>
                            <div id="tool"><img className ="tool" src={django} /></div>
                        </div>
                </div>
                </div>
                <div className="futureRoadmap">
                    <h2 className="sectionTitle"><a name="futureRoadmap">Future Roadmap</a></h2>
                    {/* Future roadmap will be included here */}
                    {roadMap()}
                </div>

            </div>
        </div> 
        );
    }
}

export default Homepage;
/*
<div className="imageWrapper"><img src={logo} className="logo"/></div>

            <Menu>
                <div className="imageWrapper"><img src={logo} className="logo"/></div>
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="about" className="menu-item" href="/about">About</a>
                <a id="contact" className="menu-item" href="/contact">Contact</a>
            </Menu>
*/