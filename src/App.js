import "./App.css";
import Nav from "./components/Home/Nav";
import { Navbar } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import { Card } from "react-bootstrap";
import Navigation from "./components/Home/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
    </div>
  );
}

export default App;
