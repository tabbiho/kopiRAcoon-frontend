/* eslint-disable max-len */
import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { motion, AnimatePresence } from 'framer-motion';
import AppContext from '../../functions.jsx';

function coffeeDiagramMain() {
  const { appState, dispatch, keywords } = useContext(AppContext);
  const coffeeLayerProportion = appState.coffee;
  const waterLayerProportion = 100 - appState.coffee;

  const handleCoffeeLayer = (e) => {
    if (e.target.value >= 60 && e.target.value <= 100) {
      dispatch({ type: keywords.UPDATE_DIAGRAM_COFFEE, payload: e.target.value });
    }
  };

  console.log(appState);

  return (
    <>
      <h1> Coffee</h1>
      <AnimatePresence>
        {appState.ice
          && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ y: 15, opacity: 1 }}
              transition={{ duration: 1 }}
              exit={{ opacity: 0, transition: 0.1 }}
              className="ice-image"
            >
              {' '}
              ICE IMAGE
            </motion.div>
          )}
      </AnimatePresence>
      <motion.div initial={{ y: -20 }} animate={{ y: 0 }} transition={{ duration: 1 }} className="coffee-wrapper">
        <div className="water-layer" style={{ height: `${waterLayerProportion}%` }}>water</div>
        <div className="coffee-layer" style={{ height: `${coffeeLayerProportion}%` }}>coffee</div>
      </motion.div>
      <div className="table-div"> </div>
      <Box width={300}>
        <Slider aria-label="Default" valueLabelDisplay="auto" onChange={handleCoffeeLayer} value={coffeeLayerProportion} />
      </Box>
    </>
  );
}

export default coffeeDiagramMain;
