import React from 'react';
import {
  Box, HStack, Text, Heading, Divider,
} from '@chakra-ui/react';
import CoffeeName from '../coffee-components/CoffeeName.jsx';
import EditNote from './EditNote.jsx';
import DeleteFavorite from './DeleteFavorite.jsx';

function AllFavorites({ resource }) {
  const favoritesList = resource.favorites.read();
  const notesList = resource.notes.read();

  return (
    <Box className="favorites-list-wrapper" mb={6}>
      {favoritesList.map((favCoffee) => (
        <Box boxShadow="xl" className="favorite-list" mb={3} mt={5}>
          <HStack className="coffee-name-favourites-title" justifyContent="space-between">
            <Text>
              {CoffeeName(favCoffee.proportion)}
            </Text>
            <DeleteFavorite coffeeId={favCoffee.coffeeId} />
          </HStack>
          <Box className="favorite-list-coffee">
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
            <Box className="proportion-text-box">
              <Heading fontSize="lg" className="proportion-header">
                Proportion:
              </Heading>
              <Text className="favourites-text-proportion">
                Coffee:
                {' '}
                {favCoffee.proportion.coffee}
                %
              </Text>
              <Text className="favourites-text-proportion">
                Water:
                {' '}
                {100 - favCoffee.proportion.coffee}
                %
              </Text>
              <Text className="favourites-text-proportion">
                Milk:
                {' '}
                {(favCoffee.proportion.milk.evapMilk && favCoffee.proportion.milk.condMilk) && 'Evaporated & Condensed Milk' }
                {(!favCoffee.proportion.milk.evapMilk && !favCoffee.proportion.milk.condMilk) && 'No milk' }
                {(favCoffee.proportion.milk.evapMilk && !favCoffee.proportion.milk.condMilk) && 'Evaporated Milk' }
                {(!favCoffee.proportion.milk.evapMilk && favCoffee.proportion.milk.condMilk) && 'Condensed Milk' }
              </Text>
              <Text className="favourites-text-proportion">
                Sugar:
                {' '}
                {favCoffee.proportion.sugar}
              </Text>
              <Text className="favourites-text-proportion">
                Temperature:
                {' '}
                {(favCoffee.proportion.ice) ? 'Ice' : 'No Ice'}
              </Text>
            </Box>

          </Box>
          <Divider mt={1} />
          <HStack alignItems="center" justifyContent="flex-start">
            <Box>
              <EditNote
                coffeeName={CoffeeName(favCoffee.proportion)}
                coffeeId={favCoffee.coffeeId}
              />
            </Box>
            {notesList
              .filter((notes) => notes.coffeeId === favCoffee.coffeeId)
              .map((note) => (
                <Text id="notes-display">
                  Notes:
                  {' '}
                  {note.notes ? note.notes : '-Nil-'}
                </Text>
              ))}
          </HStack>
        </Box>
      ))}
    </Box>
  );
}

export default AllFavorites;
