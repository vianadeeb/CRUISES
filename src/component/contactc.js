import React,{Component} from 'react';
import { Col, Row } from 'react-bootstrap';
import './contactc.css'
class Contactc extends Component {
    render() {
        return (
            <div id="mnb" >
              <Row id="trt" style={{marginRight:0 }}>
                 <Col xs={12} md={4}>
                 <i className="fas fa-phone" id="hh" ></i>
                 <p id="af">1-800-1234-678</p>
                 <p id="af">1-800-9876-098</p>
                
                </Col>
                <Col xs={12} md={4}>
                <i className="fas fa-envelope " id="hh"></i>
                <p id="af">info@croczi.org</p>
                </Col>
                <Col xs={12} md={4}>
                <i className="fas fa-map-marker-alt " id="hh"></i>
                <p id="af">2130 Fulton Street San Diego, CA</p> 
                <p id="af">94117-1080 USA</p>
                </Col>
               
                  </Row>  
            </div>
        )
    }
}
export default Contactc;