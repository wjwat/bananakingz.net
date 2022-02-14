import $ from 'jquery';
import './conversion.css';
import Banana from './conversion.js';

$(() => {
  $('#conversionForm').submit(function(event) {
    event.preventDefault();
    let unit = $('#unit').val();
    console.log(unit);
    let input = $('#input').val();
    console.log(input);
    let input1 = new Banana(input);
    console.log(input1);
    if (unit === "inches"){
      input1.bananaInches();
    }
    else if (unit === "centimeters"){
      input1.bananaCentimeters();
    }
    else if (unit === "pounds"){
      input1.bananaPounds();
    }
    else if (unit === "kilograms"){
      input1.bananaKilograms();
    }
    return $("#results").html(`${input1.bananas} BANANAS`);
  })
});
