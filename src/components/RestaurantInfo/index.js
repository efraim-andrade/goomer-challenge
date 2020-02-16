import React from 'react';

import { Container } from './styles';

export default function RestaurantInfo() {
  return (
    <Container>
      <img
        src="https://images.unsplash.com/photo-1525640788966-69bdb028aa73?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d53c30ba55d9ca863d57fabfffdb416b&auto=format&fit=crop&w=1047&q=80"
        alt="Logo do Restaurante"
        className="logo"
      />

      <div className="info">
        <h2>Nome do restaurante</h2>

        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <ul>
          <li>
            Segunda a Sexta: <b>13:30 as 15:00</b>
          </li>

          <li>
            Sabados: <b>13:30 as 15:00</b>
          </li>

          <li>
            Domingo e Feriados: <b>13:30 as 15:00</b>
          </li>
        </ul>
      </div>
    </Container>
  );
}
