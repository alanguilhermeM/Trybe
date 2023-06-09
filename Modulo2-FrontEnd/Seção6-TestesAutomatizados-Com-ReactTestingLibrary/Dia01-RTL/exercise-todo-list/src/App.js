import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listTodo: [],
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(todo) {
    this.setState((state) => ({ listTodo: [...state.listTodo, todo] }));
  }

  removeTodo(indexTodo) {
    this.setState((previousState) => ({
      listTodo: previousState.listTodo.filter((_item, index) => index !== indexTodo),
    }));
  }

  render() {
    const { listTodo } = this.state;

    return (
      <main className="App">
        <InputTodo
          addTodo={ (todo) => this.addTodo(todo) }
        />
        <ul data-testid="content">
          { listTodo.map((todo, index) => (
            <li key={ index + 1 }>

              <Item content={ todo } />
              <button onClick={ () => this.removeTodo(index) }>Remover</button>
            </li>
          )) }
        </ul>
      </main>
    );
  }
}

export default App;
