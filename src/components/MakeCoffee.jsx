import React from 'react';
import { Container } from '@mui/material';
import CoffeeDiagramMain from './coffee-components/CoffeeDiagramMain.jsx';
import Combination from './coffee-components/Combination.jsx';
import SaveToFave from './coffee-components/SaveToFave.jsx';
import NavBar from './NavBar.jsx';

function MakeCoffee() {
  return (
    <>
      <Container className="main-container-wrapper">
        <CoffeeDiagramMain />
        <Combination />
        <SaveToFave />
      </Container>
      <NavBar />

    </>
  );
}

export default MakeCoffee;
