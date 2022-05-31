import React, { useContext } from 'react';
import AppContext from '../../functions.jsx';

import CoffeeName from './CoffeeName.jsx';

function Combination() {
  const {
    appState, dispatch, keywords, t,
  } = useContext(AppContext);
  const { UPDATE_DIAGRAM_ICE, UPDATE_DIAGRAM_SUGAR, UPDATE_DIAGRAM_MILK } = keywords;

  return (
    <>
      {t('ice')}
      <div className="btn-group">
        <button
          type="button"
          onClick={() => {
            dispatch({ type: UPDATE_DIAGRAM_ICE, payload: false }); }}
        >
          {t('none')}
        </button>
        <button
          type="button"
          onClick={() => {
            dispatch({ type: UPDATE_DIAGRAM_ICE, payload: true }); }}
        >
          {t('ice')}
        </button>
      </div>
      {t('sugar')}
      <div className="btn-group">
        <button
          type="button"
          onClick={() => {
            dispatch({ type: UPDATE_DIAGRAM_SUGAR, payload: 'None' }); }}
        >
          {t('none')}
        </button>
        <button
          type="button"
          onClick={() => {
            dispatch({ type: UPDATE_DIAGRAM_SUGAR, payload: 'Less' }); }}
        >
          {t('less')}
        </button>
        <button
          type="button"
          onClick={() => {
            dispatch({ type: UPDATE_DIAGRAM_SUGAR, payload: 'Regular' }); }}
        >
          {t('regular')}
        </button>
        <button
          type="button"
          onClick={() => {
            dispatch({ type: UPDATE_DIAGRAM_SUGAR, payload: 'More' }); }}
        >
          {t('more')}
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
        {t('condMilk')}
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
        {t('evapMilk')}
      </div>
      <h3>{CoffeeName(appState)}</h3>
    </>
  );
}
export default Combination;
