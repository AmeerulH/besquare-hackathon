import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home";
import { CharacterDetails } from "./service/CharacterDetails";
import { useState } from "react";

function App() {
  const [characters, setCharacters] = useState(CharacterDetails());

  console.log(characters);
  return (
    <div className="App">
      <Home></Home>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
