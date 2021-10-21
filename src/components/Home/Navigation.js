import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";
import Characters from "../Characters/Characters";
import Versus from "../Versus/Versus";
import Home from "./Home";
import Forum from "../Forum/Forum";
import ShowCharacters from "../Characters/ShowCharacters";

const Navigation = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            React-Bootstrap
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
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
        <Route path="/Character" component={ShowCharacters}></Route>
      </Switch>
    </>
  );
};

export default Navigation;
