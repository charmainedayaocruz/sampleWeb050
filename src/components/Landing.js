import React, {useState, Component} from 'react'
import DateTimePicker from 'react-datetime-picker';
import { DatePicker } from '@y0c/react-datepicker';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import '@y0c/react-datepicker/assets/styles/calendar.scss';
import { Row, Image, Button, Col, Container, Card, CardDeck, Carousel, Form, Modal, Dropdown, InputGroup, FormControl, DropdownButton } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom';
import Moment from 'react-moment';
import moment from 'moment';
import SampleImage from '../assets/icons/sample.PNG';
import VenueIcon from '../assets/icons/location.png';
import CateringIcon from '../assets/icons/catering.png';
import EntertainmentIcon from '../assets/icons/entertainment.png';
import MediaIcon from '../assets/icons/media_coverage.png';
import EventDetailingIcon from '../assets/icons/event_detailing.png';
import GiveawayIcon from '../assets/icons/giveaway.png';
import Navbar from 'react-bootstrap/Navbar';

import VenueImage from '../assets/icons/venues.jpg';
import CateringImage from '../assets/icons/catering.jpg';
import EntertainmentImage from '../assets/icons/entertainment.jpg';
import MediaImage from '../assets/icons/meda-coverage.jpg';
import EventDetailingImage from '../assets/icons/event-detailing.jpg';
import E1 from '../assets/icons/event_detailing.png';
import GiveawayImage from '../assets/icons/giveaways.jpg';

import F1 from '../assets/icons/F1.jpeg';
import F2 from '../assets/icons/featured-02.jpg';
import F3 from '../assets/icons/featured-03.jpg';
import F4 from '../assets/icons/featured-04.jpg';

import T2 from '../assets/icons/toprated-02.jpg';
import T3 from '../assets/icons/toprated-03.jpg';
import T4 from '../assets/icons/toprated-04.jpg';

import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';

const Landing = (props) => {

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndtDate] = useState(null);
    const [focusedInput, setFocusedInput] = useState(null);
    const [rememberMe, setRememberMe] =  useState(false);
    const handleLoginToSignup = () => {
        props.handleLoginClose(); 
        props.handleSignupShow();
    }
    const responseFacebook = (response) => {
        console.log(response);
    }
    const responseGoogle = (response) => {
        console.log(response);
    }
    let history = useHistory();
    const navigateAccountType = () => {
        history.push('accountType')
    }
    const navigateDashboard = () => {
        history.push('dashboard')
    }
    

    let days = [];
    let years = [];
    let months = moment.monthsShort();
    for(let i = 1; i<=31; i++){
        days.push(i);
    }
    for(let j = 1930; j<=2002; j++){
        years.push(j);
    }


    return (
        <>
            
{/* ----------------------------------------------------------------------------------------------------------------------------------- */}
{/* 2nd ------------------------------------------------------------------------------------------------------------- */}
{/* ----------------------------------------------------------------------------------------------------------------------------------- */}
<br/>
            <Container fluid style={{marginTop: "90px"}}>
                <div className="mx-1 w-100">
                    <InputGroup className="w-100" style={{marginTop: "20px"}}>
                    <h2><b>AWS</b> </h2>
                    </InputGroup>
                </div>
                
                <CardDeck className="mx-1 my-3">
                    <div className="col-sm-4 col-md-3 mx-0 px-1">
                        <Card style={{marginTop: "20px"}} className="mx-0 h-100"> 
                            <Card.Img fluid variant="top" src={F1} />
                            <Card.Body className="text-center">
                            
                                <Card.Title align="left">
                                    <span>
                                        <b>Lorem Ipsum Title</b>
                                    </span>
                                </Card.Title>
                                
                                <Card.Text align="left">Lorem Ipsum Description </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-sm-4 col-md-3 mx-0 px-1">
                        <Card style={{marginTop: "20px"}} className="mx-0 h-100"> 
                            <Card.Img fluid variant="top" src={F1} />
                            <Card.Body className="text-center">
                            
                                <Card.Title align="left">
                                    <span>
                                        <b>Lorem Ipsum Title</b>
                                    </span>
                                </Card.Title>
                                
                                <Card.Text align="left">Lorem Ipsum Description </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-sm-4 col-md-3 mx-0 px-1">
                        <Card style={{marginTop: "20px"}} className="mx-0 h-100"> 
                            <Card.Img fluid variant="top" src={F1} />
                            <Card.Body className="text-center">
                            
                                <Card.Title align="left">
                                    <span>
                                        <b>Lorem Ipsum Title</b>
                                    </span>
                                </Card.Title>
                                
                                <Card.Text align="left">Lorem Ipsum Description </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-sm-4 col-md-3 mx-0 px-1">
                        <Card style={{marginTop: "20px"}} className="mx-0 h-100"> 
                            <Card.Img fluid variant="top" src={F1} />
                            <Card.Body className="text-center">
                            
                                <Card.Title align="left">
                                    <span>
                                        <b>Lorem Ipsum Title</b>
                                    </span>
                                </Card.Title>
                                
                                <Card.Text align="left">Lorem Ipsum Description </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    
                </CardDeck>
                <div className="pt-5 pb-3 text-right h5" >
                    <a href="#" style={{color: "#959595"}} >See more</a>
                </div>
            </Container>
            <Container fluid style={{marginTop: "90px"}}>
                <div className="mx-1 w-100">
                    <InputGroup className="w-100" style={{marginTop: "20px"}}>
                    <h2><b>AWS</b> </h2>
                    </InputGroup>
                </div>
                
                <CardDeck className="mx-1 my-3">
                    <div className="col-sm-4 col-md-3 mx-0 px-1">
                        <Card style={{marginTop: "20px"}} className="mx-0 h-100"> 
                            <Card.Img fluid variant="top" src={F1} />
                            <Card.Body className="text-center">
                            
                                <Card.Title align="left">
                                    <span>
                                        <b>Lorem Ipsum Title</b>
                                    </span>
                                </Card.Title>
                                
                                <Card.Text align="left">Lorem Ipsum Description </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-sm-4 col-md-3 mx-0 px-1">
                        <Card style={{marginTop: "20px"}} className="mx-0 h-100"> 
                            <Card.Img fluid variant="top" src={F1} />
                            <Card.Body className="text-center">
                            
                                <Card.Title align="left">
                                    <span>
                                        <b>Lorem Ipsum Title</b>
                                    </span>
                                </Card.Title>
                                
                                <Card.Text align="left">Lorem Ipsum Description </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-sm-4 col-md-3 mx-0 px-1">
                        <Card style={{marginTop: "20px"}} className="mx-0 h-100"> 
                            <Card.Img fluid variant="top" src={F1} />
                            <Card.Body className="text-center">
                            
                                <Card.Title align="left">
                                    <span>
                                        <b>Lorem Ipsum Title</b>
                                    </span>
                                </Card.Title>
                                
                                <Card.Text align="left">Lorem Ipsum Description </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-sm-4 col-md-3 mx-0 px-1">
                        <Card style={{marginTop: "20px"}} className="mx-0 h-100"> 
                            <Card.Img fluid variant="top" src={F1} />
                            <Card.Body className="text-center">
                            
                                <Card.Title align="left">
                                    <span>
                                        <b>Lorem Ipsum Title</b>
                                    </span>
                                </Card.Title>
                                
                                <Card.Text align="left">Lorem Ipsum Description </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    
                </CardDeck>
                <div className="pt-5 pb-3 text-right h5" >
                    <a href="#" style={{color: "#959595"}} >See more</a>
                </div>
            </Container>
            <Container fluid style={{marginTop: "90px"}}>
                <div className="mx-1 w-100">
                    <InputGroup className="w-100" style={{marginTop: "20px"}}>
                    <h2><b>AWS</b> </h2>
                    </InputGroup>
                </div>
                
                <CardDeck className="mx-1 my-3">
                    <div className="col-sm-4 col-md-3 mx-0 px-1">
                        <Card style={{marginTop: "20px"}} className="mx-0 h-100"> 
                            <Card.Img fluid variant="top" src={F1} />
                            <Card.Body className="text-center">
                            
                                <Card.Title align="left">
                                    <span>
                                        <b>Lorem Ipsum Title</b>
                                    </span>
                                </Card.Title>
                                
                                <Card.Text align="left">Lorem Ipsum Description </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-sm-4 col-md-3 mx-0 px-1">
                        <Card style={{marginTop: "20px"}} className="mx-0 h-100"> 
                            <Card.Img fluid variant="top" src={F1} />
                            <Card.Body className="text-center">
                            
                                <Card.Title align="left">
                                    <span>
                                        <b>Lorem Ipsum Title</b>
                                    </span>
                                </Card.Title>
                                
                                <Card.Text align="left">Lorem Ipsum Description </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-sm-4 col-md-3 mx-0 px-1">
                        <Card style={{marginTop: "20px"}} className="mx-0 h-100"> 
                            <Card.Img fluid variant="top" src={F1} />
                            <Card.Body className="text-center">
                            
                                <Card.Title align="left">
                                    <span>
                                        <b>Lorem Ipsum Title</b>
                                    </span>
                                </Card.Title>
                                
                                <Card.Text align="left">Lorem Ipsum Description </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-sm-4 col-md-3 mx-0 px-1">
                        <Card style={{marginTop: "20px"}} className="mx-0 h-100"> 
                            <Card.Img fluid variant="top" src={F1} />
                            <Card.Body className="text-center">
                            
                                <Card.Title align="left">
                                    <span>
                                        <b>Lorem Ipsum Title</b>
                                    </span>
                                </Card.Title>
                                
                                <Card.Text align="left">Lorem Ipsum Description </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    
                </CardDeck>
                <div className="pt-5 pb-3 text-right h5" >
                    <a href="#" style={{color: "#959595"}} >See more</a>
                </div>
            </Container>

{/* ----------------------------------------------------------------------------------------------------------------------------------- */}
{/* ----------------------------------------------------------------------------------------------------------------------------------- */}
{/* ----------------------------------------------------------------------------------------------------------------------------------- */}
            <Modal show={props.loginModal} onHide={props.handleLoginClose} className="rounded-0">
                <Modal.Header closeButton className="rounded-0">
                    <Modal.Title>Log In</Modal.Title>
                </Modal.Header> 
                <Modal.Body className="rounded-0">
                    <FacebookLogin
                        appId="" //APP ID NOT CREATED YET
                        fields="name,email,picture"
                        callback={responseFacebook}
                        cssClass="btn btn-primary btn-block rounded-0 btn-facebook "
                        
                    />
                    <GoogleLogin
                        clientId=""
                        buttonText="Login with Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                        className="w-100 rounded-0 text-center mx-auto my-3 d-flex flex-row justify-content-center align-items-center"  
                    />
                    <div className="text-center mx-auto h6 font-weight-bold my-3">or </div>
                    <Form.Control className="my-4 rounded-0" placeholder="Email" />
                    <Form.Control type="password" className="my-4 rounded-0" placeholder="Password" />
                    <Form.Check
                        custom
                        inline
                        label="Remember me"
                        value={rememberMe}
                        onChange={() => setRememberMe(!rememberMe)}
                        type="checkbox"
                        id="custom-inline-checkbox-3"
                    />
                    <Button className="headerActionButton rounded-0 btn-block" variant="info" onClick={navigateDashboard }> Login </Button>
                    <div className="text-center my-3">
                        {/* <Link className="text-danger font-weight-bold">Forgot Password?</Link> */}
                    </div>
                    <div classsName="text-left my-2">Don't have an account? 
                        <Link onClick={handleLoginToSignup } className="text-info font-weight-bold">Sign Up</Link> 
                    </div>
                </Modal.Body>
            </Modal>
{/* ----------------------------------------------------------------------------------------------------------------------------------- */}
{/* ----------------------------------------------------------------------------------------------------------------------------------- */}
{/* ----------------------------------------------------------------------------------------------------------------------------------- */}
            <Modal show={props.signupModal} onHide={props.handleSignupClose} className="rounded-0">
                <Modal.Header closeButton className="rounded-0">
                    <Modal.Title>Sign Up</Modal.Title>
                </Modal.Header> 
                <Modal.Body classname="rounded-0">
                    <div className="text-center">
                        Sign Up with&nbsp;
                        <Link className="text-info font-weight-bold">Facebook</Link>&nbsp;or&nbsp; 
                        <Link className="text-info font-weight-bold">Google</Link>
                    </div>
                    <div className="text-center mx-auto h6 font-weight-bold my-3">or </div>
                    <Form.Control className="my-3 rounded-0" placeholder="Email Address" />
                    <Form.Control className="my-3 rounded-0" placeholder="First Name" />
                    <Form.Control className="my-3 rounded-0" placeholder="Last Name" />
                    <Form.Control type="password" className="my-3 rounded-0" placeholder="Password" />
                    <Form.Control type="password" className="my-3 rounded-0" placeholder="Confirm Password" />
                    <h6>Birthday</h6>
                    <div>
                        <small>To signup, you need to be at least 18. Other people who use TEP won't see your birthday.</small>
                    </div>
                    <div>
                        <Form.Row>
                            <Col>
                                <Form.Control inline as="select" className="my-1">
                                    <option>Month</option>
                                    {
                                        months.map((month) => <option>{month}</option>)
                                    }
                                </Form.Control>
                            </Col>
                            <Col>
                                <Form.Control inline as="select" className="my-1">
                                    <option>Day</option>
                                    {
                                        days.map((day) => <option>{day}</option>)
                                    }
                                </Form.Control>
                            </Col>
                            <Col>
                                <Form.Control inline as="select" className="my-1">
                                    <option>Year</option>
                                    {
                                        years.map((year) => <option>{year}</option>)
                                    }
                                </Form.Control>
                            </Col>
                        </Form.Row>
                    </div>
                    <div className="my-3">
                        <Form.Check
                            custom
                            inline
                            label={<span>I hereby agree on The Event Planner's <u>Terms and Conditions</u></span>}
                            value={rememberMe}
                            onChange={() => setRememberMe(!rememberMe)}
                            type="checkbox"
                            id="custom-inline-checkbox-3"
                        />
                    </div>
                    <Button 
                        onClick={navigateAccountType} 
                        className="headerActionButton rounded-0 btn-block" 
                        variant="info"> 
                            Signup 
                    </Button>

                </Modal.Body>
            </Modal>
        </>
    )
}

export default Landing
