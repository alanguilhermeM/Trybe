import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { FavoritePokemon } from '../pages';
import pokemonList from '../data';

describe('Teste o componente <FavoritePokemon.js />', () => {
  test('', () => {
    renderWithRouter(<FavoritePokemon />);
    const noFav = screen.getByText(/no favorite pokémon found/i);
    expect(noFav).toBeInTheDocument();
  });

  test('', () => {
    renderWithRouter(<FavoritePokemon pokemonList={ [pokemonList[0]] } />);

    const favorite = screen.getByText(/pikachu/i);
    expect(favorite).toBeInTheDocument();
  });
});
