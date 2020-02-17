import React, { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import { isRestaurantOpen, convertMoney } from 'src/functions';
import { Modal } from 'src/components';

import { Container, Flag } from './styles';

export default function FoodCard({ image, name, description, price, sales }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const havePromos = useMemo(() => {
    return sales.length > 0;
  }, [sales]);

  const isPromoActive = useCallback(() => {
    return havePromos ? isRestaurantOpen(sales[0].hours) : false;
  }, [havePromos, sales]);

  const handlePromoPrice = useCallback(() => {
    if (isPromoActive())
      return (
        <>
          <div className="current">{convertMoney(sales[0].price)}</div>

          <div className="promo">{convertMoney(price)}</div>
        </>
      );

    return <div className="current">{convertMoney(price)}</div>;
  }, [isPromoActive, price, sales]);

  return (
    <>
      <Container onClick={() => setIsModalOpen(true)}>
        {image && <img src={image} alt="Logo" />}

        <div className="info">
          <h1>{name}</h1>
          <p>{description}</p>

          <div className="price">{handlePromoPrice()}</div>
        </div>

        {isPromoActive() && (
          <Flag className="flag">
            <img
              alt="Logo"
              className="icon"
              src={require('src/assets/icons/award.svg')}
            />

            <span>{sales[0].description}</span>
          </Flag>
        )}
      </Container>

      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        data={{
          image,
          name,
          description,
          price: isPromoActive()
            ? convertMoney(sales[0]?.price)
            : convertMoney(price),
        }}
      />
    </>
  );
}

FoodCard.defaultProps = {
  name: '',
  image: '',
  description: '',
  price: '',
  sales: [],
};

FoodCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  sales: PropTypes.string,
};
