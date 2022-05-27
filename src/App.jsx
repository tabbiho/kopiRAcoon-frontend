import React, { useReducer } from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import MakeCoffee from './components/MakeCoffee.jsx';
import FindCoffee from './components/FindCoffee.jsx';
import AppContext from './functions.jsx';
import FavoritesDisplay from './components/FavoritesDisplay.jsx';

function App() {
  const initialAppState = {
    coffee: 70,
    milk: { evapMilk: false, condMilk: true },
    ice: false,
    sugar: 'Regular',
    favorite: false,
  };

  const UPDATE_DIAGRAM_COFFEE = 'UPDATE_DIAGRAM_COFFEE';
  const UPDATE_DIAGRAM_MILK = 'UPDATE_DIAGRAM_MILK';
  const UPDATE_DIAGRAM_ICE = 'UPDATE_DIAGRAM_ICE';
  const UPDATE_DIAGRAM_SUGAR = 'UPDATE_DIAGRAM_SUGAR';
  const SET_FAVORITE = 'SET_FAVORITE';

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
      case SET_FAVORITE:
        return { ...state, favorite: action.payload };
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
      SET_FAVORITE,
    },
  };

  return (
    <BrowserRouter>
      <AppContext.Provider value={contextState}>
        <Routes>
          <Route path="/makeCoffee" element={<MakeCoffee />} />
          <Route path="/findCoffee" element={<FindCoffee />} />
          <Route path="/favorites" element={<FavoritesDisplay />} />
          <Route path="/map" />
          <Route path="/login" />
          <Route path="/logout" />
          <Route path="/profile" />
        </Routes>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
