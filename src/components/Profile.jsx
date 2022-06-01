import React, { useState, useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import {
  Container, Text, Input, Button, Box,
} from '@chakra-ui/react';
import AppContext from '../functions.jsx';
import NavBar from './NavBar.jsx';
import typoStyles from './Typography.module.css';

function Profile() {
  const [passwordDetails, setPasswordDetails] = useState({
    currentPassword: '', newPassword: '', confirmPassword: '', error: false, success: false,
  });

  const { BACKEND_URL } = useContext(AppContext);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    const loginCheck = async () => {
      const loginResult = await axios.get(`${BACKEND_URL}/users/loginCheck`);
      setIsLoggedIn(loginResult.data);
    };
    loginCheck();
  });

  const handlePasswordChange = async () => {
    const { currentPassword, newPassword, confirmPassword } = passwordDetails;
    if (newPassword !== confirmPassword) {
      setPasswordDetails((prev) => ({ ...prev, error: true }));
      return;
    }
    const data = { currentPassword, newPassword };
    const passwordChangeResult = await axios.post(`${BACKEND_URL}/users/passwordChange`, data);
    if (passwordChangeResult.data[0]) {
      setPasswordDetails({
        currentPassword: '', newPassword: '', confirmPassword: '', error: false, success: true,
      });
    } else {
      setPasswordDetails((prev) => ({ ...prev, error: true }));
    }
  };

  return (
    <Container className="main-container-wrapper" maxW="410px">
      <div className="small-logo-wrapper">
        <img src="../../images/logo-icon/full-logo.png" alt="small-logo" className="small-logo-icon" />
      </div>
      <div>
        <div className={typoStyles['title-main']}>Change Password</div>
        <div>
          <Text className="login-label">
            Current Password:
          </Text>
          <Input type="password" value={passwordDetails.currentPassword} onChange={(e) => setPasswordDetails((prev) => ({ ...prev, currentPassword: e.target.value }))} />
        </div>
        <br />
        <div>
          <Text className="login-label">
            New Password:
          </Text>
          <Input type="password" value={passwordDetails.newPassword} onChange={(e) => setPasswordDetails((prev) => ({ ...prev, newPassword: e.target.value }))} />
        </div>
        <div>
          <Text className="login-label">
            Reconfirm New Password:
          </Text>
          <Input type="password" value={passwordDetails.confirmPassword} onChange={(e) => setPasswordDetails((prev) => ({ ...prev, confirmPassword: e.target.value }))} />
        </div>
        {passwordDetails.error
        && (<Box mt={3}>Something went wrong! Please reconfirm above info!</Box>)}
        {passwordDetails.success
        && (<Box mt={3}>Password change success!</Box>)}
        <Button boxShadow="xl" mx="auto" width="30%" size="lg" className="login-btn" mt={3} onClick={handlePasswordChange}>Confirm</Button>
        <NavBar />
      </div>
      {!isLoggedIn && (<Navigate to="/login" replace />)}
    </Container>
  );
}

export default Profile;
