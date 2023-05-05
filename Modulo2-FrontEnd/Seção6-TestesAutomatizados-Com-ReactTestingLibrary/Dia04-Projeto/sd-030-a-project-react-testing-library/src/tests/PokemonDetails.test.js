import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';
import data from '../data';

describe('Teste o componente <FavoritePokemon.js />', () => {
  test('', () => { //
    renderWithRouter(<App />);
    const link = screen.getByRole('link', { name: /more details/i });
    userEvent.click(link);

    screen.getByRole('heading', { name: /pikachu details/i });
    expect(link).not.toBeInTheDocument();
    screen.getByRole('heading', { name: /summary/i });
    screen.getByText(/this intelligent pokémon roasts hard berries with electricity to make them tender enough to eat\./i);
  });

  test('', () => {
    renderWithRouter(<App />);
    userEvent.click(screen.getByRole('link', { name: /more details/i }));

    screen.getByRole('heading', { name: /game locations of pikachu/i });
    const imgsMap = screen.getAllByAltText('Pikachu location');
    expect(imgsMap).toBeDefined();

    data[0].foundAt.forEach((element, i) => {
      const nameLocation = screen.getByText(element.location);
      expect(nameLocation).toBeDefined();

      expect(element.map).toBe(imgsMap[i].src);
    });
  });

  test('', () => {
    renderWithRouter(<App />);
    userEvent.click(screen.getByRole('link', { name: /more details/i }));

    const checkbox = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
    userEvent.click(checkbox);

    const fav = screen.getByRole('img', { name: /pikachu is marked as favorite/i });
    expect(fav).toBeInTheDocument();

    userEvent.click(checkbox);
    expect(fav).not.toBeInTheDocument();
  });
});
