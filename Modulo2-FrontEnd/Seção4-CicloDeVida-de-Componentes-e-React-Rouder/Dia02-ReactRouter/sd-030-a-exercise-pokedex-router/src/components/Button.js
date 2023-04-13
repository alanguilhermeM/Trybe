import React from 'react';
import PropTypes from 'prop-types';

import '../styles/button.css';

function Button({ className = '', children, disabled = false, onClick }) {
  return (
    <button
      onClick={ onClick }
      className={ `button-text ${className}` }
      disabled={ disabled }
      type="button"
    >
      { children }
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default Button;
