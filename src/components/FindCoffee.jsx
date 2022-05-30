import React from 'react';
import { Container } from '@mui/material';
import CoffeeMap from './map-components/CoffeeMap.jsx';
import NavBar from './NavBar.jsx';

function FindCoffee() {
  return (
    <>
      <Container className="main-container-wrapper">
        <CoffeeMap />
      </Container>
      <NavBar />
    </>

  );
}

export default FindCoffee;
