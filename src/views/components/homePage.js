import React, {Component} from 'react'
import {slide as Menu} from 'react-burger-menu'
import logo from '../css/favicon.png'
import '../css/homepage.scss'
import '../css/burgerStyles.scss'

/*
    Presentation webpage for codebrokers.
    TODO: 
        - Make a team logo
        - Implement a burger menu - No longer needed!
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
                    <h2>Introducting RAT (Risk Assessment Tool), a transaction monitoring tool built for banks and their customers.</h2>

                    <h4>"One of the keys to a better working world is better data, and that starts with how people consume and understand it."</h4>
        
                    <p>We live in a world where banks have to process millions of transactions every hour. With such a large
                        quantity of data beiing transferred, banks have to find a way to not only catch, but to stay ahead
                        of issues, like fraudulent transactions. The tool we are presenting today will alert banks of possible fraud
                        based on historical data and analysis. This tool will also serve to assign a risk rating to their customers'
                        transactions. We will place these risk ratings, and the aformentioned transactions into graphs so that
                        banks can understand, at a glance, their data.
                    </p>

                    <p>The banks' customers will also benefit from this tool as we will be able to provide them with easily
                        digestible graphs that depict the risk ratings of various cryptocurrencies, before a transaction occurs. 
                        This will empower customers to make more informed decisions and to understand the risk associated with
                        partaking in potentially risky assets. We believe that one of the keys to a better working world
                        is better data, and that starts with how people consume and understand it.
                    </p>
                    <p>
                        <button>Learn About Our Team</button>
                        <button>Try Out RAT</button>
                    </p>
                    <p>
                        <button>Our Roadmap</button>
                        <button>Our tools</button>
                    </p>
                </div>
                <div className="teamInfo">
                    <h2>Who are the CodeBrokers?</h2>

                    <p>
                        <h3>Amber Chowdhury</h3>
                        <h4>Data Specialist</h4>
                        <p>No data escapes Amber's Keen Eye</p>
                    </p>

                    <p>
                        <h3>Rachel Hayden</h3>
                        <h4>Visionary Extraordinaire</h4>
                        <p>Rachel's abilities lie within identifying and refining the details</p>
                    </p>

                    <p>
                        <h3>Alex Johnson</h3>
                        <h4>Visionary Extraordinaire</h4>
                        <p>Alex has a talent for laying out a roadmat for an established product</p>
                    </p>

                    <p>
                        <h3>Zeyaam Shahid</h3>
                        <h4>Team Leader, Fullstack Developer</h4>
                        <p>A jack of all trades, a wizard with a keyboard and a few lines of code</p>
                    </p>

                    <p>
                        <h3>Jean-Sebastien Surena</h3>
                        <h4>Fullstack Developer, Story Teller</h4>
                        <p>The man, the myth, the legend</p>
                    </p>

                </div>
                <div className="tryApp">
                    {/* Some info about the app and button that takes you to app */}
                </div>
                <div className="futureRoadmap">
                    {/* Future roadmap will be included here */}
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