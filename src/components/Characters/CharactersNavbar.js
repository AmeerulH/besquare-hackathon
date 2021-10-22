import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

import CharactersPower from "./CharactersPower";
import CharactersBio from "./CharactersBio";

const CharactersNavbar = (props) => {
  const character = props.c;
  console.log(character);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="charactersNavbar">
            <Nav.Link as={Link} to="/Character">
              Stats
            </Nav.Link>
            <Nav.Link as={Link} to="/CharacterBio">
              Bio
            </Nav.Link>
            <Nav.Link as={Link} to="/Character">
              Connections
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Switch>
        <Route
          c={character}
          path="/Character"
          component={CharactersPower}
        ></Route>
        <Route
          c={character}
          path="/CharacterBio"
          component={CharactersBio}
        ></Route>
      </Switch>
    </>
  );
};

export default CharactersNavbar;
