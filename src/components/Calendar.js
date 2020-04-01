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
import {Calendar,
  DateLocalizer,
  momentLocalizer,
  globalizeLocalizer,
  move,
  Views,
  Navigate,
  components} from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import F1 from '../assets/icons/F1.jpeg';

const MyCalendar = (props) => {
    const localizer = momentLocalizer(moment);
    const events = [{
        start: new Date(),
        end: new Date(),
        title: "Sample date",
        allDay: true
    }];
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
                    <div className="calendar-container" style={{
                        height: "100%",
                        width: "100%",
                        marginTop: "80px"

                    }}>
                        <Calendar
                            localizer={localizer}
                            events={events}
                            startAccessor="start"
                            endAccessor="end"
                            style={{
                                height: "80vh",
                                width: "100%"
                            }}
                        />
                    </div>
                </Row>
                
                
            </Container>

        </>
    )
}

export default MyCalendar
