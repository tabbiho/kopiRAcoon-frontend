import React, { useReducer } from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import axios from 'axios';
import { ChakraProvider } from '@chakra-ui/react';
import './i18n.js';
import { useTranslation } from 'react-i18next';
import MakeCoffee from './components/MakeCoffee.jsx';
import FindCoffee from './components/FindCoffee.jsx';
import AppContext from './functions.jsx';
import FavoritesDisplay from './components/FavoritesDisplay.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Logout from './components/Logout.jsx';
import Profile from './components/Profile.jsx';

axios.defaults.withCredentials = true;

function App() {
  // const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3004';
  const BACKEND_URL = 'https://kopiracoon.herokuapp.com/';
  const { t } = useTranslation();

  const initialAppState = {
    coffee: 70,
    milk: { evapMilk: false, condMilk: true },
    ice: false,
    sugar: 'Regular',
    favorite: false,
    allFavorites: [],
    allNotes: [],
  };

  const UPDATE_DIAGRAM_COFFEE = 'UPDATE_DIAGRAM_COFFEE';
  const UPDATE_DIAGRAM_MILK = 'UPDATE_DIAGRAM_MILK';
  const UPDATE_DIAGRAM_ICE = 'UPDATE_DIAGRAM_ICE';
  const UPDATE_DIAGRAM_SUGAR = 'UPDATE_DIAGRAM_SUGAR';
  const SET_FAVORITE = 'SET_FAVORITE';
  const LOAD_FAVORITE_LIST = 'LOAD_FAVORITE_LIST';

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
      case LOAD_FAVORITE_LIST:
        return { ...state, allFavorites: action.payload };
      default:
        return state;
    }
  };

  const [appState, dispatch] = useReducer(reducer, initialAppState);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const contextState = {
    BACKEND_URL,
    t,
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
      <ChakraProvider>
        <AppContext.Provider value={contextState}>
          <Routes>
            <Route path="/makeCoffee" element={<MakeCoffee />} />
            <Route path="/findCoffee" element={<FindCoffee />} />
            <Route path="/favorites" element={<FavoritesDisplay />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </AppContext.Provider>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
