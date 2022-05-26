import React, { useState, useContext, useEffect } from 'react';
import StarIcon from '@mui/icons-material/Star';
import axios from 'axios';
import AppContext from '../../functions.jsx';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3004';

function SaveToFave() {
  const [favorite, setFavorite] = useState(false);
  const { appState } = useContext(AppContext);
  console.log(appState);

  useEffect(() => {
    // if favourite is true, do a post request to backend to save favorite
    if (favorite) {
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
  }, [favorite]);
  return (
    <>
      {favorite && (
      <StarIcon className="favorite-icon" />
      )}
      <button type="button" onClick={() => (favorite ? setFavorite(false) : setFavorite(true))}>Favourite</button>
    </>
  );
}

export default SaveToFave;
