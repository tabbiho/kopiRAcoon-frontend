import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3004';

const findFavorites = () => axios.get(`${BACKEND_URL}/allFavorites`)
  .then((result) => result.data.allCoffeeData);

const findFavoritesNotes = () => axios.get(`${BACKEND_URL}/allFavoritesNotes`)
  .then((result) => result.data.findNotes);

const wrapPromise = (promise) => {
  let status = 'pending';
  let result = '';
  const suspender = promise.then((r) => {
    status = 'success';
    result = r;
  }, (error) => {
    status = 'error';
    result = error;
  });
  return {
    read() {
      if (status === 'pending') {
        throw suspender;
      }
      else if (status === 'error') {
        throw result;
      }
      return result;
    },
  };
};

// eslint-disable-next-line import/prefer-default-export
export const createResource = () => ({
  favorites: wrapPromise(findFavorites()),
  notes: wrapPromise(findFavoritesNotes()),
});
