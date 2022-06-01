import React, { Suspense } from 'react';
import { Container, Heading, Spinner } from '@chakra-ui/react';
import NavBar from './NavBar.jsx';
import RandomCoffee from './favorites-notes-components/RandomCoffee.jsx';
import { createResource } from './FetchFavoritesApi.js';
import AllFavorites from './favorites-notes-components/AllFavourites.jsx';

function FavoritesDisplay() {
  const resource = createResource();
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
    </Container>
  );
}

export default FavoritesDisplay;
