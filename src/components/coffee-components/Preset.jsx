import React, { useContext } from 'react';
import AppContext from '../../functions.jsx';

function Preset() {
  const { dispatch, keywords } = useContext(AppContext);
  const { UPDATE_DIAGRAM_MILK } = keywords;

  const coffeeArr = [
    { condMilk: true, evapMilk: false },
    { condMilk: false, evapMilk: true },
    { condMilk: false, evapMilk: false },
    { condMilk: true, evapMilk: true }];

  return (
    <>
      Select preset base here:
      <select
        onChange={(e) => {
          dispatch({
            type: UPDATE_DIAGRAM_MILK,
            payload: coffeeArr[e.target.value],
          });
        }}
        defaultValue="Presets"
      >
        <option disabled>Presets</option>
        <option value="0">Kopi</option>
        <option value="1">Kopi C</option>
        <option value="2">Kopi O</option>
        <option value="3">Kopi C</option>
      </select>
    </>

  );
}

export default Preset;
