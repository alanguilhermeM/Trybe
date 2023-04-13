import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class Users extends Component {
  render() {
    const { greetingsMessage = 'Hi There', match: { params: { id } } } = this.props;
    return (
      <div>
        <h2>Users</h2>
        <p> { `${greetingsMessage} User ${id}` }, this is my awesome Users component </p>
        <Link to="/" > Voltar a pagina inicial </Link>
      </div>
    );
  }
};

export default Users;

