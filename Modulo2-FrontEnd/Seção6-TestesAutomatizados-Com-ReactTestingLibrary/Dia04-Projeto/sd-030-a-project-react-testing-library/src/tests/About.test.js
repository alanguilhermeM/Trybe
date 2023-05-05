import React from 'react';
import { screen } from '@testing-library/react';
import About from '../pages/About';
import renderWithRouter from '../renderWithRouter';

describe('Teste o componente <About.js />', () => {
  test('', () => {
    renderWithRouter(<About />);
    const aboutPokedex = screen.getByText(/this application simulates a pokédex, a digital encyclopedia containing all pokémon/i);
    const aboutPokedex2 = screen.getByText(/one can filter pokémon by type, and see more details for each one of them/i);
    const img = screen.getByRole('img', { name: /pokédex/i });
    expect(aboutPokedex).toBeInTheDocument();
    expect(aboutPokedex2).toBeInTheDocument();
    expect(img.src).toBe('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');

    const heading = screen.getByRole('heading', { name: /about pokédex/i });
    expect(heading).toBeInTheDocument();
  });
});
