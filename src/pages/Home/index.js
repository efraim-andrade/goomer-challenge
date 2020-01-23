import React from 'react';

import { Search, Card } from '~/components';

import { Container, Content } from './styles';

export default function Home() {
  return (
    <Container>
      <header>
        <h1>Bem-vindo ao Lista Rango</h1>

        <Search />
      </header>

      <Content>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Content>
    </Container>
  );
}
