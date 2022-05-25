import React, { useContext } from 'react';
import AppContext from '../../functions.jsx';

import CoffeeName from './CoffeeName.jsx';

function Combination() {
  const { appState, dispatch, keywords } = useContext(AppContext);

  const { UPDATE_DIAGRAM_ICE, UPDATE_DIAGRAM_SUGAR, UPDATE_DIAGRAM_MILK } = keywords;

  return (
    <>
      Ice
      <div className="btn-group">
        <button
          type="button"
          onClick={() => {
            dispatch({ type: UPDATE_DIAGRAM_ICE, payload: false }); }}
        >
          None

        </button>
        <button
          type="button"
          onClick={() => {
            dispatch({ type: UPDATE_DIAGRAM_ICE, payload: true }); }}
        >
          Ice
        </button>
      </div>
      Sugar
      <div className="btn-group">
        <button
          type="button"
          onClick={() => {
            dispatch({ type: UPDATE_DIAGRAM_SUGAR, payload: 'None' }); }}
        >
          None
        </button>
        <button
          type="button"
          onClick={() => {
            dispatch({ type: UPDATE_DIAGRAM_SUGAR, payload: 'Less' }); }}
        >
          Less
        </button>
        <button
          type="button"
          onClick={() => {
            dispatch({ type: UPDATE_DIAGRAM_SUGAR, payload: 'Regular' }); }}
        >
          Regular
        </button>
        <button
          type="button"
          onClick={() => {
            dispatch({ type: UPDATE_DIAGRAM_SUGAR, payload: 'More' }); }}
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
              type: UPDATE_DIAGRAM_MILK,
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
              type: UPDATE_DIAGRAM_MILK,
              payload: { ...appState.milk, evapMilk: e.target.checked },
            }); }}
        />
        {' '}
        Evaporated Milk
      </div>
      <h3>{CoffeeName(appState)}</h3>
    </>
  );
}
export default Combination;
