import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PinDropIcon from '@mui/icons-material/PinDrop';
import LogoutIcon from '@mui/icons-material/Logout';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import StarIcon from '@mui/icons-material/Star';
import FaceIcon from '@mui/icons-material/Face';

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
        <BottomNavigationAction className="nav-bar-icon" label="Profile" icon={<FaceIcon />} component={Link} to="/profile" />

        <BottomNavigationAction className="nav-bar-icon" label="Find Coffee" icon={<PinDropIcon />} component={Link} to="/findCoffee" />

        <BottomNavigationAction className="nav-bar-icon" label="Make Coffee" icon={<LocalCafeIcon />} component={Link} to="/makeCoffee" />

        <BottomNavigationAction className="nav-bar-icon" label="Favorites" icon={<StarIcon />} component={Link} to="/favorites" />

        <BottomNavigationAction className="nav-bar-icon" label="Logout" icon={<LogoutIcon />} component={Link} to="/logout" />

      </BottomNavigation>
    </Box>
  );
}

export default NavBar;
