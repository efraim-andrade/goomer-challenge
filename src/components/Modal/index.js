import React from 'react';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';

import { Container } from './styles';

export default function Modal({ isModalOpen, setIsModalOpen, data }) {
  const { name, description, price, image } = data;

  return (
    <Container isOpen={isModalOpen}>
      <button
        className="close"
        type="button"
        onClick={() => setIsModalOpen(false)}
      >
        <FaTimes size="26" />
      </button>

      <div className="content">
        <img src={image} alt="Foto do prato" className="banner" />

        <h3>{name}</h3>

        <div className="wrap">
          <p>{description}</p>

          <span>{price}</span>
        </div>

        <hr />

        <footer>
          <div className="picker" />

          <button className="buy" type="button">
            <span>Adicionar</span>
            <span>{price}</span>
          </button>
        </footer>
      </div>
    </Container>
  );
}

Modal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
  data: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
  }).isRequired,
};
