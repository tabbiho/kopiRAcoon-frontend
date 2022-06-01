import { Link } from 'react-router-dom';
import React from 'react';
import {
  HStack, Icon,
} from '@chakra-ui/react';
import {
  AiOutlineUser, AiOutlineEnvironment, AiOutlineCoffee, AiOutlineStar, AiOutlineLogout,
} from 'react-icons/ai';
import { motion } from 'framer-motion';

function NavBar() {
  return (
    <HStack justify="space-evenly" className="nav-bar-bar">
      <Link to="/profile">
        <motion.button
          className="highlight-nav"
          whileHover={{
            backgroundColor: '#441c1e',
            borderRadius: ['20%', '50%', '50%', '50%', '50%'],
            scake: 1.3,
            y: -15,
            color: '#fff5f4',
          }}

        >
          <Icon as={AiOutlineUser} className="navbar-icon" />
          <div
            className="navbar-icon-label"
          >
            Profile
          </div>
        </motion.button>
      </Link>
      <Link to="/findCoffee">
        <motion.button
          className="highlight-nav"
          whileHover={{
            backgroundColor: '#441c1e',
            borderRadius: ['50%', '50%', '50%', '50%', '50%'],
            scake: 1.3,
            color: '#fff5f4',
            y: -15,
          }}
          transition={{
            type: 'spring',
            stiffness: '300',
          }}
        >
          <Icon as={AiOutlineEnvironment} className="navbar-icon" />
          <div className="navbar-icon-label">
            Map
          </div>
        </motion.button>
      </Link>
      <Link to="/makeCoffee">
        <motion.button
          className="highlight-nav"
          whileHover={{
            backgroundColor: '#441c1e',
            borderRadius: ['20%', '50%', '50%', '50%', '50%'],
            scake: 1.3,
            color: '#fff5f4',
            y: -15,
          }}
        >
          <Icon as={AiOutlineCoffee} className="navbar-icon" />
          <div className="navbar-icon-label">
            Brew
          </div>
        </motion.button>
      </Link>
      <Link to="/favorites">
        <motion.button
          className="highlight-nav"
          whileHover={{
            backgroundColor: '#441c1e',
            borderRadius: ['20%', '50%', '50%', '50%', '50%'],
            scake: 1.3,
            color: '#fff5f4',
            y: -15,
          }}
        >
          <Icon as={AiOutlineStar} className="navbar-icon" />
          <div className="navbar-icon-label">
            Favorites
          </div>
        </motion.button>
      </Link>
      <Link to="/Logout">
        <motion.button
          className="highlight-nav"
          whileHover={{
            backgroundColor: '#441c1e',
            borderRadius: ['20%', '50%', '50%', '50%', '50%'],
            scake: 1.3,
            color: '#fff5f4',
            y: -15,
          }}
        >
          <Icon as={AiOutlineLogout} className="navbar-icon" />
          <div className="navbar-icon-label">
            Log out
          </div>
        </motion.button>
      </Link>
    </HStack>

  );
}

export default NavBar;
