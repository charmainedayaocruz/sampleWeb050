import React, {useState, Component} from 'react'
import DateTimePicker from 'react-datetime-picker';
import { DatePicker } from '@y0c/react-datepicker';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import '@y0c/react-datepicker/assets/styles/calendar.scss';
import { Row, Image, Button, Col, Container, Card, CardDeck, Carousel, Form, Modal, Dropdown, InputGroup, FormControl, DropdownButton } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom';
import Moment from 'react-moment';
import moment from 'moment';

import F1 from '../assets/icons/F1.jpeg';
import aws from '../assets/icons/aws.png';
import jenkins from '../assets/icons/jenkins.png';
import jira from '../assets/icons/jira.png';

const Landing = (props) => {

    return (
        <>
            <Container fluid className=""  style={{marginTop: "40px"}}>
                <Row className="mx-2 mb-5">
                    <Col md={8}>
                        <h3><b>{props.header} {props.subHeader !== "" ? (" - " + props.subHeader) : ""} </b> </h3>
                    </Col>
                    <Col md={{ span: 4}}>
                        <Form>    
                            <Form.Group>
                                <Form.Row>
                                    <Form.Label column md={2}>Search</Form.Label>
                                    <Col md={10}>
                                        <InputGroup>
                                            <Form.Control type="text" />
                                            <InputGroup.Append>
                                                <Button variant="outline-secondary">
                                                    <i className="fa fa-search"></i>
                                                </Button>
                                            </InputGroup.Append>
                                        </InputGroup>
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Row className="mx-2 ">
                    <h4>Overview</h4>
                </Row>
                
                <CardDeck className="mx-1 my-3">
                    <div className="col-sm-4 col-md-3 mx-0 px-1">
                        <Card style={{marginTop: "20px"}} className="mx-0 h-100"> 
                            <Card.Img fluid variant="top" src={aws} />
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
                            <Card.Img fluid variant="top" src={aws} />
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
                            <Card.Img fluid variant="top" src={jira} />
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
                            <Card.Img fluid variant="top" src={aws} />
                            <Card.Body className="text-center">
                            
                                <Card.Title align="left">
                                    <span>
                                        <b>How to create EC2 instance</b>
                                    </span>
                                </Card.Title>
                                
                                <Card.Text align="left">Description </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    
                </CardDeck>
                
            </Container>
            <Container fluid className=""  style={{marginTop: "40px"}}>
                <Row className="mx-2 ">
                    <h4>Overview</h4>
                </Row>
                
                <CardDeck className="mx-1 my-3">
                    <div className="col-sm-4 col-md-3 mx-0 px-1">
                        <Card style={{marginTop: "20px"}} className="mx-0 h-100"> 
                            <Card.Img fluid variant="top" src={jenkins} />
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
                            <Card.Img fluid variant="top" src={aws} />
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
                            <Card.Img fluid variant="top" src={jenkins} />
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
                            <Card.Img fluid variant="top" src={jira} />
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
                
            </Container>
            <Container fluid className=""  style={{marginTop: "40px"}}>
                <Row className="mx-2 ">
                    <h4>Overview</h4>
                </Row>
                
                <CardDeck className="mx-1 my-3">
                    <div className="col-sm-4 col-md-3 mx-0 px-1">
                        <Card style={{marginTop: "20px"}} className="mx-0 h-100"> 
                            <Card.Img fluid variant="top" src={jenkins} />
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
                            <Card.Img fluid variant="top" src={aws} />
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
                            <Card.Img fluid variant="top" src={jira} />
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
                            <Card.Img fluid variant="top" src={jira} />
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
                
            </Container>
        </>
    )
}

export default Landing
