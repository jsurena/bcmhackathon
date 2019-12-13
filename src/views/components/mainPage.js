import React, { Component } from 'react';
import SideBar from './sidebar';
import TopBar from './topBar';
import '../css/mainPage.scss';

/*
    Internal vs. External Data
        
*/



class MainPage extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        document.title = "Superchart"
    }

    render() {
        return (
            <div className="background">
                <SideBar/>
                asdasd
            </div>
        );
    }
}

export default MainPage;


