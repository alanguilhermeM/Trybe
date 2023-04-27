import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

// arquivo App.test.js pode servir de exemplo
describe('Testando a aplicação, testando botão, e sua funcionalidade', () => {
  test('Verifica se o botão está na tela com o texto "Adicionar"', () => {
    render(<App />);

    const button = screen.getByText('Adicionar');
    expect(button).toBeInTheDocument();
  });

  test('Ao clicar no botão Adicionar a tarefa deve ser adicionada na tela', () => {
    // Use o userEvent, para simular a digitação do usuário e o clique.
    render(<App />);
    const inputTask = screen.getByLabelText('Tarefa:');
    const button = screen.getByText('Adicionar');
    userEvent.type(inputTask, 'Oi');
    userEvent.click(button);
    expect(inputTask.value).toBe('');
    const task = screen.getByText('Oi');
    expect(task).toBeInTheDocument();
  });
});
