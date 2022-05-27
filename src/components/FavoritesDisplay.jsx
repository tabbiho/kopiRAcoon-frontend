import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import AppContext from '../functions.jsx';
import CoffeeName from './coffee-components/CoffeeName.jsx';
import NavBar from './NavBar.jsx';

function FavoritesDisplay() {
  const [favoritesList, setFavoritesList] = useState([]);
  const { BACKEND_URL } = useContext(AppContext);

  useEffect(() => {
    const findFavorites = async () => {
      const allFavList = await axios.get(`${BACKEND_URL}/allFavorites`);
      setFavoritesList(allFavList.data.allCoffeeData);
    };
    findFavorites();
  }, []);

  console.log(favoritesList);
  return (
    <>
      <h1>Show all favorites</h1>
      {favoritesList.map((favCoffee) => CoffeeName(favCoffee))}
      <NavBar />
    </>
  );
}

export default FavoritesDisplay;
