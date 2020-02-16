import React from 'react';
import { act } from 'react-dom/test-utils';
import MockAdapter from 'axios-mock-adapter';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import api from 'src/services/api';

import Home from '.';
import dataMock from './dataMock';

const apiMock = new MockAdapter(api);

describe('Pages - Home', () => {
  it('should appears a toast when fails to fetch the restaurants', async () => {
    const { getByText } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    await act(async () => {
      apiMock.onGet('restaurants').reply(404, { message: 'not found' });
    });

    const fetchErrorFeedback = getByText(
      'Algo deu errado ao ao buscar restaurantes :/'
    );

    expect(fetchErrorFeedback).toBeDefined();
  });

  it('should be able to fetch and render restaurants', async () => {
    const { getAllByTestId } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    await act(async () => {
      apiMock.onGet('restaurants').reply(200, dataMock);
    });

    const restaurants = getAllByTestId('restaurant');

    expect(restaurants.length).toBeGreaterThan(0);
  });
});
