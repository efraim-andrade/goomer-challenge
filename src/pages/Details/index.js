import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import api from 'src/services/api';
import { RestaurantInfo, Accordion } from 'src/components';

import { Container, Search } from './styles';

const categories = [];

export default function Details() {
  const { restaurantID } = useParams();

  const [restaurantMenu, setRestaurantMenu] = useState([]);

  useEffect(() => {
    function setTheMenuCategories(menu) {
      menu.forEach(item => {
        if (!categories.includes(item.group)) {
          categories.push(item.group);
        }
      });
    }

    async function fetchMenu() {
      try {
        const { data } = await api.get(`restaurants/${restaurantID}/menu`);

        setTheMenuCategories(data);
        setRestaurantMenu(data);
      } catch (error) {
        toast.error(
          'Algo deu errado ao buscar o menu, tente novamente mais tarde!'
        );
      }
    }

    fetchMenu();
  }, [restaurantID]);

  return (
    <Container>
      <RestaurantInfo />

      <div className="content">
        <div className="left">
          <Search isDetail placeholder="" />

          <Accordion categories={categories} items={restaurantMenu} />
        </div>

        <div className="right" />
      </div>
    </Container>
  );
}
