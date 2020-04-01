import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import {
    CardDeck,
    Card,
    Image,
    Row,
    Col,
    SampleImage,
    SampleIcon,
    InputGroup,
    Button,
    Form,
    DropdownButton,
    Dropdown,
    Container } from 'react-bootstrap';
import Navbar from './components/layout/Navbar';
import Landing from './components/Landing';
import MyCalendar from './components/Calendar';
import ScrollToTop from './components/layout/ScrollToTop';
import Sidebar from './components/layout/Sidebar';




const App = () => {

    const [loginModal, showLoginModal] = useState(false);
    const handleLoginClose = () => showLoginModal(false);
    const handleLoginShow = () => showLoginModal(true);

    const [signupModal, showSignupModal] = useState(false);
    const handleSignupClose = () => showSignupModal(false);
    const handleSignupShow = () => showSignupModal(true);




    return (
        <Router>
                {/* <Navbar 
                    showLoginModal={showLoginModal} 
                    loginModal={loginModal} 
                    handleLoginClose={handleLoginClose}
                    handleLoginShow={handleLoginShow}

                    showSignupModal={showSignupModal} 
                    signupModal={signupModal} 
                    handleSignupClose={handleSignupClose}
                    handleSignupShow={handleSignupShow}
                /> */}
                <div id="page-wrap">
                
                <ScrollToTop />
                <Sidebar pageWrapId={"page-wrap"} outerContainerId={"page-wrap"} /> 
                
                    
                
                <Switch>
                    <Route exact path="/"  render={
                        (props) => <Landing {...props} 
                            content=""
                            header="Home page"
                            subHeader=""
                        /> 
                    } />
{/******************************QUICK LINKS ***********************************/}
                    <Route exact path="/quicklinks/legacy"  render={
                        (props) => <Landing {...props} 
                            content=""
                            header="Quick Links"
                            subHeader="Legacy"
                        /> 
                    } />
                    <Route exact path="/quicklinks/mobile2019"  render={
                        (props) => <Landing {...props} 
                            content=""
                            header="Quick Links"
                            subHeader="Mobile2019"
                        /> 
                    } />
                    <Route exact path="/quicklinks/mobile2020"  render={
                        (props) => <Landing {...props} 
                            content=""
                            header="Quick Links"
                            subHeader="Mobile2020"
                        /> 
                    } />
                    <Route exact path="/quicklinks/futurestate"  render={
                        (props) => <Landing {...props} 
                            content=""
                            header="Quick Links"
                            subHeader="Future State"
                        /> 
                    } />
{/******************************HOW TOS ***********************************/}
                    <Route exact path="/howtos/legacy"  render={
                        (props) => <Landing {...props} 
                            content=""
                            header="How-Tos"
                            subHeader="Legacy"
                        /> 
                    } />
                    <Route exact path="/howtos/mobile2019"  render={
                        (props) => <Landing {...props} 
                            content=""
                            header="How-Tos"
                            subHeader="Mobile2019"
                        /> 
                    } />
                    <Route exact path="/howtos/mobile2020"  render={
                        (props) => <Landing {...props} 
                            content=""
                            header="How-Tos"
                            subHeader="Mobile2020"
                        /> 
                    } />
                    <Route exact path="/howtos/futurestate"  render={
                        (props) => <Landing {...props} 
                            content=""
                            header="How-Tos"
                            subHeader="Future State"
                        /> 
                    } />
{/************************PROJECT MONITORING TOOLS*********************************/}
                    <Route exact path="/pmt/nagios"  render={
                        (props) => <Landing {...props} 
                            content=""
                            header="Project Monitoring Tools"
                            subHeader="Nagios"
                        /> 
                    } />
                    <Route exact path="/pmt/snyk"  render={
                        (props) => <Landing {...props} 
                            content=""
                            header="Project Monitoring Tools"
                            subHeader="Snyk"
                        /> 
                    } />
                    <Route exact path="/pmt/checkmarx"  render={
                        (props) => <Landing {...props} 
                            content=""
                            header="Project Monitoring Tools"
                            subHeader="Checkmarx"
                        /> 
                    } />
                    <Route exact path="/pmt/newrelic"  render={
                        (props) => <Landing {...props} 
                            content=""
                            header="Project Monitoring Tools"
                            subHeader="New Relic"
                        /> 
                    } />
                    <Route exact path="/pmt/kibana"  render={
                        (props) => <Landing {...props} 
                            content=""
                            header="Project Monitoring Tools"
                            subHeader="Kibana"
                        /> 
                    } />
                    <Route exact path="/pmt/splunk_watchman"  render={
                        (props) => <Landing {...props} 
                            content=""
                            header="Project Monitoring Tools"
                            subHeader="Splunk/Watchman"
                        /> 
                    } />
{/***************************TECHNOLOGY USED********************************/}
                    <Route exact path="/techused/awsarch"  render={
                        (props) => <Landing {...props} 
                            content=""
                            header="Technology Used"
                            subHeader="AWS Architecture"
                        /> 
                    } />
                    <Route exact path="/techused/k8s"  render={
                        (props) => <Landing {...props} 
                            content=""
                            header="Technology Used"
                            subHeader="Kubernetes"
                        /> 
                    } />
{/***************************CALENDAR********************************/}
                    <Route exact path="/calendar/oncall"  render={
                        (props) => <MyCalendar {...props} 
                            content=""
                            header="Calendar"
                            subHeader="On Call"
                        /> 
                    } />
                    <Route exact path="/calendar/webrelease"  render={
                        (props) => <MyCalendar {...props} 
                            content=""
                            header="Calendar"
                            subHeader="Web Release Schedule"
                        /> 
                    } />
                    <Route exact path="/calendar/mobilerelease"  render={
                        (props) => <MyCalendar {...props} 
                            content=""
                            header="Calendar"
                            subHeader="Mobile Release Schedule"
                        /> 
                    } />

                </Switch>
                </div>
        </Router>
    )
}

export default App;
