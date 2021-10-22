import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";
import Characters from "../Characters/Characters";
import Versus from "../Versus/Versus";
import Home from "./Home";
import Forum from "../Forum/Forum";
import ShowCharacters from "../Characters/ShowCharacters";
import About from "../About/About";
import "./Navigation.css";

const Navigation = () => {
  return (
    <>
      <Navbar className="main-nav" variant="dark">
        <Container>
          <Navbar.Brand
            style={{ fontWeight: "bold", color: "#66fcf1", fontSize: "2.5vw" }}
            as={Link}
            to="/"
          >
            S.P
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link style={{ color: "#66fcf1" }} as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link style={{ color: "#66fcf1" }} as={Link} to="/Characters">
                Characters
              </Nav.Link>
              <Nav.Link style={{ color: "#66fcf1" }} as={Link} to="/Versus">
                Versus
              </Nav.Link>
              <Nav.Link style={{ color: "#66fcf1" }} as={Link} to="/Forum">
                Forum
              </Nav.Link>
              <Nav.Link style={{ color: "#66fcf1" }} as={Link} to="/About">
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/Characters" component={Characters}></Route>
        <Route path="/Versus" component={Versus}></Route>
        <Route path="/Forum" component={Forum}></Route>
        <Route path="/Character" component={ShowCharacters}></Route>
        <Route path="/About" component={About}></Route>
      </Switch>
    </>
  );
};

export default Navigation;
