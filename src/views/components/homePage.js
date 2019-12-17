import React, {Component} from 'react'
import {slide as Menu} from 'react-burger-menu'
import logo from '../css/favicon.png'
import '../css/homepage.scss'
import '../css/burgerStyles.scss'
import rachel from '../css/rachel.jpg'
import amber from '../css/amber.jpg'
import zeyaam from '../css/zeyaam.jpg'
import jean from '../css/jean.jpg'
import d3L from '../css/d3.png'
import reactL from '../css/react.png'
import nodeL from '../css/node.png'
import vscodeL from '../css/vscode.png'

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
                <div id="logo"><img className ="logo" src={logo} /></div>
                <div className="textBox">
                    <h2 className="title">Introducting RAT (Risk Assessment Tool)</h2>
                    <h3 className="subtitle">A transaction monitoring tool built for banks and their customers.</h3>

                    <p className="quote">"One of the keys to a better working world is better data, and that starts with how people consume and understand it."</p>
                    <div className = "boxText">
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
                    </div>
                    <div className ="buttons">
                        <p>
                            <a href="#ourTeam"><button className="btn">Learn About Our Team</button></a>
                            <a href="#tryApp"><button className="btn">Try out RAT</button></a>
                        </p>
                        <p>
                            <a href="#futureRoadmap"><button className="btn">Our Roadmap</button></a>
                            <a href="#ourTools"><button className="btn">Our tools</button></a>
                        </p>
                    </div>
                </div>
                <div className="teamInfo">
                    <h2 className="sectionTitle"><a name="ourTeam">Meet The CodeBrokers</a></h2>
                    <div className="profileCard">
                        <div className="profilePicture"><img className="picture" src={amber} /></div>
                        <div className="content">
                            <p>
                                <h3 className="profileName">Amber Chowdhury</h3>
                                <h4 className="profileTitle">Data Specialist</h4>
                                <p>No data escapes Amber's Keen Eye</p>
                            </p>
                        </div>
                    </div>
                    <div className="profileCard">
                        <div className="profilePicture"><img className="picture" src={rachel} /></div>
                        <div className="content"> 
                            <p>
                                <h3 className="profileName">Rachel Hayden</h3>
                                <h4 className="profileTitle">Design Guru</h4>
                                <p>Rachel's abilities lie within identifying and refining the details</p>
                            </p>
                        </div>
                    </div>
                    <div className="profileCard">
                    <div className="profilePicture"><img className="picture" src={rachel} /></div>                        <div className="content"> 
                            <p>
                                <h3 className="profileName">Alex Johnson</h3>
                                <h4 className="profileTitle">Visionary Extraordinaire</h4>
                                <p>Alex has a talent for laying out a roadmat for an established product</p>
                            </p>
                        </div>
                    </div>
                    <div className="profileCard">
                    <div className="profilePicture"><img className="picture" src={zeyaam} /></div>                        <div className="content"> 
                            <p>
                                <h3 className="profileName">Zeyaam Shahid</h3>
                                <h4 className="profileTitle">Team Leader, Fullstack Developer</h4>
                                <p>A jack of all trades, a wizard with a keyboard and a few lines of code</p>
                            </p>
                        </div>
                    </div>
                    <div className="profileCard">
                    <div className="profilePicture"><img className="picture" src={jean} /></div>                        <div className="content"> 
                            <p>
                                <h3 className="profileName">Jean-Sebastien Surena</h3>
                                <h4 className="profileTitle">Fullstack Developer, Story Teller</h4>
                                <p>The man, the myth, the legend</p>
                            </p>
                        </div>
                    </div>

                </div>
                <div className="tryApp">
                    <h2 className="sectionTitle"><a name="tryApp">Try Out Rat</a></h2>
                    {/* Some info about the app and button that takes you to app */}
                </div>
                <div className="futureRoadmap">
                    <h2 className="sectionTitle"><a name="futureRoadmap">Future Roadmap</a></h2>
                    {/* Future roadmap will be included here */}
                </div>
                <div className="ourTools">
                    <h2 className="sectionTitle"><a name="ourTools">Our Tools</a></h2>
                        <div id="tool"><img className ="tool" src={d3L} /></div>
                        <div id="tool"><img className ="tool" src={reactL} /></div>
                        <div id="tool"><img className ="tool" src={nodeL} /></div>
                        <div id="tool"><img className ="tool" src={vscodeL} /></div>
                        <div id="tool"><p className="toolText">DAMSBRET (Digital Asset Money Service Business Risk Evaluation Tool)</p></div>
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