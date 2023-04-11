import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      inputName: '',
      selected: false,
      inputAge: 0,
      aboutYou: '',
    }
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState ({
      [name]: value,
    })
  }

  render() {
    return (
      <form>

        <label>
          Marque
          <input name='selected' type='checkbox' value={ this.state.selected } onChange={ this.handleChange }></input>
        </label>

        <label>
          Digite seu nome:
          <input name='inputName' type='text' value={ this.state.inputName } onChange={ this.handleChange }></input>
        </label>

        <label>
          Digite sua idade:
          <input name='inputAge' type='number' value={ this.state.inputAge } onChange={ this.handleChange }></input>
        </label>

        <label>
          Fale um pouco sobre você:
          <textarea name='aboutYou' type='text' value={ this.state.aboutYou } onChange={ this.handleChange }></textarea>
        </label>
      </form>
    )
  }
}
