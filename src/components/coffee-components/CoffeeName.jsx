import React from 'react';

function CoffeeName(kopiObj) {
  const {
    coffee, milk, ice, sugar,
  } = kopiObj;

  let coffeeConcentration = '';
  if (coffee === 100) {
    coffeeConcentration = 'Di Loh';
  } else if (coffee >= 90) {
    coffeeConcentration = 'Gao';
  } else if (coffee >= 60 && coffee < 70) {
    coffeeConcentration = 'Poh';
  } else {
    coffeeConcentration = '';
  }

  let coffeeMilk = '';
  const { evapMilk, condMilk } = milk;
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
  if (ice) {
    coffeeIce = 'Peng';
  } else {
    coffeeIce = '';
  }

  let coffeeSugar = '';
  if (sugar === 'None') {
    coffeeSugar = 'Kosong';
  } else if (sugar === 'Less') {
    coffeeSugar = 'Siu Dai';
  } else if (sugar === 'Regular') {
    coffeeSugar = '';
  } else if (sugar === 'More') {
    coffeeSugar = 'Gah Dai';
  }

  const coffeeDisplay = `Kopi ${coffeeMilk} ${coffeeSugar} ${coffeeConcentration} ${coffeeIce}`;
  return (
    <div>{coffeeDisplay}</div>
  );
}

export default CoffeeName;
