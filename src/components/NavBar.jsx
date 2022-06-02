import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import {
  Icon, Tabs, TabList, Tab,
} from '@chakra-ui/react';
import {
  AiOutlineUser, AiOutlineEnvironment, AiOutlineCoffee, AiOutlineStar, AiOutlineLogout,
} from 'react-icons/ai';
import { motion } from 'framer-motion';

function NavBar() {
  const [tabIndex, setTabsIndex] = useState(3);
  console.log(tabIndex);
  return (
    <Tabs variant="soft-rounded" className="nav-bar-bar" colorScheme="none">
      <TabList justifyContent="space-evenly">
        <Tab
          as={motion.div}
          onClick={() => setTabsIndex(1)}
          className={tabIndex === 1 ? 'highlight-nav selected-nav' : 'highlight-nav'}
          whileHover={{
            backgroundColor: '#441c1e',
            scake: 1.3,
            y: -15,
            color: '#fff5f4',
          }}
          transition={{
            type: 'spring',
            stiffness: 300,

          }}
        >
          <Link to="/profile">
            <Icon as={AiOutlineUser} className="navbar-icon" />
            <div
              className="navbar-icon-label"
            >
              Profile
            </div>
          </Link>
        </Tab>
        <Tab
          as={motion.div}
          onClick={() => setTabsIndex(2)}
          className={tabIndex === 2 ? 'highlight-nav selected-nav' : 'highlight-nav'}
          whileHover={{
            backgroundColor: '#441c1e',
            scake: 1.3,
            y: -15,
            color: '#fff5f4',
          }}
          transition={{
            type: 'spring',
            stiffness: 300,

          }}
        >
          <Link to="/findCoffee">
            <Icon as={AiOutlineEnvironment} className="navbar-icon" />
            <div className="navbar-icon-label">
              Find
            </div>
          </Link>
        </Tab>
        <Tab
          as={motion.div}
          onClick={() => setTabsIndex(3)}
          className={tabIndex === 3 ? 'highlight-nav selected-nav' : 'highlight-nav'}
          whileHover={{
            backgroundColor: '#441c1e',
            scake: 1.3,
            y: -15,
            color: '#fff5f4',
          }}
          transition={{
            type: 'spring',
            stiffness: 300,

          }}
        >
          <Link to="/makeCoffee">
            <Icon as={AiOutlineCoffee} className="navbar-icon" />
            <div className="navbar-icon-label">
              Brew
            </div>
          </Link>
        </Tab>
        <Tab
          as={motion.div}
          onClick={() => setTabsIndex(4)}
          className={tabIndex === 4 ? 'highlight-nav selected-nav' : 'highlight-nav'}
          whileHover={{
            backgroundColor: '#441c1e',
            scake: 1.3,
            y: -15,
            color: '#fff5f4',
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
          }}
        >
          <Link to="/favorites">
            <Icon as={AiOutlineStar} className="navbar-icon" />
            <div className="navbar-icon-label">
              Favorites
            </div>
          </Link>
        </Tab>
        <Tab
          as={motion.div}
          onClick={() => setTabsIndex(5)}
          className={tabIndex === 5 ? 'highlight-nav selected-nav' : 'highlight-nav'}
          whileHover={{
            backgroundColor: '#441c1e',
            scake: 1.3,
            y: -15,
            color: '#fff5f4',
          }}
          transition={{
            type: 'spring',
            stiffness: 300,

          }}
        >
          <Link to="/Logout">
            <Icon as={AiOutlineLogout} className="navbar-icon" />
            <div className="navbar-icon-label">
              Log out
            </div>
          </Link>
        </Tab>
      </TabList>
    </Tabs>

  );
}

export default NavBar;
