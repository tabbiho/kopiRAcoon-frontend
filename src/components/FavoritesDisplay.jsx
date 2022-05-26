import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CoffeeName from './coffee-components/CoffeeName.jsx';
import NavBar from './NavBar.jsx';
import Loader from './Loader.jsx';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3004';

function FavoritesDisplay() {
  const [favoritesList, setFavoritesList] = useState([]);
  useEffect(() => {
    const findFavorites = async () => {
      // eslint-disable-next-line no-unused-vars
      const allFavList = await axios.get(`${BACKEND_URL}/allFavorites`);
      setFavoritesList(allFavList.data.allCoffeeData);
    };
    findFavorites();
  }, []);

  console.log(favoritesList);
  return (
    <>
      <Loader />
      <h1>Show all favorites</h1>
      {favoritesList.map((favCoffee) => CoffeeName(favCoffee))}
      <NavBar />
    </>
  );
}

export default FavoritesDisplay;
