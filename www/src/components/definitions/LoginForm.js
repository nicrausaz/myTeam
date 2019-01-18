import React, { Component } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'

export default class LoginForm extends Component {
  state = {}

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => this.setState({[e.target.name]: e.target.value})

  validate = () => { }

  handleSubmit = (e) => {
    e.preventDefault()
    this.validate()
  }


  render() {
    return (
      <Form>
      {JSON.stringify(this.state)}
        <Form.Field>
          <Form.Input label='Email' type='email' placeholder='example@mail.com' name='email' value={this.state.email} onChange={this.handleChange} />
        </Form.Field>
        <Form.Field>
          <Form.Input label='Mot de passe' type='password' placeholder='************' name="password" value={this.state.password} onChange={this.handleChange} />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}
