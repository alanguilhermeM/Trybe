import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Item from '../Item';

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água']; // Use esse array como base para realizar os testes.
    render(<App />); // Caso precise de uma nova query adicione no object destructuring

    const button = screen.getByText('Adicionar');
    const input = screen.getByLabelText('Tarefa:');
    const content = screen.getByTestId('content');

    listTodo.map((item) => {
      userEvent.type(input, item);
      userEvent.click(button);
    });

    expect(input).toHaveValue('');
    expect(content).toHaveTextContent(listTodo[0]);
    expect(content).toHaveTextContent(listTodo[1]);
    expect(content).toHaveTextContent(listTodo[2]);
  });
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {
    const string = 'Olá';
    render(<Item content={ string } />);

    const text = screen.getByText('Olá');
    expect(text).toBeInTheDocument();
  });
});
