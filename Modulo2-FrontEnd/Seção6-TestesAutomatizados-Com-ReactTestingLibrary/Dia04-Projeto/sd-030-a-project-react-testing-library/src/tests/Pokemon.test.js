import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente <FavoritePokemon.js />', () => {
  test('', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/pokemon/25');

    screen.getByText(/pikachu/i);
    const type = screen.getAllByTestId(/pokemon-type/i);
    expect(type[0].textContent).toBe('Electric');

    const avrWeight = screen.getByText(/average weight: 6\.0 kg/i);
    expect(avrWeight.textContent).toBe('Average weight: 6.0 kg');

    const img = screen.getByRole('img', { name: /pikachu sprite/i });
    expect(img.src).toBe('https://archives.bulbagarden.net/media/upload/b/b2/Spr_5b_025_m.png');
    expect(img.alt).toBe('Pikachu sprite');
  });

  test('', () => {
    const { history } = renderWithRouter(<App />);
    const link = screen.getByRole('link', { name: /more details/i });
    expect(link.href).toBe('http://localhost/pokemon/25');
    userEvent.click(link);
    const { pathname } = history.location;
    expect(pathname).toBe('/pokemon/25');
  });

  test('', () => {
    renderWithRouter(<App />);
    const link = screen.getByRole('link', { name: /more details/i });
    userEvent.click(link);

    userEvent.click(screen.getByRole('checkbox', { name: /pokémon favoritado\?/i }));

    const img = screen.getAllByRole('img', { name: /pikachu is marked as favorite/i });
    expect(img[0].src).toBe('http://localhost/star-icon.svg');
    expect(img[0].alt).toBe('Pikachu is marked as favorite');
  });
});
