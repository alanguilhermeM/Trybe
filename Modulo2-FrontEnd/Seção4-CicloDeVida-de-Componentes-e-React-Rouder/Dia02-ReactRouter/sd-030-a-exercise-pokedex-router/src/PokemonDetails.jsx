import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PokemonDetails extends Component {
  render() {
    const { match: { params: { id } }, pokemonList } = this.props;
    const name = pokemonList.find((pokemon) => pokemon.id === Number(id));
    const { foundAt } = name || {};

    return (
      <div>
        <h1>{`${name.name} details`}</h1>
        <p>{name.type}</p>
        <p>
          {`Average weight: ${name.averageWeight.value} 
          ${name.averageWeight.measurementUnit}`}
        </p>
        <p>{ `Resumo: ${name.summary}` }</p>
        <div>
          <h2>Locations:</h2>
          {foundAt.map(({ location, map }) => (
            <div key={ location }>
              <p>{location}</p>
              <img src={ map } alt="map" />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

PokemonDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  pokemonList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    foundAt: PropTypes.arrayOf(PropTypes.shape({
      location: PropTypes.string.isRequired,
      map: PropTypes.string.isRequired,
    })).isRequired,
  })).isRequired,
};
