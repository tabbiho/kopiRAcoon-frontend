import React from 'react';
import { Container, Box } from '@chakra-ui/react';
import CoffeeDiagramMain from './coffee-components/CoffeeDiagramMain.jsx';
import Combination from './coffee-components/Combination.jsx';
import SaveToFave from './coffee-components/SaveToFave.jsx';
import NavBar from './NavBar.jsx';

function MakeCoffee() {
  return (
    <Container className="main-container-wrapper" maxWidth="410px">
      <div className="small-logo-wrapper">
        <img src="../../images/logo-icon/full-logo.png" alt="small-logo" className="small-logo-icon" />
      </div>
      <Box className="content-main">
        <CoffeeDiagramMain />
        <Combination />
        <SaveToFave />
      </Box>
      <NavBar />
    </Container>
  );
}

export default MakeCoffee;
