import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { login } from '../../store/actions/users';

class LoginForm extends Component {
  state = {}

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  validate = () => {
    return this.state.email && this.state.password
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.validate()) {
      this.props.login(this.state)
    }
  }

  render() {
    return (
      <div>
        <Form>
          <Form.Field>
            <Form.Input label='Email' type='email' placeholder='example@mail.com' name='email' value={this.state.email} onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <Form.Input label='Mot de passe' type='password' placeholder='************' name="password" value={this.state.password} onChange={this.handleChange} />
          </Form.Field>
          <Button type='submit' onClick={this.handleSubmit}>Submit</Button>
          {JSON.stringify(this.props)}
        </Form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading,
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (data) => dispatch(login(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
