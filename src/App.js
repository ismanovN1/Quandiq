import React, { useEffect} from 'react';
import './App.css';
import {Row, Col, Card, Nav, Navbar} from "react-bootstrap";
import Mathematika from "./components/math/Math";
import {Route, Switch} from "react-router-dom";
import telegram from './images/TELEGRAM.jpg'
import vk from './images/vk.png'
import instagram from './images/instagram.jpg'
import Home from "./components/home/home";
import SuspenseContainer from "./components/Suspense";
import Auth from "./components/auth_register/Auth";
import Registration from "./components/auth_register/Registration";
import Profile from "./components/profile/profileContainer";

const AboutMe = SuspenseContainer(React.lazy(() => import('./components/forMe/aboutMe')));

function App() {

    useEffect(() => {
        window.onscroll = function () {
            myFunction()
        };
        let navbar = document.getElementById("navbar");
        let sticky = navbar.offsetTop;

        function myFunction() {
            console.log(window.pageYOffset, sticky)
            if (window.pageYOffset >= (sticky)) {
                navbar.classList.add("sticky")
            } else {
                navbar.classList.remove("sticky");
            }
        }

    }, [])

    return (<div>

        {/*<div id={'Myname'} className={'Myname'} ><h1 data-text="ISMANOV QUANDIQ"><span>ISMANOV QUANDIQ</span></h1></div>*/}

            <div id="navbar"><Navbar expand="lg" className="bg-primary">
                <Navbar.Brand href="/Profile">
                    <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-house-door-fill"
                         fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6.5 10.995V14.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V11c0-.25-.25-.5-.5-.5H7c-.25 0-.5.25-.5.495z"/>
                        <path fill-rule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                    </svg>
                    Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/math/">
                            <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-calculator"
                                 fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M12 1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                                <path
                                    d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z"/>
                            </svg>
                            Calculator</Nav.Link>
                        <Nav.Link href="/AboutMe/">
                            <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-person-circle"
                                 fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
                                <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                <path fill-rule="evenodd"
                                      d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
                            </svg>
                            Abaut me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar></div>

            <div className={'content'}><Switch>
                <Route exact path={'/'} component={Home}/>
                <div className="container">
                    <Route path='/math/' component={Mathematika}/>
                    <Route path='/AboutMe/' component={AboutMe}/>
                    <Route path='/Auth/' component={Auth}/>
                    <Route path='/Regis/' component={Registration}/>
                    <Route path='/Profile/' component={Profile}/>

                </div>
            </Switch>
            </div>
                <footer id="sticky-footer" className="py-4 shadow-sm bg-light ce text-white-50">
                    <div className="d-flex justify-content-center">
                        <a href="https://telegramm.site/#/im?p=@IIIKKK"><img src={telegram}
                                                                             className="shadow-lg p-3 mb-5 mx-3 bg-white rounded"
                                                                             style={{width: '6rem'}}/></a>
                        <a href="https://www.instagram.com/iiiikkkk777/"><img src={instagram}
                                                                              className="shadow-lg p-3 mx-3 mb-5 bg-white rounded"
                                                                              style={{width: '6rem'}}/></a>
                        <a href="https://vk.com/ismanovqqqqq"><img src={vk}
                                                                   className="shadow-lg p-3 mb-5 mx-3 bg-white rounded"
                                                                   style={{width: '6rem'}}/></a>
                    </div>

                </footer>



        </div>
    );
}

export default App;
