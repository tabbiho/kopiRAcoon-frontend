import React, { useState, useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function coffeeDiagramMain() {
  const initialCoffeeState = {
    coffeeLayerProportion: 0,
    waterLayerProportion: 0,
  };

  // sugar - none, less, normal, more

  // milk - condensed or evaporated milk

  const [coffeeProportions, setProportion] = useState(initialCoffeeState);

  const handleMilkLayer = (e) => {
    const prevState = { ...coffeeProportions };
    prevState.milkLayerProportion = e.target.value;
    setProportion(prevState);
  };

  return (
    <>
      <h1> Coffee</h1>
      <div className="coffee-wrapper">
        <div className="milk-layer" style={{ height: `${coffeeProportions.milkLayerProportion}%` }}>milk</div>
        <div className="coffee-layer" style={{ height: `${coffeeProportions.coffeeLayerProportion}%` }}>coffee</div>
        <div className="water-layer" style={{ height: `${coffeeProportions.waterLayerProportion}%` }}>water</div>
      </div>
      {/* for exmaple to show only --> need to remove this */}
      <Box width={300}>
        <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" onChange={handleMilkLayer} value={coffeeProportions.milkLayerProportion} />
      </Box>
    </>
  );
}

export default coffeeDiagramMain;
