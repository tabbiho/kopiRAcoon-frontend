import React, { useState, useEffect } from 'react';
import { Box, Button } from '@chakra-ui/react';
import coffees from './coffeeList.js';

function RandomCoffee() {
  const [randomCoffee, setRandomCoffee] = useState();

  const handleNewCoffee = () => {
    const randomCoffeeIndex = Math.floor(Math.random() * coffees.length);
    setRandomCoffee(coffees[randomCoffeeIndex]);
  };

  useEffect(() => {
    handleNewCoffee();
  }, []);

  return (
    <div>
      {randomCoffee
      && (
        <Box p="4" border="1px" borderRadius={5}>
          <Box display="flex" alignItems="baseline">
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
            >
              Try this random coffee:
            </Box>
          </Box>
          <Box
            mt="1"
            fontWeight="semibold"
          >
            {randomCoffee.title}
          </Box>
          <Box as="span" color="gray.600" fontSize="sm">
            {randomCoffee.description}
          </Box>
          <Box>
            <Button p={2} className="favorites-btn" size="xs" onClick={handleNewCoffee} mt="2">Generate a random coffee!</Button>
          </Box>
        </Box>
      )}
    </div>
  );
}

export default RandomCoffee;
