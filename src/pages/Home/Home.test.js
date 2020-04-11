import React from 'react';
import { Provider } from 'react-redux';
import { act } from 'react-dom/test-utils';
import MockAdapter from 'axios-mock-adapter';
import configureStore from 'redux-mock-store';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import api from 'src/services/api';

import Home from '.';
import dataMock from './dataMock';

const apiMock = new MockAdapter(api);
const mockStore = configureStore([]);

describe('Pages - Home', () => {
  const store = mockStore({
    restaurants: [],
  });

  function renderWithRedux(component) {
    return {
      ...render(
        <Provider store={store}>
          <MemoryRouter>{component}</MemoryRouter>
        </Provider>
      ),
    };
  }

  it('should appears a toast when fails to fetch the restaurants', async () => {
    const { getByText } = renderWithRedux(<Home />);

    await act(async () => {
      apiMock.onGet('restaurants').reply(404, { message: 'not found' });
    });

    const fetchErrorFeedback = getByText(
      'Algo deu errado ao ao buscar restaurantes :/'
    );

    expect(fetchErrorFeedback).toBeDefined();
  });

  it('should be able to fetch and render restaurants', async () => {
    const { getAllByTestId } = renderWithRedux(<Home />);

    await act(async () => {
      apiMock.onGet('restaurants').reply(200, dataMock);
    });

    const restaurants = getAllByTestId('restaurant');

    expect(restaurants.length).toBeGreaterThan(0);
  });
});
