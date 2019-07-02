import React ,{Component} from 'react';
import { Col, Row} from 'react-bootstrap';
import './friendly.css'
class Friendly extends Component {
    render() {
        return (
            <div >
                <div id="flx">
             <Row style={{marginRight:0 }}>
              <Col xs={12} md={6} lg={3}>
              <div className="wow fadeInLeft">
              <div id="sun"><i className="fas fa-cloud-sun"></i></div>
              <p id="fri">Friendly Managers</p>
              <p id="we">We are a team of friendly managers who are
             always ready to help you choose a cruise of your dream.</p>
             </div>
              </Col>
              <Col xs={12} md={6} lg={3}>
              <div className="wow fadeInUp">
              <div id="sun"><i className="fas fa-ship"></i></div>
              <p id="fri">Flexible Prices</p>
              <p id="we">Cruise has a flexible pricing policy, 
              which applies to all our offers. No matter what cruise it is, it won’t be overpriced.</p>
              </div>
              </Col>
              <Col xs={12} md={6} lg={3}>
              <div className="wow fadeInDown">
              <div id="sun"><i className="far fa-map"></i></div>
              <p id="fri">Lots of Cruises</p>
              <p id="we">Since our establishment, 
              we have been offering a wide range of cruises to all our customers worldwide.</p>
              </div>
              </Col>
              <Col xs={12} md={6} lg={3}>
              <div className="wow fadeInRight">
              <div id="sun"><i className="fas fa-globe-americas"></i></div>
              <p id="fri">Online Booking</p>
              <p id="we">Booking a cruise online has never been so easy!
               Just a couple of clicks to find what you need and you’re all set!</p>
               </div>
              </Col>
             </Row>
            </div>
            </div>
        )
    }
}
export default Friendly;