import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import {
    CardDeck,
    Card,
    Image,
    SampleImage,
    SampleIcon,
    InputGroup,
    Button,
    FormControl,
    DropdownButton,
    Dropdown,
    Container } from 'react-bootstrap';
import Navbar from './components/layout/Navbar';
import Landing from './components/Landing';
import ScrollToTop from './components/layout/ScrollToTop';




const App = () => {

    const [loginModal, showLoginModal] = useState(false);
    const handleLoginClose = () => showLoginModal(false);
    const handleLoginShow = () => showLoginModal(true);

    const [signupModal, showSignupModal] = useState(false);
    const handleSignupClose = () => showSignupModal(false);
    const handleSignupShow = () => showSignupModal(true);




    return (
        <Router>
                <Navbar 
                    showLoginModal={showLoginModal} 
                    loginModal={loginModal} 
                    handleLoginClose={handleLoginClose}
                    handleLoginShow={handleLoginShow}

                    showSignupModal={showSignupModal} 
                    signupModal={signupModal} 
                    handleSignupClose={handleSignupClose}
                    handleSignupShow={handleSignupShow}
                />
                <div>
                <ScrollToTop />
                <Switch>
                    <Route exact path="/"  render={
                        (props) => <Landing 
                            {...props} 
                            showLoginModal={showLoginModal} 
                            loginModal={loginModal} 
                            handleLoginClose={handleLoginClose}
                            handleLoginShow={handleLoginShow} 
                            showSignupModal={showSignupModal} 
                            signupModal={signupModal} 
                            handleSignupClose={handleSignupClose}
                            handleSignupShow={handleSignupShow} /> 
                    } />


                </Switch>
                </div>
        </Router>
    )
}

export default App;
