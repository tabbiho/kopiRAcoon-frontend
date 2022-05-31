import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  Container, Box, Input, Button, Text, Heading, Icon, HStack,
} from '@chakra-ui/react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import AppContext from '../functions.jsx';

function Register() {
  const { BACKEND_URL } = useContext(AppContext);

  const [registerDetails, setRegisterDetails] = useState({
    username: '', displayName: '', password: '', confirmPassword: '', duplicateError: false, passwordError: false, success: false,
  });

  const handleRegister = async () => {
    const { password, confirmPassword } = registerDetails;

    if (password !== confirmPassword) {
      setRegisterDetails((prev) => ({ ...prev, duplicateError: false, passwordError: true }));
      return;
    }

    const { username, displayName } = registerDetails;
    const data = { username, displayName, password };

    const registerResult = await axios.post(`${BACKEND_URL}/users/register`, data);
    if (registerResult.data) {
      setRegisterDetails({
        username: '', displayName: '', password: '', confirmPassword: '', duplicateError: false, passwordError: false, success: true,
      });
    } else {
      setRegisterDetails((prev) => ({ ...prev, passwordError: false, duplicateError: true }));
    }
  };

  return (
    <Container className="main-container-wrapper" maxWidth="410px">
      <Box className="small-logo-wrapper">
        <img src="../../images/logo-icon/full-logo.png" alt="small-logo" className="small-logo-icon" />
      </Box>
      <HStack mt={5}>
        <Link to="/login">
          <Button bg="transparent" id="back-arrow-btn"><Icon as={AiOutlineArrowLeft} id="back-arrow" /></Button>
        </Link>
        <Heading className="heading-login" textAlign="center" as="h2" size="xl">REGISTER</Heading>
      </HStack>
      <Box>
        <Text className="login-label">
          Username:
        </Text>
        <Input
          value={registerDetails.username}
          onChange={(e) => (setRegisterDetails((prev) => (
            { ...prev, username: e.target.value })))}
        />
      </Box>
      <Box>
        <Text className="login-label">
          Display Name:
        </Text>
        <Input
          value={registerDetails.displayName}
          onChange={(e) => (setRegisterDetails((prev) => (
            { ...prev, displayName: e.target.value })))}
        />
      </Box>
      <Box>
        <Text className="login-label">
          Password:
        </Text>
        <Input
          type="password"
          value={registerDetails.password}
          onChange={(e) => (setRegisterDetails((prev) => (
            { ...prev, password: e.target.value })))}
        />
      </Box>
      <Box>
        <Text className="login-label">
          Reconfirm Password:
        </Text>
        <Input
          value={registerDetails.confirmPassword}
          type="password"
          onChange={(e) => (setRegisterDetails((prev) => (
            { ...prev, confirmPassword: e.target.value })))}
        />
      </Box>

      <Button boxShadow="xl" mx="auto" width="30%" size="md" className="login-btn" mt={3} onClick={handleRegister}>Register</Button>
      {registerDetails.passwordError && (<Box>Passwords do not match!</Box>)}
      {registerDetails.duplicateError && (<Box>{`The username "${registerDetails.username} already exists!"`}</Box>)}
      {registerDetails.success && (<Box>Account created successfully! You may log in now.</Box>)}
    </Container>
  );
}

export default Register;
