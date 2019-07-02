import React, { Component } from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import './addbranch.css'
class Branch extends Component {
    render() {
        return (
            <div >
                <Row id="play" style={{marginRight:0 }}>
                    <Col>
                        <Row style={{marginRight:0 }}>
                            <Col><div className="wow fadeInUp">
                                <p id="what">What Awaits You</p>
                                </div>
                            </Col>
                        </Row>
                        <Row style={{marginRight:0 }}>
                            <Col><div className="wow fadeInDown">
                            <p id="dd">Our cruise company offers great experiences to every client. Watch our</p>
                            <p id="dd">presentation to find out more about our cruises.</p>
                            </div>
                            </Col>
                            
                        </Row>

                        <Row style={{marginRight:0 }}>
                            <Col id="plays"><div className="wow fadeInDown">
                                 <Button id="pl"> <i className="fas fa-play"></i><span id="ss">PLAY</span></Button>
                                 </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>


            </div>

        )
    }
}
export default Branch;