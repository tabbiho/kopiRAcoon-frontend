import { Link } from 'react-router-dom';
import React from 'react';
import {
  HStack, Icon,
} from '@chakra-ui/react';
import {
  AiOutlineUser, AiOutlineEnvironment, AiOutlineCoffee, AiOutlineStar, AiOutlineLogout,
} from 'react-icons/ai';

function NavBar() {
  return (
    <HStack justify="space-evenly" className="nav-bar-bar">
      <Link to="/profile">
        <Icon as={AiOutlineUser} className="navbar-icon" />
        <div className="navbar-icon-label">
          Profile
        </div>
      </Link>
      <Link to="/findCoffee">
        <Icon as={AiOutlineEnvironment} className="navbar-icon" />
        <div className="navbar-icon-label">
          Map
        </div>
      </Link>
      <Link to="/makeCoffee">
        <Icon as={AiOutlineCoffee} className="navbar-icon" />
        <div className="navbar-icon-label">
          Brew
        </div>
      </Link>
      <Link to="/favorites">
        <Icon as={AiOutlineStar} className="navbar-icon" />
        <div className="navbar-icon-label">
          Favorites
        </div>
      </Link>
      <Link to="/Logout">
        <Icon as={AiOutlineLogout} className="navbar-icon" />
        <div className="navbar-icon-label">
          Log out
        </div>
      </Link>
    </HStack>

  );
}

export default NavBar;
