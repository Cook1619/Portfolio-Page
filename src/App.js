import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import About from "./components/About";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link" href="/about">
                    About
                  </a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link" href="#">
                    Resume
                  </a>
                </li>
              </ul>
              <span class="navbar-text">Text goes here</span>
            </div>
          </nav>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={About} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
