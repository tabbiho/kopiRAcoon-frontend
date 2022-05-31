import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Navigate, Link } from 'react-router-dom';
import {
  Container, Box, Input, Button, Text, Heading,
} from '@chakra-ui/react';
import AppContext from '../functions.jsx';
import LogoAnimation from './login-components-css/LogoAnimation.jsx';

function Login() {
  const { BACKEND_URL } = useContext(AppContext);

  const [loginDetails, setLoginDetails] = useState({
    username: '', password: '', error: false, loggedIn: false,
  });

  const handleLogin = async () => {
    const { username, password } = loginDetails;
    const data = { username, password };

    const loginResult = await axios.post(`${BACKEND_URL}/users/login`, data);

    if (loginResult.data) {
      setLoginDetails((prev) => ({ ...prev, loggedIn: true }));
    } else {
      setLoginDetails((prev) => ({ ...prev, error: true }));
    }
    console.log(loginResult);
  };

  return (
    <Container className="main-container-wrapper" maxWidth="410px">
      <LogoAnimation />
      <Heading className="heading-login" textAlign="center" as="h2" size="xl" mt={3}>LOGIN</Heading>
      <Box>
        <Text className="login-label">
          Username:
        </Text>
        <Input onChange={(e) => setLoginDetails((prev) => (
          { ...prev, username: e.target.value }))}
        />
      </Box>
      <Box>
        <Text className="login-label">
          Password:
        </Text>
        <Input
          type="password"
          onChange={(e) => setLoginDetails((prev) => (
            { ...prev, password: e.target.value }))}
        />
      </Box>
      <Button boxShadow="xl" mx="auto" width="30%" size="lg" className="login-btn" mt={3} onClick={handleLogin}>Login</Button>
      {loginDetails.error && (<Box mt={3}>Login unsuccessful. Please try again.</Box>)}
      {loginDetails.loggedIn && (<Navigate to="/makeCoffee" replace />)}
      <Box mt={3} textAlign="center">
        Not a user yet? Register
        {' '}
        <Link to="/register" id="here-link">here</Link>
      </Box>
    </Container>
  );
}

export default Login;
