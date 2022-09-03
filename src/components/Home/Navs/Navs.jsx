import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./Navs.css";

const Navs = () => {
  return (
    <div>
      <Navbar expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home">
            <img src="images/logo.png" alt="Foodera" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">About Us</Nav.Link>
              <Nav.Link href="#features">Explore Food</Nav.Link>
              <Nav.Link href="#features">Review</Nav.Link>
              <Nav.Link href="#pricing">FAQ</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className="restnum">1800 789 677</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navs;
