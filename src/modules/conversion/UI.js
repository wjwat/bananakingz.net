import $ from 'jquery';
import './conversion.css';
import Banana from './conversion.js';
import Random from './APIconversion.js';

$(() => {
  $('#conversionForm').submit(function(event) {
    event.preventDefault();
    let unit = $('#unit').val();
    let input = $('#input').val();
    let input1 = new Banana(input);
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

  $("#submit").click(function(){
    let promise = Random.getObject();
    promise.then(function(response){
      const body = JSON.parse(response);
      console.log(Object.keys(body)[0]);
      let object = Object.keys(body);
      let weight = body[object]["weight"]/0.00272;
      if (body[object].hasOwnProperty("length") === true) {
        let length = body[object]["length"]/11.33333;
        $("#randomObject").html(`Did you know ${object} is ${length} 🍌's long and weighs as much as ${weight} 🍌's!!`);
      } else if (body[object].hasOwnProperty("height") === true) {
        let height = body[object]['height']/11.33333;
        $("#randomObject").html(`Did you know ${object} is ${height} 🍌's tall and weighs as much as ${weight} 🍌's!!`);
      } else if (body[object].hasOwnProperty("circumference") === true) {
        let circumference = body[object]['circumference']/11.33333;
        $("#randomObject").html(`Did you know ${object} is ${circumference} 🍌's around and weighs as much as ${weight} 🍌's!!`);
      } else {
        let diameter = body[object]['diameter']/11.33333;
        $("#randomObject").html(`Did you know ${object} is ${diameter} 🍌's wide and weighs as much as ${weight} 🍌's!!`);
      }
    });
  });
});