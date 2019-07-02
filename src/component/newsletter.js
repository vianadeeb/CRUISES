import React, { Component } from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import './newsletter.css';
class Newsletter extends Component {
    render() {
        return (
            <div  id="rr" >
                <Row id="rr" style={{marginRight:0 }}>
                    <Col>
                        <Row style={{marginRight:0 }}>

                            <Col>
                            <div className="wow flipInX">
                            <p id="news">Newsletter</p>
                            </div>
                            </Col>
                        </Row>
                        <Row style={{marginRight:0 }}>

                            <Col><p id="keep">Keep up with our always upcoming news and updates.
                           Enter your e-mail<br /> and subscribe to our newsletter.</p></Col>
                        </Row>
                        <div id="zf">
                        <Row id="inp" style={{marginRight:0 }}>
                              <Col>
                              <input id="in" type="email"  required placeholder="Your e-mail"/>
                              <Button id="bt" >SUBSCRIBE</Button>
                              </Col>
                        </Row>
                        </div>


                    </Col>
                </Row>
            </div>

        )
    }
}
export default Newsletter;