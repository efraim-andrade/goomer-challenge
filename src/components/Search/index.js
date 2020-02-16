import React from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';

import { colors } from 'src/theme';

import { Container } from './styles';

export default function Search({
  searchRestaurant,
  setSearchRestaurant,
  isDetail,
  placeholder,
  ...rest
}) {
  return (
    <Container isDetail={isDetail} {...rest}>
      {isDetail && (
        <div className="label">
          <span>Buscar no cardapio</span>
        </div>
      )}

      <input
        type="text"
        value={searchRestaurant}
        placeholder={placeholder}
        onChange={event => setSearchRestaurant(event.target.value)}
      />

      <button type="button" onClick={() => {}}>
        <FaSearch size={16} color={colors.black} />
      </button>
    </Container>
  );
}

Search.defaultProps = {
  isDetail: false,
  placeholder: 'Buscar estabelecimento',
};

Search.propTypes = {
  isDetail: PropTypes.bool,
  placeholder: PropTypes.string,
  searchRestaurant: PropTypes.string.isRequired,
  setSearchRestaurant: PropTypes.func.isRequired,
};
