import "./App.css";
import Nav from "./components/Home/Nav";
import { Navbar } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import { Card } from "react-bootstrap";
import Navigation from "./components/Home/Navigation";
import { CharacterDetails } from "./service/CharacterDetails";
import { useState, useEffect } from "react";

function App() {
  const charactersArray = CharacterDetails();

  return (
    <div className="App">
      <Navigation></Navigation>
    </div>
  );
}

export default App;
