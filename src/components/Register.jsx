import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
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
    <>
      <h3>Register</h3>
      <div>
        Username:
        <input
          value={registerDetails.username}
          onChange={(e) => (setRegisterDetails((prev) => (
            { ...prev, username: e.target.value })))}
        />
      </div>
      <div>
        Display Name:
        <input
          value={registerDetails.displayName}
          onChange={(e) => (setRegisterDetails((prev) => (
            { ...prev, displayName: e.target.value })))}
        />
      </div>
      <div>
        Password:
        <input
          type="password"
          value={registerDetails.password}
          onChange={(e) => (setRegisterDetails((prev) => (
            { ...prev, password: e.target.value })))}
        />
      </div>
      <div>
        Reconfirm Password:
        <input
          value={registerDetails.confirmPassword}
          type="password"
          onChange={(e) => (setRegisterDetails((prev) => (
            { ...prev, confirmPassword: e.target.value })))}
        />
      </div>
      <Link to="/login">
        <button type="button">Back</button>
      </Link>
      <button type="button" onClick={handleRegister}>Register</button>
      {registerDetails.passwordError && (<div>Passwords do not match!</div>)}
      {registerDetails.duplicateError && (<div>{`The username "${registerDetails.username} already exists!"`}</div>)}
      {registerDetails.success && (<div>Account created successfully! You may log in now.</div>)}
    </>
  );
}

export default Register;
