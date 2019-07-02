import React,{Component} from 'react';
import { Col, Row} from 'react-bootstrap';
import './norway.css'
class Norway extends Component {
    render() {
        return (
            <div >
              <Row id="ii1" style={{marginRight:0 }}>
                 <Col>
                 <Row style={{marginRight:0 }}>
                     <Col xs={12} sm={8} md={4} >
                         <Row style={{marginRight:0 }}>
                             <Col xs={4}>
                             <div id="abou1"></div>
                             </Col>
                             <Col xs={8}>
                             <p id="au1">CRUISES</p>
                             
                             </Col>
                         </Row>
                         <Row style={{marginRight:0 }}>
                             <Col>
                             <p id="ats1">Cruise from South to North of Norway</p>
                             </Col>
                             </Row>
                   
                     
                     </Col>
                     <Col xs={6}>
                     
                     </Col>
                 </Row>
                 
                 
                 
                 
                 </Col>

                  </Row>  
            </div>
        )
    }
}
export default Norway;
