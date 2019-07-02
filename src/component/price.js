import React ,{Component} from 'react';
import { Col, Row} from 'react-bootstrap';
import './price.css'
class Price extends Component {
    render() {
        return (
            <div >
                <div id='bv'>
                <Row  style={{ marginRight: 0 }} id='bv'>
                    <Col xs={12} md={6} lg={3}>
                        <p id="rew">Price</p>
                        <p id="num">$450</p>
                    </Col>
                  <Col xs={12}  md={6} lg={3} >
                        <p id="rew">Features</p>
                        <p id="lj">Accommodation Restaurant Bar Gym Onboard Rock
                    Climbing Excursions Cinema Water Slide Spa & Massage Salon Casino</p>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                  <p id="rew">Description</p>
                  <p id="lj">Lorem ipsum dolor sit amet, 
                      consectetur adipisicing elit, sed do eiusmod 
                      tempor incididunt ut labore et dolore magna aliqua</p>
                    </Col>
                    <Col xs={12}  md={6} lg={3}>
                     <p id="rew">No. of People</p>
                     <p id="lj">2 Adults, 1 Children</p>
                    </Col>
                </Row>
                </div>
            </div>
        )
    }
}
export default Price;