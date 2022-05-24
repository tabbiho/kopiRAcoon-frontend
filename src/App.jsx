import React from 'react';
import './App.css';
import CoffeeDiagramMain from './components/coffee-diagram/CoffeeDiagramMain.jsx';
import Combination from './components/Combination.jsx';

function App() {
  return (
    <div className="App">
      <Combination />
      <CoffeeDiagramMain />
    </div>

  );
}

export default App;
