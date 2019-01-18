import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Views from "./views/index";

import { NavBar } from './components/index'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar/>
          <Route path="/" exact component={Views.Home} />
          <Route path="/team" component={Views.Team} />
          <Route path="/login" component={Views.Login} />
        </div>
      </Router>
    );
  }
}

export default App;
