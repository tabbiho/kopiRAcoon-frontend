/* eslint-disable no-unused-expressions */
import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  AiOutlineStar,
} from 'react-icons/ai';
import { Icon, Button, Box } from '@chakra-ui/react';
import axios from 'axios';
import AppContext from '../../functions.jsx';

function SaveToFave() {
  const [favoritesClicked, setFavoritesStatus] = useState(false);
  const {
    appState, dispatch, keywords, BACKEND_URL,
  } = useContext(AppContext);
  const { SET_FAVORITE } = keywords;
  console.log(appState);

  const handleFavoritesClicked = () => {
    // eslint-disable-next-line max-len
    appState.favorite ? dispatch({ type: SET_FAVORITE, payload: false }) : dispatch({ type: SET_FAVORITE, payload: true });
    favoritesClicked ? setFavoritesStatus(false) : setFavoritesStatus(true);
  };

  useEffect(() => {
    // if favourite is true, do a post request to backend to save favorite
    if (appState.favorite) {
      const postFavoriteReq = async () => {
        try {
          // eslint-disable-next-line no-unused-vars
          const addFavorites = await axios.post(`${BACKEND_URL}/addFavorites`, appState);
        }
        catch (err) {
          console.log(err);
        }
      };
      postFavoriteReq();
    }
    const deleteFavoriteReq = async () => {
      try {
        // eslint-disable-next-line no-unused-vars
        const undoFavorite = await axios.post(`${BACKEND_URL}/undoFave`, appState);
      }
      catch (err) {
        console.log(err);
      }
    };
    deleteFavoriteReq();
  }, [favoritesClicked]);
  return (
    <Box id="favorites-box">

      <Button
        animate={{ rotate: [360, 180, 0, 180, 360] }}
        transition={{ duration: 2 }}
        whileHover={{ scale: 1.2 }}
        viewport={{ once: true }}
        as={motion.button}
        onClick={handleFavoritesClicked}
        id="favorites-btn"
      >
        <Icon as={AiOutlineStar} id="star-btn" />
      </Button>
    </Box>
  );
}

export default SaveToFave;
