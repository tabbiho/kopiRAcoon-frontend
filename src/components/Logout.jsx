import React, { useState, useEffect, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import AppContext from '../functions.jsx';

function Logout() {
  const { BACKEND_URL } = useContext(AppContext);
  const [logoutStatus, setLogoutStatus] = useState(false);

  useEffect(() => {
    const handleLogout = async () => {
      await axios.get(`${BACKEND_URL}/users/logout`);
      setLogoutStatus(true);
    };
    handleLogout();
  }, []);

  return (
    <div>
      {logoutStatus && (<Navigate to="/login" replace />)}
    </div>
  );
}

export default Logout;
