import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { Search, Card } from '~/components';
import api from '~/services/api';

import { Container, Content, LoadingIcon } from './styles';

export default function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchRestaurants() {
      setIsLoading(true);

      try {
        const { data } = await api.get('restaurants');

        setRestaurants(data);
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

  return (
    <Container>
      <header>
        <h1>Bem-vindo ao Lista Rango</h1>

        <Search />
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
