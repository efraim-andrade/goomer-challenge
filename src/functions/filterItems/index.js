export default function filterItems({ allItems, searchText }) {
  const filteredRestaurants = allItems.filter(restaurant => {
    const nameUpper = restaurant.name.toUpperCase();
    const inputTextUpper = searchText.toUpperCase();

    return nameUpper.indexOf(inputTextUpper) > -1;
  });

  return filteredRestaurants;
}
