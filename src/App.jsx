import React, { useReducer } from 'react';
import './App.css';
import CoffeeDiagramMain from './components/coffee-diagram/CoffeeDiagramMain.jsx';
import Combination from './components/Combination.jsx';

import AppContext from './functions.jsx';

function App() {
  const initialAppState = {
    coffee: 70,
    milk: { evapMilk: false, condMilk: true },
    ice: false,
    sugar: 'Regular',
  };

  const UPDATE_DIAGRAM_COFFEE = 'UPDATE_DIAGRAM_COFFEE';
  const UPDATE_DIAGRAM_MILK = 'UPDATE_DIAGRAM_MILK';
  const UPDATE_DIAGRAM_ICE = 'UPDATE_DIAGRAM_ICE';
  const UPDATE_DIAGRAM_SUGAR = 'UPDATE_DIAGRAM_SUGAR';

  const reducer = (state, action) => {
    switch (action.type) {
      case UPDATE_DIAGRAM_COFFEE:
        return { ...state, coffee: action.payload };
      case UPDATE_DIAGRAM_MILK:
        return { ...state, milk: action.payload };
      case UPDATE_DIAGRAM_ICE:
        return { ...state, ice: action.payload };
      case UPDATE_DIAGRAM_SUGAR:
        return { ...state, sugar: action.payload };
      default:
        return state;
    }
  };

  const [appState, dispatch] = useReducer(reducer, initialAppState);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const contextState = {
    appState,
    dispatch,
    keywords: {
      UPDATE_DIAGRAM_COFFEE,
      UPDATE_DIAGRAM_MILK,
      UPDATE_DIAGRAM_ICE,
      UPDATE_DIAGRAM_SUGAR,
    },
  };

  return (
    <div className="App">
      <AppContext.Provider value={contextState}>
        <CoffeeDiagramMain />
        <Combination />
      </AppContext.Provider>
    </div>

  );
}

export default App;
