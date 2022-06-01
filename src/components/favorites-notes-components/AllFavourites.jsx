import React from 'react';
import { Box, HStack, Text } from '@chakra-ui/react';
import CoffeeName from '../coffee-components/CoffeeName.jsx';
import EditNote from './EditNote.jsx';
import DeleteFavorite from './DeleteFavorite.jsx';

function AllFavorites({ resource }) {
  const favoritesList = resource.favorites.read();
  const notesList = resource.notes.read();

  return (
    <>
      {favoritesList.map((favCoffee) => (
        <Box className="favorite-list" mb={3} mt={2}>
          <HStack>
            <Text>
              {CoffeeName(favCoffee.proportion)}
            </Text>
            <DeleteFavorite coffeeId={favCoffee.coffeeId} />
          </HStack>
          <Box className="favorite-list-coffee" mt={3}>
            <Box
              className="coffee-favorite-wrapper"
            >
              <Box className="coffee-img-wrapper-favorite">
                <img
                  src="../../images/logo-icon/coffee-cup-outline.png"
                  alt="coffee-cup-outline"
                  className="coffee-cup-outline-favorite"
                />
                <Box className=" favorite-layers">
                  <Box
                    className="water-layer water-layer-favorite"
                    style={{ height: `${((100 - favCoffee.proportion.coffee) / 100) * 80}%` }}
                  />
                  <Box
                    className="coffee-layer coffee-layer-favorite"
                    style={{ height: `${(favCoffee.proportion.coffee / 100) * 80}%` }}
                  />
                </Box>
              </Box>
            </Box>
            <Box>
              <EditNote coffeeId={favCoffee.coffeeId} />
            </Box>
          </Box>
          {notesList
            .filter((notes) => notes.coffeeId === favCoffee.coffeeId)
            .map((note) => (
              <Text my={3}>
                {note.notes ? note.notes : '-- No notes--'}
              </Text>
            ))}
        </Box>
      ))}
    </>
  );
}

export default AllFavorites;
