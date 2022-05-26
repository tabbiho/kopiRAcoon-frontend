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
        <BottomNavigationAction className="nav-bar-icon" label="Make Coffee" icon={<LocalCafeIcon />} component={Link} to="/makeCoffee" />

        <BottomNavigationAction className="nav-bar-icon" label="Find Coffee" icon={<PinDropIcon />} component={Link} to="/findCoffee" />

        <BottomNavigationAction className="nav-bar-icon" label="Home" icon={<HomeIcon />} component={Link} to="/" />

        <BottomNavigationAction className="nav-bar-icon" label="Logout" icon={<LogoutIcon />} component={Link} to="/logout" />
      </BottomNavigation>
    </Box>
  );
}

export default NavBar;
