import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';

import { isRestaurantOpen } from 'src/functions';

import { Container, Flag } from './styles';

export default function FoodCard({ image, name, description, price, sales }) {
  const havePromos = useMemo(() => {
    return sales.length > 0;
  }, [sales.length]);

  const isPromoActive = useCallback(() => {
    return havePromos ? isRestaurantOpen(sales.hours) : false;
  }, [havePromos, sales.hours]);

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

      {isPromoActive && (
        <Flag className="flag">
          <img
            alt="Logo"
            className="icon"
            src={require('src/assets/icons/award.svg')}
          />

          <span>Promo Almoco</span>
        </Flag>
      )}
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
