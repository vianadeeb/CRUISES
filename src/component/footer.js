import React, { Component } from 'react';
import { Col, Row, Dropdown } from 'react-bootstrap';
import './footer.css'
class Footer extends Component {
    render() {
        return (
            <div>

                <Row id="footer" style={{ marginRight: 0 }}>
                    <Col>
                        <Row style={{ marginRight: 0 }}>
                            <Col xs={12} md={8}>
                                <p id="quick">Quick Links</p>
                                <Dropdown.Divider />
                                <Row style={{ marginRight: 0 }} id="re">

                                    <Col className="all" xs={6} md={3}>
                                        <p >All Cruises</p>
                                        <p >Classic Cruises</p>
                                        <p>Luxury Cruises</p>
                                        <p >Family Cruises</p>
                                        <p >Adventure Cruises</p>
                                    </Col>
                                    <Col className="all" xs={6} md={3}>
                                        <p>News</p>
                                        <p>About Us</p>
                                        <p>Login Page</p>
                                        <p>Registration Page</p>
                                        <p>Careers</p>
                                    </Col>

                                    <Col className="all" xs={6} md={3}>
                                        <p>Contacts</p>
                                        <p>Gallery</p>
                                        <p>Single Cruise</p>
                                        <p>Our History</p>
                                        <p>Booking</p>
                                    </Col>
                                    <Col className="all" xs={6} md={3}>
                                        <p>Facebook</p>
                                        <p>Twitter</p>
                                        <p>Instagram</p>
                                        <p>LinkedIn</p>
                                        <p>Pinterest</p>
                                    </Col>

                                </Row>


                            </Col>
                            <Col xs={12} md={4} >
                                <p id="con">Contact Information</p>
                                <Dropdown.Divider />

                                <Row id="re" style={{ marginRight: 0 }}>
                                    <Col>
                                        <p id="street"><span id="faz"><i className="fas fa-map-marker-alt"></i></span> 2130 Fulton Street San Diego, CA
                                            94117-1080 USA</p>
                                        <p id="street"><span id="faz"><i className="fas fa-phone" ></i></span> 1-800-1234-678
                                            1-800-8765-098</p>
                                        <p id="street"><span id="faz"><i className="fas fa-envelope " ></i></span>info@demolink.org</p>


                                    </Col>

                                </Row>

                            </Col>


                        </Row>

                        <p id="rights">© 2019 All Rights Reserved. Terms of Use and Privacy Policy</p>
                    </Col>


                </Row>

            </div >

        )
    }
}
export default Footer;