import React from 'react';
import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Realizando os testes das rotas da aplicação', () => {
  it('Teste que a aplicação renderiza corretamente em seu estado inicial', () => {
    renderWithRouter(<App />);
    const title = screen.getByRole('heading', {
      name: /search digimon/i,
    });
    expect(title).toBeInTheDocument();

    const about = screen.getByRole('link', {
      name: /about/i,
    });
    const search = screen.getByRole('link', {
      name: /search digimon/i,
    });

    expect(about).toBeInTheDocument();
    expect(search).toBeInTheDocument();
  });
  it('clicar no link About a aplicação é redirecionada para a rota /about, o título About é renderizado na tela', () => {
    const { history } = renderWithRouter(<App />);
    const about = screen.getByRole('link', {
      name: /about/i,
    });
    userEvent.click(about);
    const { pathname } = history.location;
    expect(pathname).toBe('/about');
    const titleAbout = screen.getByRole('heading', {
      name: /about/i,
    });
    expect(titleAbout).toBeInTheDocument();
  });

  it('deve testar um caminho não existente e a renderização do Not Found', () => {
    const { history } = renderWithRouter(<App />);

    act(() => {
      history.push('/pagina/que-nao-existe/');
    });

    const notFoundTitle = screen.getByRole(
      'heading',
      { name: 'Page Not Found' },
    );
    expect(notFoundTitle).toBeInTheDocument();
  });
});
