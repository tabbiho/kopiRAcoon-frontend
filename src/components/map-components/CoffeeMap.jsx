import React, { useState, useEffect } from 'react';
import { Center } from '@chakra-ui/react';
import Loader from '../Loader.jsx';

function CoffeeMap() {
  const [mapOrigin, setMapOrigin] = useState();
  const [mapError, setMapError] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setMapOrigin({ latitude, longitude });
    }, () => { setMapError(true); });
  }, []);

  return (
    <div>
      {mapOrigin && !mapError ? <iframe title="coffeeMap" height="500" width="400" style={{ border: 0, marginTop: '20px' }} loading="lazy" allowFullScreen src={`https://www.google.com/maps/embed/v1/search?q=coffee&key=AIzaSyDijFCMCWXM0WzgXWvcG1qnpRM0PiCn7kQ&zoom=15&center=${mapOrigin.latitude},${mapOrigin.longitude}`} /> : (
        <div style={{ marginTop: '50px' }}>
          <Loader />
          <Center className="login-label">Scurrying for coffee in the area...</Center>
        </div>
      )}
      {mapError
        && (<Center mt={3} alignItems="right">An error occured trying to locate you</Center>)}
    </div>
  );
}

export default CoffeeMap;
