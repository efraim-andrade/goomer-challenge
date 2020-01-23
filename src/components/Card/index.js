import React from 'react';

import { Container, Flag } from './styles';

export default function Card() {
  return (
    <Container href="#">
      <img
        src="https://images.unsplash.com/photo-1525640788966-69bdb028aa73?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d53c30ba55d9ca863d57fabfffdb416b&auto=format&fit=crop&w=1047&q=80"
        alt="Logo"
      />

      <div className="info">
        <h1>Nome do Restaurante</h1>
        <p>Endereço do restaurante</p>
      </div>

      <Flag className="flag">
        <span>Aberto agora</span>
      </Flag>
    </Container>
  );
}
