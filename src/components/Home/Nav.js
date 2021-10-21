import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";
import Forum from "../Forum/Forum";
import Characters from "../Characters/Characters";
import Versus from "../Versus/Versus";
import Home from "../Home/Home";

const Navb = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/Characters">
                Characters
              </Nav.Link>
              <Nav.Link as={Link} to="/Versus">
                Versus
              </Nav.Link>
              <Nav.Link as={Link} to="/Forum">
                Forum
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
      </Switch>
    </>
  );
};

//
export default Navb;
