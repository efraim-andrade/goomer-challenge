import React from 'react';
import MockAdapter from 'axios-mock-adapter';
import { render, fireEvent, waitForDomChange } from '@testing-library/react';

import api from '~/services/api';

import Home from '.';
import dataMock from './dataMock';

const apiMock = new MockAdapter(api);

describe('Pages - Home', () => {
  it('should be able to search restaurants', async () => {
    const { getByPlaceholderText, getAllByTestId } = render(<Home />);

    apiMock.onGet('restaurants').reply(200, dataMock);

    const searchInput = getByPlaceholderText('Buscar estabelecimento');

    await waitForDomChange({ searchInput });

    const restaurants = getAllByTestId('restaurant');

    fireEvent.change(searchInput, { target: { value: 'Cupcake' } });

    expect(restaurants.length).toBe(1);
  });
});
