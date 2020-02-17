import React, { useEffect, useState, useCallback } from 'react';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import api from 'src/services/api';
import { filterItems } from 'src/functions';
import { RestaurantInfo, Accordion, LoadingIcon } from 'src/components';

import { Container, Search } from './styles';

const categories = [];

export default function Details() {
  const { restaurantID } = useParams();
  const restaurantInfo = useSelector(state =>
    state.restaurants.data.filter(
      restaurant => restaurant.id === Number(restaurantID)
    )
  )[0];

  const [allRestaurantMenu, setAllRestaurantMenu] = useState([]);
  const [restaurantMenu, setRestaurantMenu] = useState([]);
  const [searchMenu, setSearchMenu] = useState('');

  const [isLoading, setIsLoading] = useState([]);

  useEffect(() => {
    function setTheMenuCategories(menu) {
      menu.forEach(item => {
        if (!categories.includes(item.group)) {
          categories.push(item.group);
        }
      });
    }

    async function fetchMenu() {
      setIsLoading(true);
      try {
        const { data } = await api.get(`restaurants/${restaurantID}/menu`);

        setTheMenuCategories(data);
        setRestaurantMenu(data);
        setAllRestaurantMenu(data);
      } catch (error) {
        toast.error(
          'Algo deu errado ao buscar o menu, tente novamente mais tarde!'
        );
      } finally {
        setIsLoading(false);
      }
    }

    fetchMenu();
  }, [restaurantID]);

  const handleSearchRestaurants = useCallback(() => {
    const filteredMenu = filterItems({
      allItems: allRestaurantMenu,
      searchText: searchMenu,
    });

    return setRestaurantMenu(filteredMenu);
  }, [allRestaurantMenu, searchMenu]);

  useEffect(() => {
    handleSearchRestaurants();
  }, [searchMenu]); //eslint-disable-line

  return (
    <Container>
      <RestaurantInfo {...restaurantInfo} />

      <div className="content">
        <div className="left">
          <Search
            isDetail
            placeholder=""
            search={searchMenu}
            setSearch={setSearchMenu}
          />

          {isLoading ? (
            <LoadingIcon />
          ) : (
            <Accordion categories={categories} items={restaurantMenu} />
          )}
        </div>

        <div className="right" />
      </div>
    </Container>
  );
}
