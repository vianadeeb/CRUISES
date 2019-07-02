import React,{Component} from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import './overview.css'
class Overview extends Component {
    render() {
        return (
            <div >
                <Row id="vr" style={{ marginRight: 0 }}>
                    <Col>
                        <Row style={{ marginRight: 0 }}>
                            <Col xs={12} md={6}>
                                <p id="over">Overview</p>
                                <p id="vv">Lorem ipsum dolor sit amet, consectetur
                       adipisicing </p> <p id="vv">elit, sed do eiusmod tempor incididunt</p>
                                <p id="ut">Ut enim ad minim veniam,
                                     quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                      Duis aute irure dolor in reprehenderit in voluptate velit esse
                           cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non</p>
                           <div id="ato">
                           <Row style={{ marginRight: 0 }}>
                                <Col >
                                <Button id="ours" >VIEW OUR HISTORY</Button>
                                </Col>
                                <Col >
                                <Button id="mess"> <i className="fab fa-facebook-messenger" id="mmm"></i>MESSENGER</Button>
                                </Col>
                            </Row>
                            </div>
                            </Col>
                            

                            <Col xs={12} md={6}>
                                <img src={require('./pen.png')} id="eep" alt="img"/>
                            </Col>
                        </Row>

                    </Col>

                </Row>
            </div>
        )
    }
}
export default Overview;