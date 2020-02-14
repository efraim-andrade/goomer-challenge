import React, { useState, useEffect, useCallback } from 'react';
import { toast } from 'react-toastify';

import { Search, Card } from '~/components';
import api from '~/services/api';

import { Container, Content, LoadingIcon } from './styles';

export default function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchRestaurant, setSearchRestaurant] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchRestaurants() {
      setIsLoading(true);

      try {
        const { data } = await api.get('restaurants');

        setRestaurants(data);
        setAllRestaurants(data);
      } catch (error) {
        toast.error(
          'Algo deu errado ao buscar os restaurantes, tente novamente mais tarde!'
        );
      } finally {
        setIsLoading(false);
      }
    }

    fetchRestaurants();
  }, []);

  const handleSearchRestaurants = useCallback(() => {
    const filteredRestaurants = allRestaurants.filter(restaurant => {
      const nameUpper = restaurant.name.toUpperCase();
      const inputTextUpper = searchRestaurant.toUpperCase();

      return nameUpper.indexOf(inputTextUpper) > -1;
    });

    return setRestaurants(filteredRestaurants);
  }, [allRestaurants, searchRestaurant]);

  useEffect(() => {
    handleSearchRestaurants();
  }, [searchRestaurant]); //eslint-disable-line

  return (
    <Container>
      <header>
        <h1>Bem-vindo ao Lista Rango</h1>

        <Search
          searchRestaurant={searchRestaurant}
          setSearchRestaurant={setSearchRestaurant}
        />
      </header>

      {isLoading ? (
        <LoadingIcon />
      ) : (
        <Content>
          {restaurants.map(restaurant => (
            <Card key={restaurant.id} {...restaurant} />
          ))}
        </Content>
      )}
    </Container>
  );
}
