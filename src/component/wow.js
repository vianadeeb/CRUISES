import React, { Component } from "react";
import WOW from "wowjs";
class Skills extends Component {
  
  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }
  render() {
    return (
      <div>
  
      </div>
    )
   }
}
export default Skills;