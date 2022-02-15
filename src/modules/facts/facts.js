import './facts.css';
import $ from 'jquery';
const array = require('./facts-array.js');

const getFact = () => {
  if (array.facts.length === 0) {
    $('.facts #fact-field').text("Fact: I can't find our list of facts. That's bananas.");
  } else if (array.facts){
    const factNumber = Math.floor(Math.random() * array.facts.length);
    $('.facts #fact-field').text(array.facts[factNumber]);
  } else {
    $('.facts #fact-field').text("Yeah, I don't know what went wrong.");
  }
};

$(() => {
  if ($('body').is('.facts')) {
    getFact();
    $('.facts #get-fact').on('click', getFact);
  }
});
