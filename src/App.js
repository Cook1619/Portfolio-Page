import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HomePage from './components/HomePage';

class App extends Component {

  render() {
    return (
      <Router>
        <Fragment>
          <nav>
            <ul className="navbar-nav">
              <li lassName="nav-item">
                <Link className="btn" to="/">Home Page</Link>
              </li>
              <li lassName="nav-item">
                <Link to="/about">About</Link>
              </li>
              <li lassName="nav-item">
                <Link to="/resume">Resume</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </Fragment>
      </Router>
    )
  }
}

export default App;
