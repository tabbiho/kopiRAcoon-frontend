import React, { useContext } from 'react';
import AppContext from '../functions.jsx';

function Combination() {
  const { appState, dispatch, keywords } = useContext(AppContext);

  let coffeeConcentration = '';
  if (appState.coffee === 100) {
    coffeeConcentration = 'Di Loh';
  } else if (appState.coffee >= 90) {
    coffeeConcentration = 'Gao';
  } else if (appState.coffee >= 60 && appState.coffee < 70) {
    coffeeConcentration = 'Poh';
  } else {
    coffeeConcentration = '';
  }

  let coffeeMilk = '';
  const { evapMilk, condMilk } = appState.milk;
  if (evapMilk && condMilk) {
    coffeeMilk = 'Gah C';
  } else if (!evapMilk && !condMilk) {
    coffeeMilk = 'O';
  } else if (evapMilk) {
    coffeeMilk = 'C';
  } else if (condMilk) {
    coffeeMilk = '';
  }

  let coffeeIce = '';
  if (appState.ice) {
    coffeeIce = 'Peng';
  } else {
    coffeeIce = '';
  }

  let coffeeSugar = '';
  if (appState.sugar === 'None') {
    coffeeSugar = 'Kosong';
  } else if (appState.sugar === 'Less') {
    coffeeSugar = 'Siu Dai';
  } else if (appState.sugar === 'Regular') {
    coffeeSugar = '';
  } else if (appState.sugar === 'More') {
    coffeeSugar = 'Gah Dai';
  }

  const coffeeDisplay = `Kopi ${coffeeMilk} ${coffeeSugar} ${coffeeConcentration} ${coffeeIce}`;

  return (
    <>
      Ice
      <div className="btn-group">
        <button
          type="button"
          onClick={() => {
            dispatch({ type: keywords.UPDATE_DIAGRAM_ICE, payload: false }); }}
        >
          None

        </button>
        <button
          type="button"
          onClick={() => {
            dispatch({ type: keywords.UPDATE_DIAGRAM_ICE, payload: true }); }}
        >
          Ice
        </button>
      </div>
      Sugar
      <div className="btn-group">
        <button
          type="button"
          onClick={() => {
            dispatch({ type: keywords.UPDATE_DIAGRAM_SUGAR, payload: 'None' }); }}
        >
          None
        </button>
        <button
          type="button"
          onClick={() => {
            dispatch({ type: keywords.UPDATE_DIAGRAM_SUGAR, payload: 'Less' }); }}
        >
          Less
        </button>
        <button
          type="button"
          onClick={() => {
            dispatch({ type: keywords.UPDATE_DIAGRAM_SUGAR, payload: 'Regular' }); }}
        >
          Regular
        </button>
        <button
          type="button"
          onClick={() => {
            dispatch({ type: keywords.UPDATE_DIAGRAM_SUGAR, payload: 'More' }); }}
        >
          More
        </button>
      </div>
      <div>
        <input
          type="checkbox"
          defaultChecked={appState.milk.condMilk}
          onChange={(e) => {
            dispatch({
              type: keywords.UPDATE_DIAGRAM_MILK,
              payload: { ...appState.milk, condMilk: e.target.checked },
            }); }}
        />
        {' '}
        Condensed Milk
      </div>
      <div>
        <input
          type="checkbox"
          defaultChecked={appState.milk.evapMilk}
          onChange={(e) => {
            dispatch({
              type: keywords.UPDATE_DIAGRAM_MILK,
              payload: { ...appState.milk, evapMilk: e.target.checked },
            }); }}
        />
        {' '}
        Evaporated Milk
      </div>
      <h3>{coffeeDisplay}</h3>
    </>
  );
}
export default Combination;
