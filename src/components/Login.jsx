import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Navigate, Link } from 'react-router-dom';
import AppContext from '../functions.jsx';

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
    <>
      <h2>kopiRAccoon</h2>
      <div>
        Username:
        <input onChange={(e) => setLoginDetails((prev) => (
          { ...prev, username: e.target.value }))}
        />
      </div>
      <div>
        Password:
        <input
          type="password"
          onChange={(e) => setLoginDetails((prev) => (
            { ...prev, password: e.target.value }))}
        />
      </div>
      <button type="button" onClick={handleLogin}>Login</button>
      {loginDetails.error && (<div>Login unsuccessful. Please try again.</div>)}
      {loginDetails.loggedIn && (<Navigate to="/makeCoffee" replace />)}
      Not a user yet? Register
      {' '}
      <Link to="/register">here</Link>
    </>
  );
}

export default Login;
