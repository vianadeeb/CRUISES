import React ,{Component} from 'react';
import { Col, Row,  } from 'react-bootstrap';
//import {Animated} from "react-animated-css";
import './category.css'
class Category extends Component {
    render() {
        return (
            <div >
                <Row style={{marginRight:0 }}>
                    <Col>
                        <p id="p1">Popular Cruises</p>
                    </Col>
                </Row>
                <div id="x">
                <Row style={{marginRight:0 }} >
                    <Col xs={12} md={6} lg={4} >
                    <div className="wow fadeInLeft">
                    {/* <Animated animationIn="fadeInLeft" animationOut="bounceOutRight" animationInDuration={1000} animationOutDuration={1000} isVisible={true}> */}
                       <div id="rra"><img src={require('./333.jpg')} id="fk" alt="img"/></div> 
                        <div id="ana"> <span id="fr">From $480</span>  <span >. 7 days</span> </div>
                        <p id="fontp">Greece, Italy & Croatia Cruise (7 Nights)</p>
                        {/* </Animated> */}
                        </div>

                    </Col>

                    <Col xs={12} md={6} lg={4}>
                    <div className="wow fadeInLeft">
                    {/* <Animated animationIn="fadeInLeft" animationOut="bounceOutRight" animationInDuration={1000} animationOutDuration={1000} isVisible={true}> */}
                    <div id="rra"> <img src={require('./222.jpg')} id="fk" alt="img"/></div>
                        <div id="ana"> <span id="fr">From $480</span>  <span >. 7 days</span> </div>
                        <p id="fontp">Greece, Italy & Croatia Cruise (7 Nights)</p>
                        {/* </Animated> */}
                       </div>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                    <div className="wow fadeInLeft">
                    {/* <Animated animationIn="fadeInLeft" animationOut="bounceOutRight" animationInDuration={1000} animationOutDuration={1000} isVisible={true}> */}
                    <div id="rra"><img src={require('./111.jpg')} id="fk" alt="img"/></div>
                        <div id="ana"> <span id="fr">From $480</span>  <span >. 7 days</span> </div>
                        <p id="fontp">Greece, Italy & Croatia Cruise (7 Nights)</p>
                        {/* </Animated> */}
                        </div>
                    </Col>
                


                    <Col xs={12} md={6} lg={4}>
                    <div className="wow fadeInLeft">
                    {/* <Animated animationIn="fadeInLeft" animationOut="bounceOutRight" animationInDuration={1000} animationOutDuration={1000} isVisible={true}> */}
                    <div id="rra"> <img src={require('./333.jpg')} id="fk" alt="img" /></div>
                        <div id="ana"> <span id="fr">From $480</span>  <span >. 7 days</span> </div>
                        <p id="fontp">Greece, Italy & Croatia Cruise (7 Nights)</p>
                        {/* </Animated> */}
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                    <div className="wow fadeInLeft">
                    {/* <Animated animationIn="fadeInLeft" animationOut="bounceOutRight" animationInDuration={1000} animationOutDuration={1000} isVisible={true}> */}
                    <div id="rra"> <img src={require('./222.jpg')} id="fk" alt="img" /></div>
                        <div id="ana"> <span id="fr">From $480</span>  <span>. 7 days</span> </div>
                        <p id="fontp">Greece, Italy & Croatia Cruise (7 Nights)</p>
                        {/* </Animated> */}
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                    <div className="wow fadeInLeft">
                    {/* <Animated animationIn="fadeInLeft" animationOut="bounceOutRight" animationInDuration={1000} animationOutDuration={1000} isVisible={true}> */}
                    <div id="rra"> <img src={require('./111.jpg')}id="fk" alt="img" /></div>
                        <div id="ana"> <span id="fr">From $480</span>  <span>. 7 days</span> </div>
                        <p id="fontp">Greece, Italy & Croatia Cruise (7 Nights)</p>
                        {/* </Animated> */}
                        </div>
                    </Col>
                </Row>
                </div>
            </div>

        )
    }
}
export default Category;