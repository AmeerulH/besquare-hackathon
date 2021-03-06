import React from "react";
import Features from "./Features";
import MainContent from "./MainContent";
import "./Home.css";
import HeroDisplay from "./HeroDisplay";

const Home = () => {
  return (
    <div className="bgHome">
      <MainContent></MainContent>
      <Features></Features>
      <HeroDisplay></HeroDisplay>
    </div>
  );
};

export default Home;
