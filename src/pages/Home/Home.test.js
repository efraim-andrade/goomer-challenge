import React from 'react';
import MockAdapter from 'axios-mock-adapter';
import { render, fireEvent, waitForDomChange } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import api from '~/services/api';

import Home from '.';
import dataMock from './dataMock';

const apiMock = new MockAdapter(api);

describe('Pages - Home', () => {
  it('should be able to fetch restaurants', async () => {
    const { getAllByTestId, getByPlaceholderText } = render(<Home />);

    await act(async () => {
      apiMock.onGet('restaurants').reply(200, dataMock);
    });

    const searchInput = getByPlaceholderText('Buscar estabelecimento');

    const restaurants = getAllByTestId('restaurant');

    fireEvent.change(searchInput, { target: { value: 'Cupcake' } });

    expect(restaurants.length).toBeGreaterThan(0);
  });
});
