import React from 'react';
import CoffeeDiagramMain from './coffee-components/CoffeeDiagramMain.jsx';
import Combination from './coffee-components/Combination.jsx';
import SaveToFave from './coffee-components/SaveToFave.jsx';
import NavBar from './NavBar.jsx';
import Preset from './coffee-components/Preset.jsx';

function MakeCoffee() {
  return (
    <>
      <Preset />
      <CoffeeDiagramMain />
      <Combination />
      <SaveToFave />
      <NavBar />
    </>
  );
}

export default MakeCoffee;
