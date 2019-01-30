import React, { Component } from "react";
import { Image, Menu } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

// function Greeting() {
//   return this
// }

class NavBar extends Component {

  navigateTo = route => {
    this.props.history.push(route)
  }

  render() {
    return (
      <div>
        <Menu fixed="top" inverted>
          <Menu.Item>
            <Image size="mini" src="https://react.semantic-ui.com/logo.png" />
          </Menu.Item>
          <Menu.Item as="a" onClick={() => this.navigateTo('/')}>Acceuil</Menu.Item>
          <Menu.Item as="a" onClick={() => this.navigateTo('/team')}>Equipe</Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item as="a" onClick={() => this.navigateTo('/login')}>Connexion</Menu.Item>
            <Menu.Item as="a" onClick={() => this.navigateTo('/login')}>Déconnexion</Menu.Item>
            {/* <Greeting isLoggedIn /> */}
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default withRouter(NavBar)