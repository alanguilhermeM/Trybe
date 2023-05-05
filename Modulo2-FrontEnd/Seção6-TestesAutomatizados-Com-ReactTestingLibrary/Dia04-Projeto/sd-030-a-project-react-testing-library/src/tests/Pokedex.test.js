import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import renderWithRouter from '../renderWithRouter';
import Pokedex from '../pages/Pokedex';
import App from '../App';
import pokemonList from '../data';

describe('Teste o componente <Pokedex.js />', () => {
  test('teste', () => {
    renderWithRouter(<Pokedex
      pokemonList={ [pokemonList[0], pokemonList[1]] }
      isPokemonFavoriteById={ { [pokemonList[0].id]: false, [pokemonList[0].id]: false } }
    />);
    const h2 = screen.getByRole('heading', { name: /encountered pokémon/i, level: 2 });
    expect(h2).toBeInTheDocument();
  });

  test('', () => {
    renderWithRouter(<App />);
    const firtPokemon = screen.getAllByRole('img');
    screen.getByText(/pikachu/i);
    expect(firtPokemon.length).toBe(1);

    const btn = screen.getByRole('button', { name: /próximo pokémon/i });
    act(() => userEvent.click(btn));

    screen.getByText(/charmander/i);
    const nextPokemon = screen.getAllByRole('img');
    expect(nextPokemon.length).toBe(1);
  });

  test('', () => {
    renderWithRouter(<App />);
    const btn = screen.getByRole('button', { name: /próximo pokémon/i });
    userEvent.click(btn);
    userEvent.click(btn);
    userEvent.click(btn);
    userEvent.click(btn);
    userEvent.click(btn);
    userEvent.click(btn);
    userEvent.click(btn);
    userEvent.click(btn);

    const lastPokemon = screen.getAllByRole('img');
    screen.getByText(/dragonair/i);
    expect(lastPokemon.length).toBe(1);

    userEvent.click(btn);

    const firtPokemon = screen.getAllByRole('img');
    screen.getByText(/pikachu/i);
    expect(firtPokemon.length).toBe(1);
  });

  test('', () => {
    renderWithRouter(<App />);
    screen.getByRole('button', { name: /all/i });
    const typeBtn = screen.getAllByTestId('pokemon-type-button');
    expect(typeBtn.length).toBe(7);
    expect(typeBtn[1].textContent).toBe('Fire');
    userEvent.click(typeBtn[1]);

    screen.getByRole('button', { name: /all/i });
    screen.getByText(/charmander/i);
    const btn = screen.getByRole('button', { name: /próximo pokémon/i });
    userEvent.click(btn);

    screen.getByRole('button', { name: /all/i });
    screen.getByText(/rapidash/i);
  });

  test('', () => {
    renderWithRouter(<Pokedex
      pokemonList={ [pokemonList[0], pokemonList[1]] }
      isPokemonFavoriteById={ { [pokemonList[0].id]: false, [pokemonList[0].id]: false } }
    />);
    const btn = screen.getByRole('button', { name: /próximo pokémon/i });
    const all = screen.getByRole('button', { name: /all/i });
    expect(all).toBeInTheDocument();
    userEvent.click(btn);
    screen.getByText(/charmander/i);
    userEvent.click(all);
    screen.getByText(/pikachu/i);
  });
});
