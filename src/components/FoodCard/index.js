import React from 'react';
import PropTypes from 'prop-types';

import { Container, Flag } from './styles';

export default function FoodCard({ image, name, description, price, sales }) {
  return (
    <Container>
      <img src={image} alt="Logo" />

      <div className="info">
        <h1>{name}</h1>
        <p>{description}</p>

        <div className="price">
          <div className="current">{`R$ ${price}`}</div>

          <div className="promo">{`R$ ${price}`}</div>
        </div>
      </div>

      <Flag className="flag">
        <i>Icon</i>

        <span>Promo Almoco</span>
      </Flag>
    </Container>
  );
}

FoodCard.defaultProps = {
  name: '',
  image: '',
  description: '',
  price: '',
  sales: '',
};

FoodCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  sales: PropTypes.string,
};
