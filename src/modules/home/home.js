import $ from 'jquery';

import displayQuote from '../quotes/quotes.js';

import '../quotes/quotes.css';
import './home.css';

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function rotateBanana() {
  let degrees = getRandomIntInclusive(0, 270);
  let height = getRandomIntInclusive(5, 50);

  document.documentElement.style.setProperty('--bottom-percent', `${height}%`);
  document.documentElement.style.setProperty('--rotated-degrees', `${degrees}deg`);
}

$(() => {
  if ($('body').is('.home')) {
    displayQuote();

    setInterval(rotateBanana, 1000);
  }
});
