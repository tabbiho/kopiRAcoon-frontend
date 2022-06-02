import { NavLink } from 'react-router-dom';
import React from 'react';
import {
  Icon, Box, Flex,
} from '@chakra-ui/react';
import {
  AiOutlineUser, AiOutlineEnvironment, AiOutlineCoffee, AiOutlineStar, AiOutlineLogout,
} from 'react-icons/ai';
import { motion } from 'framer-motion';

function NavBar() {
  return (

    <Box variant="soft-rounded" className="nav-bar-bar" colorScheme="none">
      <nav>
        <Flex justifyContent="space-evenly">
          <Box
            as={motion.div}
            className="nav-bar-tab"
            whileHover={{
              backgroundColor: '#441c1e',
              y: -15,
              color: '#fff5f4',
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
            }}
          >
            <NavLink
              to="/profile"
              className={({ isActive }) => (isActive ? 'selected-nav' : 'highlight-nav')}
            >
              <Icon as={AiOutlineUser} className="navbar-icon" />
              <div
                className="navbar-icon-label"
              >
                Profile
              </div>
            </NavLink>
          </Box>
          <Box
            className="nav-bar-tab"
            as={motion.div}
            whileHover={{
              backgroundColor: '#441c1e',
              y: -15,
              color: '#fff5f4',
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
            }}
          >
            <NavLink to="/findCoffee" className={({ isActive }) => (isActive ? 'selected-nav' : 'highlight-nav')}>
              <Icon as={AiOutlineEnvironment} className="navbar-icon" />
              <div className="navbar-icon-label">
                Find
              </div>
            </NavLink>
          </Box>
          <Box
            as={motion.div}
            className="nav-bar-tab"
            whileHover={{
              backgroundColor: '#441c1e',
              y: -15,
              color: '#fff5f4',
            }}
            transition={{
              type: 'spring',
              stiffness: 300,

            }}
          >
            <NavLink to="/makeCoffee" className={({ isActive }) => (isActive ? 'selected-nav' : 'highlight-nav')}>
              <Icon as={AiOutlineCoffee} className="navbar-icon" />
              <div className="navbar-icon-label">
                Brew
              </div>
            </NavLink>
          </Box>
          <Box
            as={motion.div}
            className="nav-bar-tab"
            whileHover={{
              backgroundColor: '#441c1e',
              y: -15,
              color: '#fff5f4',
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
            }}
          >
            <NavLink to="/favorites" className={({ isActive }) => (isActive ? 'selected-nav' : 'highlight-nav')}>
              <Icon as={AiOutlineStar} className="navbar-icon" />
              <div className="navbar-icon-label">
                Favorites
              </div>
            </NavLink>
          </Box>
          <Box
            className="nav-bar-tab"
            as={motion.div}
            whileHover={{
              backgroundColor: '#441c1e',
              y: -15,
              color: '#fff5f4',
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
            }}
          >
            <NavLink to="/Logout" className={({ isActive }) => (isActive ? 'selected-nav' : 'highlight-nav')}>
              <Icon as={AiOutlineLogout} className="navbar-icon" />
              <div className="navbar-icon-label">
                Log out
              </div>
            </NavLink>
          </Box>
        </Flex>
      </nav>
    </Box>

  );
}

export default NavBar;
