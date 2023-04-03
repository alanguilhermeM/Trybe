import React from 'react';
import { arrayOf } from 'prop-types';

import Pokemon from './Pokemon';
import { pokemonType } from '../types';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPokemonIndex: 0,
    };
    this.handleNextPokemon = this.handleNextPokemon.bind(this);
  }

  handleNextPokemon() {
    const { currentPokemonIndex } = this.state;
    const { pokemonList } = this.props;
    const nextIndex = currentPokemonIndex + 1;
    if (nextIndex < pokemonList.length) {
      this.setState({ currentPokemonIndex: nextIndex });
    } else {
      this.setState({ currentPokemonIndex: 0 });
    }
  }

  render() {
    const { pokemonList } = this.props;
    const { currentPokemonIndex } = this.state;
    const currentPokemon = pokemonList[currentPokemonIndex];
    return (
      <>
        <h1> Pokédex </h1>
        <div className="pokedex">
          <Pokemon key={ currentPokemon.id } pokemon={ currentPokemon } />
        </div>
        <button onClick={ this.handleNextPokemon }>Próximo pokémon</button>
      </>
    );
  }
}

Pokedex.defaultProps = {
  pokemonList: [],
};

Pokedex.propTypes = {
  pokemonList: arrayOf(pokemonType),
};

export default Pokedex;
