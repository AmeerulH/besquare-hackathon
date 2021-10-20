import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Features from "./Features";
import MainContent from "./MainContent";

const Home = () => {
  return (
    <div>
      <MainContent></MainContent>
      <Features></Features>
    </div>
  );
};

export default Home;
