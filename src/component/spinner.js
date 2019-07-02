import React from "react";
import { Spinner as RBSpinner } from "react-bootstrap";
import "./spinner.css";

const Spinner = () => (
  <RBSpinner
    animation="border"
    variant="primary"
    role="status"
    className="spinner"
  >
    {/* this line is for Accessibility for people with disablity :) */}
    <span className="sr-only">Loading...</span>
  </RBSpinner>
);

export default Spinner;
