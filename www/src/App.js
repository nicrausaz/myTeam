import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Index from "./views/Index";
import Team from "./views/Team";

import './css/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Index} />
          <Route path="/team/" component={Team} />
        </div>
      </Router>
    );
  }
}

export default App;
