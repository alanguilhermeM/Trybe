import React from 'react';
import './App.css';
import { BrowserRouter, Route,
  Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Pokedex from './components/Pokedex';
import pokemonList from './data';
import About from './pages/About';
import PokemonDetails from './PokemonDetails';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/about" component={ About } />
        <Route
          path="/pokemon/:id"
          render={ (props) => (<PokemonDetails
            { ...props }
            pokemonList={ pokemonList }
          />) }
        />
        <Route exact path="/">
          <Pokedex pokemonList={ pokemonList } />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
