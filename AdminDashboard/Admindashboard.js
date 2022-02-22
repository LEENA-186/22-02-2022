import React, { useState } from "react";
import {Routes, Route, Navigate ,Link} from 'react-router-dom';
import { Button, Offcanvas, Body ,Nav,NavDropdown,Item} from "react-bootstrap";
import { IconName } from "react-icons/bs";
import { FaBars } from "react-icons/fa";

const Admindashboard = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
// let colour = {
//   backgroundColor:"black"
// }
  return (
    <>
      <Button  className="dashboard_btn" variant="primary" onClick={handleShow}>
         View Admin Dashboard
     
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><b>Admin Dashboard</b> </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav defaultActiveKey="/admin" className="flex-column">
          <Nav.Link as={Link} to='/ApproveLoan'>Approve Loan</Nav.Link>
         <Nav.Link  as={Link} to='/Emi Calculator' eventKey="Emi Calculator">Emi Calculator</Nav.Link>
            <NavDropdown title="Invesment Plans" id="nav-dropdown">
        <NavDropdown.Item as={Link} to='/Approve FixedDeposit'eventKey="4.1">Fixed Deposit</NavDropdown.Item>
        <NavDropdown.Item  as={Link} to='/Approve RecuringDeposit' eventKey="4.2">Approve Recuring Deposit</NavDropdown.Item>
        <NavDropdown.Item as={Link} to='/Approve MutualFunds' eventKey="4.3">Approve Mutual funds</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to='/Approve Reverse Mortage' eventKey="4.4">ApproveReverse mortgage</NavDropdown.Item>
      </NavDropdown>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Admindashboard;
