/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import './App.css';

function App() {
  const initialCoffeeState = {
    coffee: 'Kopi',
    milk: 'O',
    sugar: 'None',
    concentration: 'Poh',
    ice: 'None',
  };
  const [coffee, setCoffee] = useState(initialCoffeeState);
  const [coffeePercent, setCoffeePercent] = useState(60);
  const [milk, setMilk] = useState({ evapMilk: false, condMilk: false });

  const coffeeDisplay = Object.values(coffee)
    .filter((x) => x !== 'None')
    .join(' ');

  const updateCoffeeConcentration = (concentration) => {
    let x;
    switch (Number(concentration)) {
      case 60:
        x = 'Poh';
        break;
      case 70:
      case 80:
        x = 'None';
        break;
      case 90:
        x = 'Gao';
        break;
      case 100:
        x = 'Di Loh';
        break;
      default:
        x = 'None';
    }
    setCoffee((prev) => ({ ...prev, concentration: x }));
  };

  const updateMilk = (update) => {
    const currentMilk = { ...milk, ...update };
    console.log(currentMilk);
    if (currentMilk.evapMilk && currentMilk.condMilk) {
      setCoffee((prev) => ({ ...prev, milk: 'Gah C' }));
    } else if (!currentMilk.evapMilk && !currentMilk.condMilk) {
      setCoffee((prev) => ({ ...prev, milk: 'O' }));
    } else if (currentMilk.evapMilk) {
      setCoffee((prev) => ({ ...prev, milk: 'C' }));
    } else if (currentMilk.condMilk) {
      setCoffee((prev) => ({ ...prev, milk: 'None' }));
    }
  };

  return (
    <div>
      Ice
      <div className="btn-group">
        <button
          type="button"
          onClick={() => setCoffee((prev) => ({ ...prev, ice: 'None' }))}
        >
          None

        </button>
        <button
          type="button"
          onClick={() => setCoffee((prev) => ({ ...prev, ice: 'Peng' }))}
        >
          Ice
        </button>
      </div>
      Sugar
      <div className="btn-group">
        <button
          type="button"
          onClick={() => setCoffee((prev) => ({ ...prev, sugar: 'Kosong' }))}
        >
          None
        </button>
        <button
          type="button"
          onClick={() => setCoffee((prev) => ({ ...prev, sugar: 'Siu Dai' }))}
        >
          Less
        </button>
        <button
          type="button"
          onClick={() => setCoffee((prev) => ({ ...prev, sugar: 'None' }))}
        >
          Regular
        </button>
        <button
          type="button"
          onClick={() => setCoffee((prev) => ({ ...prev, sugar: 'Gah Dai' }))}
        >
          More
        </button>
      </div>
      <div className="slidecontainer">
        Coffee
        {' '}
        {coffeePercent}
        %
        <input
          type="range"
          min="60"
          max="100"
          step="10"
          onChange={(e) => {
            setCoffeePercent(e.target.value);
            updateCoffeeConcentration(e.target.value);
          }}
        />
      </div>
      <div className="slidecontainer">
        Water
        {' '}
        {100 - coffeePercent}
        %
        <input type="range" min="0" max="40" step="10" value={100 - coffeePercent} />
      </div>
      <div>
        <input
          type="checkbox"
          onChange={(e) => {
            setMilk((prev) => ({ ...prev, condMilk: e.target.checked }));
            updateMilk({ condMilk: e.target.checked }); }}
        />
        {' '}
        Condensed Milk
      </div>
      <div>
        <input
          type="checkbox"
          onChange={(e) => {
            setMilk((prev) => ({ ...prev, evapMilk: e.target.checked }));
            updateMilk({ evapMilk: e.target.checked }); }}
        />
        {' '}
        Evaporated Milk
      </div>
      <h3>{coffeeDisplay}</h3>
    </div>
  );
}

export default App;
