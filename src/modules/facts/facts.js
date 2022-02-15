import './facts.css';
import $ from 'jquery';
let array = require('./facts-array.js');

$(() => {
  const randomFact = (length) => {
    return Math.floor(Math.random() * length);
  }
  $('.test').text(array.facts[randomFact(array.facts.length)]);
});

