import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../../store/actions';

class Team extends Component {
  componentDidMount() {
    console.log(this.props.getUsers())
  }
  render() {
    return (
      <div>
        <h1>Team page</h1>
        <div>{JSON.stringify(this.props.users)}</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
}

export default connect(mapStateToProps, { getUsers })(Team);