import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import './about.css';
class About extends Component {
    render() {
        return (
            <div >
           <Row id="ab" style={{marginRight:0 }}>
             <Col xs={12} lg={4}>
             <img src={require('./q.png')} id="ims" alt="img" />
             
             
             </Col> 
             <Col xs={12} lg={8}>
             <p id="about">About our Company</p>
             <p id="pp">Cruise is the world’s first inspirational cruise search
         & booking service that focuses on what’s really important: your Interests and your Budget!</p>
         <p id="pp">Our company offers an innovative and useful online cruise booking experience,
              so you can find your perfect destination in just a couple of clicks!</p>
              <Row id="qw" style={{marginRight:0 }}>
                   <Col xs={5}>
                <img src={require('./x.png')} alt="img"/>
                </Col>
                <Col xs={6}>
                <p id="oliv">Oliver Morgan </p>
               <p id="foun"> Founder, Cruise</p>
                </Col>
              </Row>


             </Col> 
          
                
          

             
               </Row>  

            </div>

        )
    }
}
export default About;