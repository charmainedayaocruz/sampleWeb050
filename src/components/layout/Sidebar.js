import React from "react";
import { slide as Menu } from "react-burger-menu";
import {Row} from 'react-bootstrap'
export default props => {
    return (
    // Pass on our props
    <Row className="w-100">
        <Menu {...props}>
            <h5 className="p-3 pl-5 text-dark">ServiceBench IS Ops</h5>
            <a className="menu-item p-1 pl-5 h6 font-weight-bold text-dark" href="/">
                Home
            </a>
            <div className="p-3 mb-0 pl-5" style={{backgroundColor: "green", color: "white"}}>
                <h6 className="font-weight-bold"><u>Quick Links</u></h6>
                <a className="pl-3 menu-item no-decoration" href="/quicklinks/legacy">Legacy</a><br />
                <a className="pl-3 menu-item no-decoration" href="/quicklinks/mobile2019">Mobile2019</a><br />
                <a className="pl-3 menu-item no-decoration" href="/quicklinks/mobile2020">Mobile2020</a><br />
                <a className="pl-3 menu-item no-decoration" href="/quicklinks/futurestate">Future State</a><br />
            </div>
            <div className="p-3 mb-0 pl-5" style={{backgroundColor: "blue", color: "white"}}>
                <h6 className="font-weight-bold"><u>How-Tos</u></h6>
                <a className="pl-3 menu-item no-decoration" href="/howtos/legacy">Legacy</a><br />
                <a className="pl-3 menu-item no-decoration" href="/howtos/mobile2019">Mobile2019</a><br />
                <a className="pl-3 menu-item no-decoration" href="/howtos/mobile2020">Mobile2020</a><br />
                <a className="pl-3 menu-item no-decoration" href="/howtos/futurestate">Future State</a><br />
            </div>
            <div className="p-3 mb-0 pl-5" style={{backgroundColor: "yellow", color: "black"}}>
                <h6 className="font-weight-bold"><u>Project Monitoring Tools</u></h6>
                <a className="pl-3 menu-item no-decoration text-dark" href="/pmt/nagios">Nagios</a><br />
                <a className="pl-3 menu-item no-decoration text-dark" href="/pmt/snyk">Snyk</a><br />
                <a className="pl-3 menu-item no-decoration text-dark" href="/pmt/checkmarx">Checkmarx</a><br />
                <a className="pl-3 menu-item no-decoration text-dark" href="/pmt/newrelic">New Relic</a><br />
                <a className="pl-3 menu-item no-decoration text-dark" href="/pmt/kibana">Kibana</a><br />
                <a className="pl-3 menu-item no-decoration text-dark" href="/pmt/splunk_watchman">Splunk/watchman</a><br />
            </div>
            <div className="p-3 mb-0 pl-5" style={{backgroundColor: "orange", color: "black"}}>
                <h6 className="font-weight-bold"><u>Project Monitoring Tools</u></h6>
                <a className="pl-3 menu-item no-decoration text-dark" href="/techused/awsarch">AWS Architecture</a><br />
                <a className="pl-3 menu-item no-decoration text-dark" href="/techused/k8s">Kubernetes</a><br />
            </div>
            <div className="p-3 mb-0 pl-5" style={{backgroundColor: "red", color: "white"}}>
                <h6 className="font-weight-bold"><u>Calendar</u></h6>
                <a className="pl-3 menu-item no-decoration text-white" href="/calendar/oncall">On-Call Calendar</a><br />
                <a className="pl-3 menu-item no-decoration text-white" href="/calendar/webrelease">Web Release Schedule</a><br />
                <a className="pl-3 menu-item no-decoration text-white" href="/calendar/mobilerelease">Mobile Release Schedule</a><br />
            </div>
        </Menu>
        <h4  style={{position: "relative", left: "75px", top: "30px"}}>ServiceBench IS Ops</h4>
    </Row>
  );
};