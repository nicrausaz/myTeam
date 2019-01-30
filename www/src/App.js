import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { checkAuth } from './store/actions/users';

import Views from "./views/index";
import { NavBar } from './components/index'

class App extends Component {
  componentDidMount() {
    this.props.auth()
  }
  componentDidUpdate() {
    this.props.auth()
  }
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route path="/" exact component={Views.Home} />
          <Route path="/team" component={Views.Team} />
          <Route path="/login" component={Views.Login} />
          <Route path="/profile" render={() => (
            this.props.isAuth ? (
              console.log('yes')
            ) : (
              <Redirect to="/login" />
              )
          )} />
          {JSON.stringify(this.props)}
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.userIsAuth
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    auth: () => dispatch(checkAuth())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
