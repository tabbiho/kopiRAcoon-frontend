import React, { useState, useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { Container, Box } from '@chakra-ui/react';
import axios from 'axios';
import AppContext from '../functions.jsx';
import CoffeeDiagramMain from './coffee-components/CoffeeDiagramMain.jsx';
import Combination from './coffee-components/Combination.jsx';
import SaveToFave from './coffee-components/SaveToFave.jsx';
import NavBar from './NavBar.jsx';
import Translation from './coffee-components/Translation.jsx';

function MakeCoffee() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const { BACKEND_URL } = useContext(AppContext);

  useEffect(() => {
    const loginCheck = async () => {
      const loginResult = await axios.get(`${BACKEND_URL}/users/loginCheck`);
      setIsLoggedIn(loginResult.data);
    };
    loginCheck();
  }, []);

  return (
    <Container className="main-container-wrapper" maxWidth="410px">
      <div className="small-logo-wrapper">
        <img src="../../images/logo-icon/full-logo.png" alt="small-logo" className="small-logo-icon" />
      </div>
      <Box className="content-main">
        <CoffeeDiagramMain />
        <Combination />
        <SaveToFave />
        <Translation />
      </Box>
      <NavBar />
      {!isLoggedIn && (<Navigate to="/login" replace />)}
    </Container>
  );
}

export default MakeCoffee;
