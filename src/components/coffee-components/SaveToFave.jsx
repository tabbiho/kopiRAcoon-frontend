import React, { useState, useContext, useEffect } from 'react';
import StarIcon from '@mui/icons-material/Star';
import axios from 'axios';
import AppContext from '../../functions.jsx';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3004';

function SaveToFave() {
  const [favorite, setFavorite] = useState(false);
  const { appState } = useContext(AppContext);
  console.log(appState);

  // eslint-disable-next-line max-len
  // need to get the coffeeId to update the join table--> fake data, coffeeID is 1, userId is 1 (should retrieve from cookies)
  useEffect(() => {
    // if favourite is true, do a post request to backend to save favorite
    if (favorite) {
      const postFavoriteReq = async () => {
        try {
          const coffeeData = {
            coffeeId: 1,
          };
          const addFavorites = await axios.post(`${BACKEND_URL}/addFavorites`, coffeeData);
        }
        catch (err) {
          console.log(err);
        }
      };
      postFavoriteReq();
    }
    const deleteFavoriteReq = async () => {
      try {
        const removeFaveData = {
          coffeeId: 1,
        };
        const undoFavorite = await axios.delete(`${BACKEND_URL}/undoFave`, removeFaveData);
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
