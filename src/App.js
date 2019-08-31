import React from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
// import './MainScreen.css';
import MainScreen from './MainScreen.js';

import Home from "./routes/home.js";
import Settings from "./routes/settings.js"

function App(props) {
  return (
    <Router>
      <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={MainScreen} />
            <Route path="/settings" component={Settings} />
            </Switch>
            <div>{props.children}</div>
      </div>
    </Router>
  );
}
function Header(props) {
  return (
    <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/settings">Settings</Link>
      </li>
  </ul>
</div>
  );
}
export default App;
