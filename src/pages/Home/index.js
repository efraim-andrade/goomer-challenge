import React, { useState, useEffect, useCallback } from 'react';
import { toast } from 'react-toastify';

import api from '~/services/api';
import { Search, Card } from '~/components';
import { filterRestaurants } from '~/functions';

import { Container, Content, LoadingIcon, Message } from './styles';

export default function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchRestaurant, setSearchRestaurant] = useState('');

  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchRestaurants() {
      setIsLoading(true);

      try {
        const { data } = await api.get('restaurants');

        setError(false);
        setRestaurants(data);
        setAllRestaurants(data);
      } catch (err) {
        setError(true);
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
    const filteredRestaurants = filterRestaurants({
      allRestaurants,
      searchRestaurant,
    });

    return setRestaurants(filteredRestaurants);
  }, [allRestaurants, searchRestaurant]);

  useEffect(() => {
    handleSearchRestaurants();
  }, [searchRestaurant]); //eslint-disable-line

  const renderContent = useCallback(() => {
    if (isLoading) return <LoadingIcon />;

    if (error)
      return (
        <Message type="error">
          Algo deu errado ao ao buscar restaurantes :/
        </Message>
      );

    if (restaurants.length === 0)
      return <Message>Nada foi encontrado...</Message>;

    return (
      <Content>
        {restaurants.map(restaurant => (
          <Card key={restaurant.id} {...restaurant} />
        ))}
      </Content>
    );
  }, [error, isLoading, restaurants]);

  return (
    <Container>
      <header>
        <h1>Bem-vindo ao Lista Rango</h1>

        <Search
          searchRestaurant={searchRestaurant}
          setSearchRestaurant={setSearchRestaurant}
        />
      </header>

      {renderContent()}
    </Container>
  );
}
