import React, { Component } from 'react'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

class StrictAccess extends Component {
  render() {
    const { username = 'joao', password = 1234 } = this.props.user;
    if (username === 'joao' && password === 1234) {
        return (
            <p>Welcome João!</p>
        )
    } else {
        alert('Access denied');
        return <Redirect to="/" />
    }
  }
}

export default StrictAccess