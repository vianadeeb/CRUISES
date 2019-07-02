import React, { Component } from 'react';
import {  Form,NavDropdown,Nav,Navbar } from 'react-bootstrap';
import './xx.css'
class XX extends Component {
  state = {
    isOpen: false
}

handleHamburgerMenu = () => {
    this.setState({
        isOpen: !this.state.isOpen
    })
}
    render() {
        return (
            <div>

      <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React</Navbar.Brand>
  {/* {this.state.isOpen ? (
   
     ) : ( 
      )} */}
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
   
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
     
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
        
    </Nav>
    <Form inline>
      {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button> */}
      <button id="bar" onClick={this.handleHamburgerMenu}><i class="fas fa-bars" id="bar"></i></button>
    </Form>
  </Navbar.Collapse>
</Navbar>
                        </div>
        );
    }
}
export default XX;


    
  //                   {this.state.isOpen ? (
                  
                            
               
  //                   ) : (
                           
                            
  //                       )}

  // <button id="bar" onClick={this.handleHamburgerMenu}><i class="fas fa-bars" id="bar"></i></button>
              


       