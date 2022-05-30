import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Container } from '@chakra-ui/react';
import AppContext from '../functions.jsx';
import NavBar from './NavBar.jsx';

function Profile() {
  const [passwordDetails, setPasswordDetails] = useState({
    currentPassword: '', newPassword: '', confirmPassword: '', error: false, success: false,
  });

  const { BACKEND_URL } = useContext(AppContext);

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
      <div>
        <h3>Change Password</h3>
        <div>
          Current Password:
          <input type="password" value={passwordDetails.currentPassword} onChange={(e) => setPasswordDetails((prev) => ({ ...prev, currentPassword: e.target.value }))} />
        </div>
        <br />
        <div>
          New Password:
          <input type="password" value={passwordDetails.newPassword} onChange={(e) => setPasswordDetails((prev) => ({ ...prev, newPassword: e.target.value }))} />
        </div>
        <div>
          Reconfirm New Password:
          <input type="password" value={passwordDetails.confirmPassword} onChange={(e) => setPasswordDetails((prev) => ({ ...prev, confirmPassword: e.target.value }))} />
        </div>
        {passwordDetails.error && (<div>Something went wrong! Please reconfirm above info!</div>)}
        {passwordDetails.success && (<div>Password change success!</div>)}
        <button type="button" onClick={handlePasswordChange}>Confirm</button>
        <NavBar />
      </div>
    </Container>
  );
}

export default Profile;
