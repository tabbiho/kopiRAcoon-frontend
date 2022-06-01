import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { Container, Box } from '@chakra-ui/react';
import AppContext from '../functions.jsx';
import CoffeeMap from './map-components/CoffeeMap.jsx';
import NavBar from './NavBar.jsx';

function FindCoffee() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const { BACKEND_URL } = useContext(AppContext);

  useEffect(() => {
    const loginCheck = async () => {
      const loginResult = await axios.get(`${BACKEND_URL}/users/loginCheck`);
      setIsLoggedIn(loginResult.data);
    };
    loginCheck();
  });
  return (
    <Container className="main-container-wrapper" maxWidth="410px">
      <Box className="small-logo-wrapper">
        <img src="../../images/logo-icon/full-logo.png" alt="small-logo" className="small-logo-icon" />
      </Box>
      <div className="heading-title-h1"> Find Coffee in your Area</div>
      <Box className="content-main">
        <CoffeeMap />
      </Box>
      <NavBar />
      {!isLoggedIn && (<Navigate to="/login" replace />)}
    </Container>
  );
}

export default FindCoffee;
