import React, { useContext } from 'react';
import {
  Button, Box, Grid, GridItem, Checkbox,
} from '@chakra-ui/react';
import AppContext from '../../functions.jsx';

function Combination() {
  const {
    appState, dispatch, keywords,
  } = useContext(AppContext);
  const { UPDATE_DIAGRAM_ICE, UPDATE_DIAGRAM_SUGAR, UPDATE_DIAGRAM_MILK } = keywords;

  return (
    <Box>
      <Grid
        templateRows="repeat(3, 1fr)"
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
            className="temperature-btn"
          >
            <div>
              <img src="../../images/logo-icon/hot.png" alt="sugar-cube" className="temperature-img" />
            </div>
          </Button>
        </GridItem>
        <GridItem colSpan={2} className="coffee-component-col">
          <Button
            onClick={() => {
              dispatch({ type: UPDATE_DIAGRAM_ICE, payload: true }); }}
            className="temperature-btn"
          >
            <div>
              <img src="../../images/logo-icon/ice.png" alt="sugar-cube" className="temperature-img" />
            </div>
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
            <Checkbox
              size="md"
              colorScheme="pink"
              className="checkbox-milk"
              type="checkbox"
              defaultChecked={appState.milk.condMilk}
              onChange={(e) => {
                dispatch({
                  type: UPDATE_DIAGRAM_MILK,
                  payload: { ...appState.milk, condMilk: e.target.checked },
                }); }}
            >
              Condensed Milk
            </Checkbox>
          </div>
        </GridItem>
        <GridItem colSpan={2} className="coffee-component-col">
          <div>
            <Checkbox
              size="md"
              colorScheme="pink"
              className="checkbox-milk"
              defaultChecked={appState.milk.evapMilk}
              onChange={(e) => {
                dispatch({
                  type: UPDATE_DIAGRAM_MILK,
                  payload: { ...appState.milk, evapMilk: e.target.checked },
                }); }}
            >
              Evaporated Milk
            </Checkbox>
          </div>
        </GridItem>
      </Grid>
    </Box>
  );
}
export default Combination;
