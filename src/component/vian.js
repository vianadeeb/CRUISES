import React, { Component } from "react";
import './vian.css';
import { Button, Nav, Navbar, NavDropdown, Form, FormControl } from "react-bootstrap";

class Vian extends Component {

  render() {
    return (
      <div>



        <Navbar bg="light" fixed="top" expand="lg">
          <Navbar.Brand href="/" id="lo" >Cruise</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/" >Home</Nav.Link>
              <Nav.Link href="aboutus">ABOUT US</Nav.Link>
              <Nav.Link href="cruises" >CRUISES</Nav.Link>
              <Nav.Link href="blog" >BLOG</Nav.Link>
              <Nav.Link href="pages" >PAGES</Nav.Link>
              <Nav.Link href="/contact" >CONTACTS</Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Navbar>


      </div>
    );
  }
}
export default Vian;
