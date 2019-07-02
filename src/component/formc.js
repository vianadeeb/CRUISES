import React, { Component } from "react";
import { Col, Row,Button} from 'react-bootstrap';
import './formc.css'
 class Formc extends Component {
  render() {
    return (
      <div >
      
      <Row style={{ marginRight: 0 }} id="lf" >
      <Col>
        <Row style={{marginRight:0 }}>
            <Col><p id="cu">Contact Us</p></Col>
        </Row>
       
        <Row style={{marginRight:0 }} >
            <Col xs={12} md={6}>
            <p id="dk">First Name</p>
            <input required type="text" id="zxa11" />
            </Col>
            <Col  xs={12}  md={6}>
            <p id="dk">Last Name</p>
            <input required type="text" id="zxa11"/>
            </Col>
            </Row>
            <Row style={{marginRight:0 }}>
            <Col xs={12} md={6}>
            <p id="dk">E-mail</p>
            <input required type="email" id="zxa11" />
            </Col>
            <Col xs={12}  md={6}>
            <p id="dk">Phone</p>
            <input required type="text" id="zxa11" />
            </Col>
            </Row>
         
            <Row style={{marginRight:0 }}>
            <Col xs={12} md={12} >
            <p id="dk11">Your Message</p>
            <textarea  id="zxa1" required/>
          
            <div id="ds">
            <Row style={{marginRight:0 }}>
           <Col  xs={6}> <Button id="bt2" >SEND Message</Button></Col> 
          
           <Col xs={6}> <Button id="qj" ><i className="fab fa-facebook-messenger" id="colo"></i>MESSENGER</Button></Col>
           </Row>
           </div>
            </Col>
          
        </Row>
        </Col>
      

       
        </Row>
      </div>
    );
  }
}
export default Formc;