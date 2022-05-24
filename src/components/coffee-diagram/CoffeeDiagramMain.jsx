/* eslint-disable max-len */
import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import AppContext from '../../functions.jsx';

function coffeeDiagramMain() {
  const { appState, dispatch, keywords } = useContext(AppContext);
  const coffeeLayerProportion = appState.coffee;
  const waterLayerProportion = 100 - appState.coffee;

  // sugar - none, less, normal, more

  // milk - condensed or evaporated milk

  const handleCoffeeLayer = (e) => {
    if (e.target.value >= 60 && e.target.value <= 100) {
      dispatch({ type: keywords.UPDATE_DIAGRAM_COFFEE, payload: e.target.value });
    }
  };

  return (
    <>
      <h1> Coffee</h1>
      <div className="coffee-wrapper">
        {/* <div className="milk-layer" style={{ height: `${coffeeProportions.milkLayerProportion}%` }}> milk </div> */}
        <div className="water-layer" style={{ height: `${waterLayerProportion}%` }}>water</div>
        <div className="coffee-layer" style={{ height: `${coffeeLayerProportion}%` }}>coffee</div>
      </div>
      <Box width={300}>
        <Slider aria-label="Default" valueLabelDisplay="auto" onChange={handleCoffeeLayer} value={coffeeLayerProportion} />
      </Box>
    </>
  );
}

export default coffeeDiagramMain;
