import "./App.css";
import Characters from "./components/Characters/Characters";
import Home from "./components/Home/Home";
import Navigation from "./components/Home/Navigation";
import { CharacterDetails } from "./service/CharacterDetails";
import { useState, useEffect } from "react";

function App() {
  const charactersArray = CharacterDetails();
  console.log(charactersArray);

  return (
    <div className="App">
      <Characters />
      <Navigation></Navigation>
    </div>
  );
}

export default App;
