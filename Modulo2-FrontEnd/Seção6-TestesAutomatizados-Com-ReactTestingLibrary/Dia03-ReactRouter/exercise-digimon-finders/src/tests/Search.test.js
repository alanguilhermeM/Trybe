import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('realizando os testes da busca por Digimon', () => {
  it('É possível inserir um valor na caixa de busca;', () => {
    const { getByRole } = renderWithRouter(<App />);
    const input = getByRole('textbox', { name: /digimon:/i });
    userEvent.type(input, 'Greymon');
  });

  it('A tela inicia sem nenhum Digimon renderizado', () => {
    renderWithRouter(<App />);
    const digimon = screen.queryByTestId('digimonName');
    expect(digimon).not.toBeInTheDocument();
  });

  it('Exibe o Digimon buscado na tela', async () => {
    renderWithRouter(<App />);
    const input = screen.getByRole('textbox', { name: /digimon:/i });
    const btn = screen.getByRole('button', { name: /search digimon/i });
    userEvent.type(input, 'Greymon');
    userEvent.click(btn);
    const digimon = await screen.findByTestId('digimonName');
    expect(digimon).toBeInTheDocument();
    expect(digimon).toHaveTextContent('Greymon');
  });

  it('A mensagem de erro é renderizada caso o Digimon buscado não exista', async () => {
    renderWithRouter(<App />);
    const input = screen.getByRole('textbox', { name: /digimon:/i });
    const btn = screen.getByRole('button', { name: /search digimon/i });
    userEvent.type(input, 'Qualquer Coisa');
    userEvent.click(btn);
    const errorMessage = await screen.findByText('Qualquer Coisa is not a Digimon in our database.');
    expect(errorMessage).toBeInTheDocument();
  });

  it('A aplicação não realiza fetch caso a busca seja realizada com o input vazio.', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValueOnce({ json: jest.fn().mockResolvedValueOnce({}) });

    renderWithRouter(<App />);
    const input = screen.getByRole('textbox', { name: /digimon:/i });
    const btn = screen.getByRole('button', { name: /search digimon/i });
    userEvent.type(input, '');
    userEvent.click(btn);
    await waitFor(() => {
      expect(fetch).not.toBeCalled();
    });

    global.fetch.mockRestore();
  });
});
