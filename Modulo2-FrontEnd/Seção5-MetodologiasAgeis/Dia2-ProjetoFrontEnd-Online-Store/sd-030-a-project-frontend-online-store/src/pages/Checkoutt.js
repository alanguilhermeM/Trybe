import React, { Component } from 'react';

export default class Checkoutt extends Component {
  state = {
    produtos: [],
    isValidate: false,
    clicked: false,
  };

  componentDidMount() {
    const cart = JSON.parse(localStorage.getItem('Produto'));
    this.setState({
      produtos: [...cart],
    });
  }

  // handleChange = (event) => {
  //   const { target } = event;
  //   const { name, value } = target;
  //   this.setState({
  //     [name]: value,
  //   }, this.validation);
  // };

  validation = () => {
    const fullname = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const cep = document.getElementById('cep').value;
    const address = document.getElementById('address').value;
    const cpf = document.getElementById('cpf').value;
    if (fullname.length > 0 && email.length > 0 && phone.length > 0 && cep.length > 0
      && address.length > 0 && cpf.length > 0) {
      this.setState({
        isValidate: true,
      });
    } else {
      this.setState({
        isValidate: false,
      });
    }
    const { history } = this.props;
    const { isValidate } = this.state;
    if (isValidate) {
      localStorage.setItem('Produto', JSON.stringify([]));
      history.push('/');
    }
  };

  // checkout = (evt) => {
  //   evt.preventDefault();
  //   this.validation();
  //   const { isValidate } = this.state;
  //   const { history } = this.props;
  //   this.setState({ clicked: true });
  //   if (isValidate) {
  //     localStorage.setItem('cart', JSON.stringify([]));
  //     history.push('/');
  //   }
  // };

  render() {
    const { produtos,
      isValidate,
      clicked,
    } = this.state;
    const { history } = this.props;
    return (
      <div>
        <button
          data-testid="shopping-cart-button"
          type="button"
          onClick={ () => history.push('/cart') }
        >
          carrinho
        </button>
        <div>
          <h3>Verifique se todos os itens da sua compra estão corretos:</h3>
          {produtos.length === 0
            ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
            : (
              <ol>
                {produtos.map(({ id, image, name, quantity, price }) => (
                  <li key={ id } className="checkout-list">
                    <h3>
                      {name}
                    </h3>
                    <p>{`${quantity} unidade${quantity > 1 ? 's' : ''}`}</p>
                    <img src={ image } alt={ name } />
                    <p>
                      Total: R$
                      { (quantity * price).toFixed(2) }
                    </p>
                  </li>
                ))}
              </ol>
            )}

        </div>
        <form>
          <label htmlFor="name">
            <input
              data-testid="checkout-fullname"
              type="text"
              id="name"
            />
          </label>
          <label htmlFor="email">
            <input
              data-testid="checkout-email"
              type="email"
              id="email"
            />
          </label>
          <label htmlFor="cpf">
            <input
              data-testid="checkout-cpf"
              type="text"
              id="cpf"
            />
          </label>
          <label htmlFor="cel">
            <input
              data-testid="checkout-phone"
              type="text"
              id="phone"
            />
          </label>
          <label htmlFor="cep">
            <input
              data-testid="checkout-cep"
              type="text"
              id="cep"
            />
          </label>
          <label htmlFor="ad">
            <input
              data-testid="checkout-address"
              type="text"
              id="address"
            />
          </label>
          <label>
            Metodo de pagamento:
            <label>
              <input
                name="payment"
                type="radio"
                data-testid="ticket-payment"
                value="ticket"
                id
              />
              Boleto
            </label>
            <label>
              <input
                name="payment"
                type="radio"
                data-testid="visa-payment"
                value="visa"
              />
              Visa
            </label>
            <label>
              <input
                name="payment"
                type="radio"
                data-testid="master-payment"
                value="master"
              />
              MasterCard
            </label>
            <label>
              <input
                name="payment"
                type="radio"
                data-testid="elo-payment"
                value="elo"
              />
              Elo
            </label>
          </label>
          <button data-testid="checkout-btn" onClick={ this.validation }>Submit</button>
          {!isValidate ? <p data-testid="error-msg">Campos inválidos</p> : null}
        </form>
      </div>
    );
  }
}
