import React from 'react';
import CoffeeDiagramMain from './coffee-components/CoffeeDiagramMain.jsx';
import Combination from './coffee-components/Combination.jsx';
import NavBar from './NavBar.jsx';

function MakeCoffee() {
  return (
    <>
      <CoffeeDiagramMain />
      <Combination />
      <NavBar />
    </>
  );
}

export default MakeCoffee;
