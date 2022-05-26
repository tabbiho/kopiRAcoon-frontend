import React from 'react';
import CoffeeDiagramMain from './coffee-components/CoffeeDiagramMain.jsx';
import Combination from './coffee-components/Combination.jsx';
import SaveToFave from './coffee-components/SaveToFave.jsx';
import NavBar from './NavBar.jsx';

function MakeCoffee() {
  return (
    <>
      <CoffeeDiagramMain />
      <Combination />
      <SaveToFave />
      <NavBar />
    </>
  );
}

export default MakeCoffee;
