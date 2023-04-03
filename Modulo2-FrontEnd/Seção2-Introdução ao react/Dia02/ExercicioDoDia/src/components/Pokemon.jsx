import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Pokemon extends Component {
  render() {
    const { pokemon } = this.props;
    const { name, type, averageWeight: { value, measurementUnit }, image } = pokemon;
    return (
      <li className="pokemon">
        <p>{name}</p>
        <p>{type}</p>
        <p>
          <span>{`${value} ${measurementUnit}`}</span>
        </p>
        <img src={ image } alt={ name } />
      </li>
    );
  }
}

Pokemon.defaultProps = {
  pokemon: {},
};

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
    image: PropTypes.string,
    moreInfo: PropTypes.string,
  }),
};
