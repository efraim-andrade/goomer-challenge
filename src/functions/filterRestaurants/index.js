export default function handleSearchRestaurants({
  allRestaurants,
  restaurantName,
}) {
  const filteredRestaurants = allRestaurants.filter(restaurant => {
    const nameUpper = restaurant.name.toUpperCase();
    const inputTextUpper = restaurantName.toUpperCase();

    return nameUpper.indexOf(inputTextUpper) > -1;
  });

  return filteredRestaurants;
}
