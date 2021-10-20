import logo from "./logo.svg";
import "./App.css";
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
