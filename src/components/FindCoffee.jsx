import React from 'react';
import { Container, Box } from '@chakra-ui/react';
import CoffeeMap from './map-components/CoffeeMap.jsx';
import NavBar from './NavBar.jsx';

function FindCoffee() {
  return (
    <Container className="main-container-wrapper" maxWidth="410px">
      <Box className="small-logo-wrapper">
        <img src="../../images/logo-icon/full-logo.png" alt="small-logo" className="small-logo-icon" />
      </Box>
      <Box className="content-main">
        <CoffeeMap />
      </Box>
      <NavBar />
    </Container>

  );
}

export default FindCoffee;
