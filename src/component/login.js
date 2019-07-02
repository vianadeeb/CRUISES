import React, { Component } from 'react';
import { Col, Row, Button, Dropdown } from 'react-bootstrap';
import { Select, TextInputField } from 'evergreen-ui';
import './login.css';
class Login extends Component {
    render() {
        return (
            <div id="img" >
                <Row style={{ marginRight: 0 }}>
                    <Col >
                        <Row className="justify-content-xs-center" style={{ marginRight: 0 }}>
                            <Col >
                                <div className="wow fadeInUp">
                                    <p id="Cruises">CRUISES</p>
                                </div>
                            </Col>
                        </Row>
                        <Row style={{ marginRight: 0 }}>
                            <Col><p id="txt">for those who are hard to surprise</p></Col>
                        </Row>
                        <div id="se">
                            <Row style={{ marginRight: 0 }} id="voio1" >
                                <Col xs={12} md={4} id="se">

                                    <Select width={200} height={50}>
                                        <option value="foo" selected>Type of Cruise</option>
                                        <option value="bar">Classic Cruise</option>
                                        <option value="bar">Family Cruise</option>
                                        <option value="bar">Adventure Cruise</option>
                                    </Select>

                                </Col>

                                <Col xs={12} md={4}>

                                    <Select width={200} height={50}>
                                        <option value="foo" selected>Price</option>
                                        <option value="bar">$1,000</option>
                                        <option value="bar">$1,500</option>
                                        <option value="bar">$2,000</option>
                                    </Select>

                                </Col>






                                <Col xs={12} md={4}>
                                    <Button id="btn">SEARCH</Button>

                                </Col>
                            </Row>
                        </div>


                    </Col>
                </Row>



            </div>

        )
    }
}
export default Login;