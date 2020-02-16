import React from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';

import { colors } from 'src/theme';

import { Container } from './styles';

export default function Search({ searchRestaurant, setSearchRestaurant }) {
  return (
    <Container>
      <input
        type="text"
        value={searchRestaurant}
        placeholder="Buscar estabelecimento"
        onChange={event => setSearchRestaurant(event.target.value)}
      />

      <button type="button" onClick={() => {}}>
        <FaSearch size={16} color={colors.black} />
      </button>
    </Container>
  );
}

Search.propTypes = {
  searchRestaurant: PropTypes.string.isRequired,
  setSearchRestaurant: PropTypes.func.isRequired,
};
