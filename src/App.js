import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home";
import Characters from "./components/Characters/Characters";
import CharactersPower from "./components/Characters/CharactersPower";
import Navigation from "./components/Home/Navigation";
import { CharacterDetails } from "./service/CharacterDetails";
import { useState, useEffect } from "react";
import ShowCharacters from "./components/Characters/ShowCharacters";

function App() {
  const charactersArray = CharacterDetails();

  return (
    <div className="App">
      <Navigation></Navigation>
      <ShowCharacters />
    </div>
  );
}

export default App;
