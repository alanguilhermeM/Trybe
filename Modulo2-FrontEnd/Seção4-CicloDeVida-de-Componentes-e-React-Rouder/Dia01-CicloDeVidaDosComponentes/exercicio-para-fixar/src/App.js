import React, { Component } from 'react'
import api from './api'

export default class App extends Component {
  state = {
    foto: '',
    nome: '',
    email: '',
    idade: 0,
    isLoading: true,
  }
   async componentDidMount() {
    const data = await api();
    const [firstResult] = data.results;
    const { name: { first, last }, picture: { medium }, email, dob: { age } } = firstResult;
    this.setState({
      foto: medium,
      nome: `${first} ${last}`,
      email: email,
      idade: age,
      isLoading: false,
    })
  }

  shouldComponentUpdate(_nextProps, nextState) {
    if (nextState.idade > 50) {
      return false;
    }
    return true;
  }

  render() {
    const { foto, nome, email, idade, isLoading } = this.state
    return (
      isLoading ? <div>Carregando...</div> : <div>
        <img src={ foto } alt='foto' />
        <h2>{ nome }</h2>
        <span>{ email }</span>
        <br></br>
        <span>{ idade }</span>
      </div>
    )
  }
}

