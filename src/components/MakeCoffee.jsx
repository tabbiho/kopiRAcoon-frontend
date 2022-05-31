import React from 'react';
import { Container, Box } from '@chakra-ui/react';
import CoffeeDiagramMain from './coffee-components/CoffeeDiagramMain.jsx';
import Combination from './coffee-components/Combination.jsx';
import SaveToFave from './coffee-components/SaveToFave.jsx';
import NavBar from './NavBar.jsx';
import Preset from './coffee-components/Preset.jsx';
import Translation from './coffee-components/Translation.jsx';

function MakeCoffee() {
  return (
    <Container className="main-container-wrapper" maxWidth="410px">
      <Box className="content-main">
        <Preset />
        <CoffeeDiagramMain />
        <Combination />
        <Translation />
        <SaveToFave />
      </Box>
      <NavBar />
    </Container>
  );
}

export default MakeCoffee;
