import React, {Component} from 'react'
import {slide as Menu} from 'react-burger-menu'
import logo from '../css/favicon.png'
import '../css/homepage.scss'
import '../css/burgerStyles.scss'

/*
    Presentation webpage for codebrokers.
    TODO: 
        - Implement smooth scroll to hrefs
        - Add content to the webpage
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
        return ( 
        <div id='outer-container'>
            <div id="page-wrap">
                <div className="TopBar">
                    <p className="mainHeading">CODEBROKERS</p>
                </div>
                <div className="textBox">

                </div>
                <div className="teamInfo">

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