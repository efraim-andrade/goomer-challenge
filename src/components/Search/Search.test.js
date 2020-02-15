import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Search from '.';

describe('Components - Search', () => {
  it('should be able to set the written restaurant', async () => {
    const setSearchRestaurant = jest.fn();
    const { getByPlaceholderText } = render(
      <Search searchRestaurant="" setSearchRestaurant={setSearchRestaurant} />
    );

    const input = getByPlaceholderText('Buscar estabelecimento');

    fireEvent.change(input, { target: { value: 'Cupcake' } });

    expect(setSearchRestaurant).toBeCalled();
  });
});
