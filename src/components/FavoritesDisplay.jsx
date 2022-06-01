import { Container, Heading, Spinner } from '@chakra-ui/react';
import React, {
  useEffect, useState, useContext, Suspense,
} from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import AppContext from '../functions.jsx';
import NavBar from './NavBar.jsx';
import RandomCoffee from './favorites-notes-components/RandomCoffee.jsx';
import { createResource } from './FetchFavoritesApi.js';
import AllFavorites from './favorites-notes-components/AllFavourites.jsx';

function FavoritesDisplay() {
  const resource = createResource();
  const [favoritesList, setFavoritesList] = useState([]);
  const { BACKEND_URL } = useContext(AppContext);

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    const loginCheck = async () => {
      const loginResult = await axios.get(`${BACKEND_URL}/users/loginCheck`);
      setIsLoggedIn(loginResult.data);
    };
    loginCheck();
  });

  useEffect(() => {
    const findFavorites = async () => {
      const allFavList = await axios.get(`${BACKEND_URL}/allFavorites`);
      console.log(allFavList.data.allCoffeeData);
      setFavoritesList(allFavList.data.allCoffeeData);
    };
    findFavorites();
  }, []);

  console.log(favoritesList);
  return (
    <Container className="main-container-wrapper" maxWidth="410px">
      <div className="small-logo-wrapper">
        <img src="../images/logo-icon/full-logo.png" alt="small-logo" className="small-logo-icon" />
      </div>
      <Heading as="h1" className="heading-title-h1"> Show all favorites</Heading>
      <RandomCoffee />
      <Suspense fallback={<Spinner />}>
        <AllFavorites resource={resource} />
      </Suspense>
      <NavBar />
      {!isLoggedIn && (<Navigate to="/login" replace />)}
    </Container>
  );
}

export default FavoritesDisplay;
