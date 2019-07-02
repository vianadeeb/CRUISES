import React,{ Component} from 'react';
import { Col, Row} from 'react-bootstrap';
import './latest.css'
class Latest extends Component {
    render() {
        return (
            <div id="xd" >
                <Row style={{ marginRight: 0 }}>
                    <Col>
                        <Row style={{ marginRight: 0 }}>
                            <Col>
                                <p id="lat">Latest Blog Posts</p>
                            </Col>
                        </Row>
                        <div id="fd">
                            <Row style={{ marginRight: 0 }}>
                                <Col xs={12} md={6}>
                                <div className="wow fadeInLeft">
                                   <img src={require('./888.jpg')} id="ima" alt="img" />
                                    <p id="top">Top Ten Cruise Destinations</p>
                                    <p id="fpz">by Mike Barnes | Apr 25, 2018  at 3:13 pm  | News</p>
                                   <p id="trav"> Travelers may argue over which city provides the most beautiful<br/>
                                    arrival by ship, but few would leave Rio de Janeiro far from<br/>
                                   the top of the list. Cruise ships sail into Guanabara Bay past...</p>
                                   </div>
                                </Col>
                                <Col xs={12} md={6}>
                                <div className="wow fadeInRight">
                                    <img src={require('./999.jpg')} id="ima" alt="img" />
                                    <p id="top">5 Adventure Cruises You Cannot Miss</p>
                                    <p id="fpz">by Mike Barnes | Apr 25, 2018  at 3:13 pm  | News</p>
                                   <p id="trav"> For many cruise lovers, setting sail is half the fun.<br/>
                                   The other half is packing as much full-scale adventure into a cruise as possible. <br/>
                                   Top cruise companies are ready to oblige, with adventure-cruise...</p>
                                   </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Latest;