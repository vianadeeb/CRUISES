import React from "react";
import { Container as RBContainer } from "react-bootstrap";
import "./container.css";

const Container = ({ children }) => (
  <RBContainer className="rb-container">{children}</RBContainer>
);

export default Container;