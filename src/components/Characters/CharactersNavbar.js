import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  NavbarBrandProps,
} from "react-bootstrap";

import CharactersPower from "./CharactersPower";
import CharactersBio from "./CharactersBio";

const CharactersNavbar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="charactersNavbar">
            <Nav.Link as={Link} to="/CharactersPower">
              Stats
            </Nav.Link>
            <Nav.Link as={Link} to="/CharactersBio">
              Bio
            </Nav.Link>
            <Nav.Link as={Link} to="/CharactersConnections">
              Connections
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Switch>
        <Route path="/CharactersPower" component={CharactersPower}></Route>
        <Route path="/CharactersBio" component={CharactersBio}></Route>
      </Switch>
    </>
  );
};

export default CharactersNavbar;
