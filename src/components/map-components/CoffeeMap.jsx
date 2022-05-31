import React, { useState, useEffect } from 'react';
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
      {mapOrigin && !mapError ? <iframe title="coffeeMap" width="600" height="450" style={{ border: 0 }} loading="lazy" allowFullScreen src={`https://www.google.com/maps/embed/v1/search?q=coffee&key=AIzaSyDijFCMCWXM0WzgXWvcG1qnpRM0PiCn7kQ&zoom=13&center=${mapOrigin.latitude},${mapOrigin.longitude}`} /> : <div><Loader /></div>}
      {mapError && <div>An error occured trying to locate you</div>}
    </div>
  );
}

export default CoffeeMap;
