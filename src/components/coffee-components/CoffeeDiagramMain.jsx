/* eslint-disable max-len */
import React, { useContext } from 'react';
import {
  Box, Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb, SliderMark, Heading, Grid, GridItem,
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import AppContext from '../../functions.jsx';
import typoStyles from '../Typography.module.css';
import Preset from './Preset.jsx';
import CoffeeName from './CoffeeName.jsx';

function CoffeeDiagramMain() {
  const {
    appState, dispatch, keywords, t,
  } = useContext(AppContext);
  const coffeeLayerProportion = appState.coffee;
  const waterLayerProportion = 100 - appState.coffee;

  const { UPDATE_DIAGRAM_COFFEE, SET_FAVORITE } = keywords;

  const coffeeWrapperVariant = {
    hidden: {
      y: '-100vh',
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        when: 'beforeChildren',
        duration: 0.5,
      },
    },
  };

  const layerVariant = {
    hidden: {
      x: '-10',
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      delay: 0.2,
      staggeredChildren: 0.2,
      transition: {
        delay: 1,
      },
    },
  };

  const handleCoffeeLayer = (value) => {
    dispatch({ type: SET_FAVORITE, payload: false });
    if (value >= 60 && value <= 100) {
      dispatch({ type: UPDATE_DIAGRAM_COFFEE, payload: value });
    }
  };

  console.log(appState);

  return (
    <>
      <div className={typoStyles['title-main']}> Make your own Coffee</div>
      <Preset />
      <Box className="coffee-box-container">
        <motion.div
          className="coffee-main-page-wrapper"
          variants={coffeeWrapperVariant}
          initial="hidden"
          animate="visible"
        >
          <div id="coffee-img-wrapper">
            <img
              src="../../images/logo-icon/coffee-cup-outline.png"
              alt="coffee-cup-outline"
              id="coffee-cup-outline"
            />
          </div>
          <div className="all-layers-wrapper">
            <AnimatePresence>

              {appState.ice
          && (
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              exit={{ opacity: 0, transition: 0.1 }}
              className="ice-image"
            >
              {' '}
              ICE IMAGE
            </motion.div>
          )}
              { (appState.milk.evapMilk || appState.milk.condMilk)
          && (
          <motion.div
            variants={layerVariant}
            className="milk-layer"
            exit={{ opacity: 0, transition: 0.1 }}
          />
          ) }
            </AnimatePresence>
            <motion.div
              className="water-layer"
              style={{ height: `${(waterLayerProportion / 100) * 80}%` }}
              variants={layerVariant}
            />
            <motion.div
              className="coffee-layer"
              style={{ height: `${(coffeeLayerProportion / 100) * 80}%` }}
              variants={layerVariant}
            />
          </div>
        </motion.div>
        <Heading className="sub-heading-1" textAlign="center">
          {CoffeeName(appState)}
        </Heading>
      </Box>

      <Box className="coffee-proportion-component " mt={12}>
        <Grid
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={4}
        >
          <GridItem rowSpan={1} colSpan={1}>
            {t('coffee')}
          </GridItem>
          <GridItem rowSpan={1} colSpan={4}>
            <Box mx="auto">
              <Slider step={10} aria-label="slider-ex-2" value={coffeeLayerProportion} max={100} colorScheme="pink" defaultValue={70} onChange={handleCoffeeLayer} id="proportion-slider">
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
                <SliderMark
                  value={coffeeLayerProportion}
                  textAlign="center"
                  bg="pink.400"
                  color="white"
                  mt="-10"
                  ml="-5"
                  w="12"
                >
                  {coffeeLayerProportion}
                  %
                </SliderMark>
              </Slider>
            </Box>
            <Box width={300} className="slider-label">
              <div>{t('coffee')}</div>
              <div>{t('water')}</div>
            </Box>
          </GridItem>
        </Grid>
      </Box>

    </>
  );
}

export default CoffeeDiagramMain;
