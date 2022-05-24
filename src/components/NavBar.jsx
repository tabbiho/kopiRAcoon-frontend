import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import PinDropIcon from '@mui/icons-material/PinDrop';
import LogoutIcon from '@mui/icons-material/Logout';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';

function NavBar() {
  const [value, setValue] = useState(0);
  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <Link to="/makeCoffee">
          <BottomNavigationAction label="Make Coffee" icon={<LocalCafeIcon />} />
        </Link>
        <Link to="/">
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        </Link>
        <Link to="/map">
          <BottomNavigationAction label="Map" icon={<PinDropIcon />} />
        </Link>
        <Link to="/logout">
          <BottomNavigationAction label="Logout" icon={<LogoutIcon />} />
        </Link>
      </BottomNavigation>
    </Box>
  );
}

export default NavBar;
