import React, { useState, useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function coffeeDiagramMain() {
// what do i need?
  // first part : default state --> to show empty cup with nothing

  // default state: empty cup with ice and foam at the side

  // eslint-disable-next-line max-len
  // how to configure the empty cup with the different layers? - different layers consist of water, sugar, coffee, milk

  // things to do:

  // 1. show the different layers -done

  // 2. set states to the different layers (in terms of percentage, set a fake data first) -done

  // 3. translate the percentage to css -done

  // 4. add ice/foam last

  // get the layers of the coffee first, then i add the image of the cup at the last

  // KIV - sugar

  // initialise initial coffee proportion; sugar dont add first(KIV sugar)
  const initialCoffeeState = {
    milkLayerProportion: 0,
    coffeeLayerProportion: 0,
    waterLayerProportion: 0,
    sugarPropotion: 0,
  };

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
