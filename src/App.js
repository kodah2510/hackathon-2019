import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import MainScreen from './MainScreen.js';

import Home from "./routes/home.js";
import Settings from "./routes/settings.js"

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Route exact path="/" component={Mainscreen} />
        <Route path="/settings" component={Settings} />
      </div>
    </Router>
  );
}
function Header() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/settings">Settings</Link>
      </li>
    </ul>

  );
}
export default App;
