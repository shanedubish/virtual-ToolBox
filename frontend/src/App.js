import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About.js";
import Main from "./components/Main.js";
import Navigation from "./components/Nav.js";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Route path="/" exact component={About} />
        <Route path="/main" exact component={Main} />
      </div>
    </Router>
  );
}

export default App;
