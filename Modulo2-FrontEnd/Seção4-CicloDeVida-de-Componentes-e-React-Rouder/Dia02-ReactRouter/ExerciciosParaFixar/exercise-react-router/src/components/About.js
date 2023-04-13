import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
class About extends Component {
  render() {
    return (
      <div>
        <h2>About</h2>
        <p> My awesome About component </p>
        <Link to="/" > Voltar a pagina inicial </Link>
      </div>
    );
  }
}

export default About;
