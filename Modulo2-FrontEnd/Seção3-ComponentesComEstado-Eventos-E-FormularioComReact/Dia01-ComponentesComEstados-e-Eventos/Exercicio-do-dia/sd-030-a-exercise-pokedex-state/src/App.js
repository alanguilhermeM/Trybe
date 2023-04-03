import React from 'react';

import './App.css';
import Pokedex from './components/Pokedex';

import pokemonList from './data';

class App extends React.Component {
  state = {
    pokemonsFiltred: [...pokemonList],
  };

  xablau = (type) => {
    const lista = pokemonList.filter((pokemon) => pokemon.type === type);

    this.setState({
      pokemonsFiltred: [...lista],
    });
  };

  remove = () => {
    this.setState({
      pokemonsFiltred: [...pokemonList],
    });
  };

  render() {
    const { pokemonsFiltred } = this.state;
    return (
      <div className="App">
        <Pokedex pokemonList={ pokemonsFiltred } />
        <button type="button" onClick={ () => this.xablau('Fire') }>Fire</button>
        <button type="button" onClick={ () => this.xablau('Psychic') }>Psychic</button>
        <button type="button" onClick={ () => this.remove() }>All</button>
      </div>
    );
  }
}

export default App;
