import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Features from "./Features";
import MainContent from "./MainContent";
import "./Home.css";
import HeroDisplay from "./HeroDisplay";

const Home = () => {
  return (
    <div className="bg">
      <MainContent></MainContent>
      <Features></Features>
      <HeroDisplay></HeroDisplay>
    </div>
  );
};

export default Home;
