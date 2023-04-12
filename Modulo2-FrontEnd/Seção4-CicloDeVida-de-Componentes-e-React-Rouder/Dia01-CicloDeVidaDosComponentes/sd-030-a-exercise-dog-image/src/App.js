import React from 'react';
import './App.css';
import api from './api';

class App extends React.Component {
  state = {
    imageUrl: '',
    isLoading: true,
  };

  componentDidMount() {
    this.handleButtonClick();
  }

  shouldComponentUpdate(_nextProps, nextState) {
    return (!nextState.imageUrl.includes('terrier'));
  }

  componentDidUpdate() {
    const { imageUrl } = this.state;
    localStorage.setItem('URL', imageUrl);
    const raca = imageUrl.split('/');
    alert(raca[4]);
  }

  handleButtonClick = async () => {
    const data = await api();
    this.setState({
      imageUrl: data.message,
      isLoading: false,
    });
  };

  render() {
    const { imageUrl, isLoading } = this.state;
    return (
      <div>
        <h1>Doguinhos</h1>
        {isLoading ? <p>Loading...</p> : <img
          width={ 300 }
          src={ imageUrl }
          alt="Doguinho aleatório"
        />}
        <button onClick={ this.handleButtonClick }>Novo doguinho!</button>
      </div>
    );
  }
}

export default App;
