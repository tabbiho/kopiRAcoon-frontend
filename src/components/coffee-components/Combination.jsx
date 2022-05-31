import React, { useContext } from 'react';
import {
  Button, Box, Grid, GridItem,
} from '@chakra-ui/react';
import AppContext from '../../functions.jsx';
import CoffeeName from './CoffeeName.jsx';

function Combination() {
  const { appState, dispatch, keywords } = useContext(AppContext);
  const { UPDATE_DIAGRAM_ICE, UPDATE_DIAGRAM_SUGAR, UPDATE_DIAGRAM_MILK } = keywords;

  return (
    <>
      <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={1} colSpan={1} className="coffee-component-col">
          <Box>
            Ice
          </Box>
        </GridItem>
        <GridItem colSpan={2} className="coffee-component-col">
          <Button
            onClick={() => {
              dispatch({ type: UPDATE_DIAGRAM_ICE, payload: false }); }}
          >
            None
          </Button>
        </GridItem>
        <GridItem colSpan={2} className="coffee-component-col">
          <Button
            onClick={() => {
              dispatch({ type: UPDATE_DIAGRAM_ICE, payload: true }); }}
          >
            Ice
          </Button>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1} className="coffee-component-col">
          <Box>
            Sugar
          </Box>
        </GridItem>
        <GridItem colSpan={1} className="coffee-component-col">
          <Button
            onClick={() => {
              dispatch({ type: UPDATE_DIAGRAM_SUGAR, payload: 'None' }); }}
            className="sugar-btn"
          >
            <div>
              <img src="../../images/logo-icon/no-sugar.png" alt="sugar-cube" className="sugar-cube" id="no-sugar-cube" />
            </div>
          </Button>
        </GridItem>
        <GridItem colSpan={1} className="coffee-component-col">
          <Button
            onClick={() => {
              dispatch({ type: UPDATE_DIAGRAM_SUGAR, payload: 'Less' }); }}
            className="sugar-btn"
          >
            <div>
              <img src="../../images/logo-icon/sugarCube.png" alt="sugar-cube" className="sugar-cube" />
            </div>
          </Button>
        </GridItem>
        <GridItem colSpan={1} className="coffee-component-col">
          <Button
            onClick={() => {
              dispatch({ type: UPDATE_DIAGRAM_SUGAR, payload: 'Regular' }); }}
            className="sugar-btn"
          >
            <div>
              <img src="../../images/logo-icon/sugar-normal.png" alt="sugar-cube" className="sugar-cube" />
            </div>
          </Button>
        </GridItem>
        <GridItem colSpan={1} className="coffee-component-col">
          <Button
            type="button"
            onClick={() => {
              dispatch({ type: UPDATE_DIAGRAM_SUGAR, payload: 'More' }); }}
            className="sugar-btn"
          >
            <div>
              <img src="../../images/logo-icon/sugar-more.png" alt="sugar-cube" className="sugar-cube" />
            </div>
          </Button>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1} className="coffee-component-col">
          <Box>
            Milk
          </Box>
        </GridItem>
        <GridItem colSpan={2} className="coffee-component-col">
          <div>
            <input
              type="checkbox"
              defaultChecked={appState.milk.condMilk}
              onChange={(e) => {
                dispatch({
                  type: UPDATE_DIAGRAM_MILK,
                  payload: { ...appState.milk, condMilk: e.target.checked },
                }); }}
            />
            {' '}
            Condensed Milk
          </div>
        </GridItem>
        <GridItem colSpan={2} className="coffee-component-col">
          <div>
            <input
              type="checkbox"
              defaultChecked={appState.milk.evapMilk}
              onChange={(e) => {
                dispatch({
                  type: UPDATE_DIAGRAM_MILK,
                  payload: { ...appState.milk, evapMilk: e.target.checked },
                }); }}
            />
            {' '}
            Evaporated Milk
          </div>
        </GridItem>
      </Grid>

      <h3>{CoffeeName(appState)}</h3>
    </>
  );
}
export default Combination;
