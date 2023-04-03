import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  state = {
    buttonColors: {
      1: 'white',
      2: 'white',
      3: 'white'
    },
    clickCounts: {
      1: 0,
      2: 0,
      3: 0
    }
  };

  handleClick(buttonNumber) {
    this.setState((prevState) => {
      const clickCounts = { ...prevState.clickCounts };
      const buttonColors = { ...prevState.buttonColors };
      clickCounts[buttonNumber]++;
      if (clickCounts[buttonNumber] % 2 === 0) {
        buttonColors[buttonNumber] = 'green';
      } else {
        buttonColors[buttonNumber] = 'white';
      }
      return { clickCounts, buttonColors };
    });
  }

  render() {
    const { buttonColors, clickCounts } = this.state;
    return (
      <div>
        <button style={{ backgroundColor: buttonColors[1] }} onClick={() => this.handleClick(1)}>{ clickCounts[1] }</button>
        <button style={{ backgroundColor: buttonColors[2] }} onClick={() => this.handleClick(2)}>{ clickCounts[2] }</button>
        <button style={{ backgroundColor: buttonColors[3] }} onClick={() => this.handleClick(3)}>{ clickCounts[3] }</button>
      </div>
    )
  }
}
