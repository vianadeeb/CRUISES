import React, { Component } from 'react';
import { Col, Row} from 'react-bootstrap';
import {TextInput} from 'evergreen-ui';
import './book.css';
class Book extends Component {
    render() {
        return (
            <div >
           <Row style={{marginRight:0 }}>
            <div id="rea">
           <Col xs="4">
           <img id="sda" src={require('./ss.jpg')} alt="img" /> 
           </Col>
           </div>
           <Col xs="8">
             <p>Book This Cruise</p>
             <TextInput
  name="text-input-name"
  placeholder="Text input placeholder..."
/>
           
           </Col>

           </Row>
            </div>

        )
    }
}
export default Book;