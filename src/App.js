import "./App.css";
import Nav from "./components/Home/Nav";
import { Navbar } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import { Card } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
    </div>
  );
}

export default App;
