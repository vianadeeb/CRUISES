import React, { Component } from "react";
import {Carousel} from 'react-bootstrap';
import './testimonials.css'
 class Testimonials extends Component {
  render() {
   
    return (
      <div id="cb">
   <Carousel>
  <Carousel.Item id="sf">
  {/* <img src={require('./pen.png')} id="im11" /> */}
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Cruise has a flexible pricing policy</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item id="sf">
  {/* <img src={require('./ss.jpg')} id="im11" /> */}

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Booking a cruise online has never been so easy!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item id="sf">
  {/* <img src={require('./999.jpg')} id="im11" /> */}

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>We are a team of friendly managers who are always ready to help you choose a cruise of your dream</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

      </div>
    );
  }
}
export default Testimonials;