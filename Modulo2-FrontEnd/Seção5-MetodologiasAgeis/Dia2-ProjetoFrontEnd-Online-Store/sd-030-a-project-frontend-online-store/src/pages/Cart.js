import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import CartCounter from '../components/CartCounter';

class Cart extends Component {
  state = {
    produtos: [],
    shouldRedirect: false,
  };

  componentDidMount() {
    const product = JSON.parse(localStorage.getItem('Produto'));
    if (localStorage.getItem('Produto')) {
      this.setState(({
        produtos: product,
      }));
    }
  }

  removeProduct = (itemID) => {
    const { produtos } = this.state;
    const { updatedQtnProductOnCart } = this.props;
    const indexProduct = produtos
      .findIndex((e) => e.id === itemID);

    produtos.splice(indexProduct, 1);
    const updatedProducts = [...produtos];
    this.setState({ produtos: updatedProducts });
    localStorage.removeItem('Produto');
    localStorage.setItem('Produto', JSON.stringify(updatedProducts));
    updatedQtnProductOnCart(updatedProducts);
  };

  redireciona = (e) => {
    e.preventDefault();
    this.setState({ shouldRedirect: true });
  };

  render() {
    const { produtos, shouldRedirect } = this.state;
    const { updatedQtnProductOnCart } = this.props;

    if (shouldRedirect) {
      return <Redirect to="/checkoutt" />;
    }

    return (
      <section>
        {produtos.length === 0 ? (
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        ) : null}
        {produtos.length > 0 ? (
          <>
            {produtos.map((produto) => (
              <div key={ produto.id }>
                <h3 data-testid="shopping-cart-product-name">{produto.name}</h3>
                <img src={ produto.image } alt="Imagem" />
                <span>{produto.price}</span>
                <CartCounter
                  itemID={ produto.id }
                  itemPrice={ produto.price }
                  removeProduct={ this.removeProduct }
                  updatedQtnProductOnCart={ updatedQtnProductOnCart }
                />
              </div>
            ))}
          </>
        ) : null}
        <button
          data-testid="checkout-products"
          onClick={ this.redireciona }
        >
          Checkout

        </button>
      </section>
    );
  }
}

Cart.propTypes = {
  updatedQtnProductOnCart: PropTypes.func.isRequired,
};

export default Cart;
