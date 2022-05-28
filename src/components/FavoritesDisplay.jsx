import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from '@mui/material';
import CoffeeName from './coffee-components/CoffeeName.jsx';
import NavBar from './NavBar.jsx';
import Loader from './Loader.jsx';
import CreateNote from './favorites-notes-components/CreateNote.jsx';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3004';

function FavoritesDisplay() {
  const [favoritesList, setFavoritesList] = useState([]);

  useEffect(() => {
    const findFavorites = async () => {
      // eslint-disable-next-line no-unused-vars
      const allFavList = await axios.get(`${BACKEND_URL}/allFavorites`);
      console.log(allFavList.data.allCoffeeData);
      setFavoritesList(allFavList.data.allCoffeeData);
    };
    findFavorites();
  }, []);

  console.log(favoritesList);
  return (
    <>
      <Container className="main-container-wrapper">
        <Loader />
        <h1>Show all favorites</h1>
        {favoritesList.map((favCoffee) => (
          <div>
            {CoffeeName(favCoffee.proportion)}
            <div>
              <CreateNote coffeeId={favCoffee.coffeeId} />
            </div>
          </div>
        ))}
      </Container>
      <NavBar />
    </>
  );
}

export default FavoritesDisplay;
