import React from 'react';
import '../styles/pokemon.css';
import { Link } from 'react-router-dom';
import { pokemonType } from '../types';

class Pokemon extends React.Component {
  render() {
    const { pokemon } = this.props;
    const { id, name, type, averageWeight, image } = pokemon;

    return (
      <div className="pokemon">
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>
            {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
        </div>
        <img src={ image } alt={ `${name} sprite` } />
        <Link to={ `/pokemon/${id}` }>Details</Link>
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: pokemonType.isRequired,
};

export default Pokemon;
