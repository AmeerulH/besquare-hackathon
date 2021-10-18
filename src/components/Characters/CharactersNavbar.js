import React from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  NavbarBrandProps,
} from "react-bootstrap";

const CharactersNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="charactersNavbar">
          <Nav.Link href="charactersPower">Power</Nav.Link>
          <Nav.Link href="charactersBio">Bio</Nav.Link>
          <Nav.Link href="charactersConnections">Connections</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default CharactersNavbar;
