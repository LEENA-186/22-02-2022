import React from "react";
import './gpay.css'
import { Link } from 'react-router-dom';
import { Button, Form, Container, Row, Col } from "react-bootstrap";

import Admindashboard from "./AdminDashboard/Admindashboard";
import wmt from "../img/wmt.png";
import repansys from "../img/repansys.png";
import leave from "../img/leave.png";
const Admin = () => {
  return (
    <div>
      <Row className="bor">
        <Col>
      
          <Link to='/wmt'> <img className="img" src={wmt} />{" "}</Link>
          <h1 className="text-center text-uppercase">Work Management Tracker</h1>
        </Col>
        <Col>
        <Link to='/leave'> <img className="img" src={leave} />{" "}</Link> 
        <h1 className="text-center text-uppercase">Apply Leave</h1>
        </Col>
        <Col>
        <Link to='/repansys'> <img  className="img" src={repansys} /></Link>
        <h1 className="text-center text-uppercase">Report Analysis</h1>
        </Col>
      </Row>
<Admindashboard/>

       <div>

       <Link to='/check'><button className="mainbtn">CheckIn</button></Link>  
       {/* <Link to='/createaccount'><button className="mainbtn1">Create Account</button></Link>  */}
      </div>
      </div>
      
  );
};

export default Admin;
