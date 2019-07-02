import React, { Component } from "react";
//import ReactDOM from "react-dom";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faBars, faTimes, faSearch } from "@fortawesome/free-solid-svg-icons";
import { SearchInput ,Popover,Pane,Text,Spinner} from 'evergreen-ui';
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import './vian.css';
import { Button, Nav, Navbar } from "react-bootstrap";

class Sp extends Component {
  render() {
    return (
      <div >
<Pane display="flex" alignItems="center" justifyContent="center" height={400} delay={300}>
  <Spinner  marginX="auto" marginY={120} />
</Pane>
      </div>
    );
  }
}
export default Sp;

