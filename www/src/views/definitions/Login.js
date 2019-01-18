import React, { Component } from 'react';
import { Container, Divider } from 'semantic-ui-react'
import { LoginForm } from '../../components/index'

class Login extends Component {
  render() {
    return (
      <div>
        <Container text>
          <h1>Connexion</h1>
          <Divider></Divider>
          <LoginForm />
        </Container>
      </div>
    )
  }
}

export default Login