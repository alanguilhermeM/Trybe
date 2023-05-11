import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import CharacterCard from './components/CharacterCard';
import { minhaAcaoAssincrona } from './redux/actions';

class App extends React.Component {
  state = {
    character: '',
  }

  render() {
    const { character } = this.state;
    const { dispatch } = this.props;
    return (
      <div className="App">
        <label>
          Nome do Personagem:
          <input onChange={ ({ target }) => this.setState({ character: target.value }) } value={character} />
        </label>
        <button type='button' onClick={() => dispatch(minhaAcaoAssincrona(character))}>Buscar</button>
        <CharacterCard />
      </div>
    );
  }
}

export default connect()(App);
