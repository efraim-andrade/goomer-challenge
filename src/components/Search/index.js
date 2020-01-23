import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import { colors } from '~/theme';

import { Container } from './styles';

export default function Search() {
  const [value, setValue] = useState('');

  return (
    <Container>
      <input
        type="text"
        value={value}
        placeholder="Buscar estabelecimento"
        onChange={event => setValue(event.target.value)}
      />

      <button type="button" onClick={() => {}}>
        <FaSearch size={16} color={colors.black} />
      </button>
    </Container>
  );
}
