import React, { Component } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'

export default class LoginForm extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    return (
      <Form>
        <Form.Field>
          <Form.Input label='Email' type='email' placeholder='example@mail.com' onChange={this.handleChange} />
        </Form.Field>
        <Form.Field>
          <Form.Input label='Mot de passe' type='password' placeholder='************' onChange={this.handleChange} />
        </Form.Field>
        <Form.Field>
          <Checkbox label='Se souvenir de mon email' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}
