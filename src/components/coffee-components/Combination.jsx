import React, { useContext } from 'react';
import {
  Button, Box, Grid, GridItem, Checkbox, VStack,
  Radio, RadioGroup,
} from '@chakra-ui/react';
import AppContext from '../../functions.jsx';

function Combination() {
  const {
    appState, dispatch, keywords, t,
  } = useContext(AppContext);
  const { UPDATE_DIAGRAM_ICE, UPDATE_DIAGRAM_SUGAR, UPDATE_DIAGRAM_MILK } = keywords;
  const [value, setValue] = React.useState('1');

  return (
    <Box>
      <Grid
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(8, 1fr)"
        gap={2}
      >
        <GridItem rowSpan={1} colSpan={2} className="coffee-component-col">
          <Box className="component-coffee-title title-coffee">
            {t('temperature')}
          </Box>
        </GridItem>
        <GridItem rowSpan={1} colSpan={6} className="coffee-component-col temperature-component-row">
          <VStack>
            <Button
              onClick={() => {
                dispatch({ type: UPDATE_DIAGRAM_ICE, payload: false }); }}
              className="temperature-btn  hot-img"
            >
              <div>
                <img src="../../images/logo-icon/hot.png" alt="sugar-cube" className="temperature-img" />
              </div>
            </Button>
            <div>
              {t('hot')}
            </div>
          </VStack>
          <VStack>
            <Button
              onClick={() => {
                dispatch({ type: UPDATE_DIAGRAM_ICE, payload: true }); }}
              className="temperature-btn cold-img"
            >
              <div>
                <img src="../../images/logo-icon/ice.png" alt="sugar-cube" className="temperature-img " />
              </div>
            </Button>
            <div>
              {t('cold')}
            </div>
          </VStack>
        </GridItem>
        {/* SUGAR COMPONENT */}
        <GridItem rowSpan={1} colSpan={2} className="coffee-component-col title-coffee">
          <Box className="component-coffee-title ">
            {t('sugar')}
          </Box>
        </GridItem>

        <GridItem rowSpan={1} colSpan={6} className="coffee-component-col radio-box-component">
          <RadioGroup
            onChange={setValue}
            value={value}
            id="radio-box"
          >
            <VStack>
              <Radio
                id="radio-box-sugar-no"
                onChange={() => {
                  dispatch({ type: UPDATE_DIAGRAM_SUGAR, payload: 'None' }); }}
                className="sugar-btn"
                value="None"
              >
                <img src="../../images/logo-icon/no-sugar.png" alt="sugar-cube" className="sugar-cube" id="no-sugar-cube" />
              </Radio>
              <label htmlFor="radio-box-sugar-no">
                {t('none')}
              </label>
            </VStack>
            <VStack>
              <Radio
                onChange={() => {
                  dispatch({ type: UPDATE_DIAGRAM_SUGAR, payload: 'Less' }); }}
                className="sugar-btn"
                id="radio-box-sugar-less"
                value="Less"
              >
                <img src="../../images/logo-icon/sugarCube.png" alt="sugar-cube" className="sugar-cube" />
              </Radio>
              <label htmlFor="radio-box-sugar-less">
                {t('less')}
              </label>
            </VStack>
            <VStack>
              <Radio
                id="radio-box-sugar-regular"
                onChange={() => {
                  dispatch({ type: UPDATE_DIAGRAM_SUGAR, payload: 'Regular' }); }}
                className="sugar-btn"
                value="Regular"
              >
                <img src="../../images/logo-icon/sugar-normal.png" alt="sugar-cube" className="sugar-cube" />
              </Radio>
              <label htmlFor="radio-box-sugar-less">
                {t('regular')}
              </label>
            </VStack>
            <VStack>
              <Radio
                id="radio-box-sugar-more"
                type="button"
                onChange={() => {
                  dispatch({ type: UPDATE_DIAGRAM_SUGAR, payload: 'More' }); }}
                className="sugar-btn"
                value="More"
              >
                <img src="../../images/logo-icon/sugar-more.png" alt="sugar-cube" className="sugar-cube" />
              </Radio>
              <label htmlFor="radio-box-sugar-more">
                {t('more')}
              </label>
            </VStack>
          </RadioGroup>
        </GridItem>

        <GridItem rowSpan={1} colSpan={2} className="coffee-component-col title-coffee">
          <Box className="component-coffee-title">
            {t('milk')}
          </Box>
        </GridItem>
        <GridItem rowSpan={1} colSpan={6} className="coffee-component-col">
          <Checkbox
            size="md"
            colorScheme="pink"
            className="checkbox-milk"
            type="checkbox"
            isChecked={appState.milk.condMilk}
            onChange={(e) => {
              dispatch({
                type: UPDATE_DIAGRAM_MILK,
                payload: { ...appState.milk, condMilk: e.target.checked },
              }); }}
          >
            {t('condMilk')}
          </Checkbox>
          <Checkbox
            size="md"
            colorScheme="pink"
            className="checkbox-milk"
            isChecked={appState.milk.evapMilk}
            onChange={(e) => {
              dispatch({
                type: UPDATE_DIAGRAM_MILK,
                payload: { ...appState.milk, evapMilk: e.target.checked },
              }); }}
          >
            {t('evapMilk')}
          </Checkbox>
        </GridItem>
      </Grid>
    </Box>
  );
}
export default Combination;
