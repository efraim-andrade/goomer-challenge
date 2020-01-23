import React from 'react';

import { Search } from '~/components';

import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <header>
        <h1>Bem-vindo ao Lista Rango</h1>

        <Search />
      </header>
    </Container>
  );
}
