import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cards: [],
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(index) {
    const { cards } = this.state;
    const newCards = [...cards];
    newCards.splice(index, 1);
    this.setState({
      cards: newCards,
      hasTrunfo: newCards.some((card) => card.cardTrunfo),
    });
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.isSaveButtonDisabled());
  }

  onSaveButtonClick = (param) => {
    // const {
    //   cardName,
    //   cardDescription,
    //   cardAttr1,
    //   cardAttr2,
    //   cardAttr3,
    //   cardImage,
    //   cardRare,
    // } = this.state;

    // const baralho = {
    //   cardName,
    //   cardDescription,
    //   cardAttr1,
    //   cardAttr2,
    //   cardAttr3,
    //   cardImage,
    //   cardRare,
    // };
    console.log('parametro', param);
    this.setState((previus) => ({
      cards: [...previus.cards, param],
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: [...previus.cards, param].some((card) => card.cardTrunfo),
    }));
    // this.setState({
    //   cardName: '',
    //   cardDescription: '',
    //   cardImage: '',
    //   cardAttr1: '0',
    //   cardAttr2: '0',
    //   cardAttr3: '0',
    //   cardRare: 'normal',
    // }));
  };

  isSaveButtonDisabled() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare } = this.state;

    const atr1 = 90;
    const atr2 = 90;
    const atr3 = 90;
    const soma = 210;

    const nome = cardName.length > 0;
    const descricao = cardDescription.length > 0;
    const imagem = cardImage.length > 0;
    const raridade = cardRare.length > 0;
    const atributo1 = cardAttr1.valueOf() <= atr1 && cardAttr1.valueOf() >= 0;
    const atributo2 = cardAttr2.valueOf() <= atr2 && cardAttr2.valueOf() >= 0;
    const atributo3 = cardAttr3.valueOf() <= atr3 && cardAttr3.valueOf() >= 0;
    const somaAtr = (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= soma);

    this.setState({
      isSaveButtonDisabled: !(nome && descricao && imagem
        && raridade && atributo1 && atributo2 && atributo3 && somaAtr),
    });
  }

  render() {
    const { cards } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ this.isSaveButtonDisabled }
          { ...this.state }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card { ...this.state } />
        <ul>
          {cards.map((card, index) => (
            <li key={ index }>
              <Card { ...card } />
              <button
                data-testid="delete-button"
                onClick={ () => this.handleDelete(index) }
              >
                Excluir
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
