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
    return $("#results").html(`${input1.bananas} 🍌's`);
  });
  /* eslint-disable */
  $("#submit").click(function(){
    let promise = Random.getObject();
    promise.then(function(response){
      const body = JSON.parse(response);
      let object = Object.keys(body);
      let weight = Math.round(body[object]["weight"]/0.00272);
      if (body[object].hasOwnProperty("length") === true) {
        let length = Math.round(body[object]["length"]/11.33333);
        lengthReturn(length);
      } else if (body[object].hasOwnProperty("height") === true) {
        let height = Math.round(body[object]['height']/11.33333);
        heightReturn(height);
      } else if (body[object].hasOwnProperty("circumference") === true) {
        let circumference = Math.round(body[object]['circumference']/11.33333);
        circumferenceReturn(circumference);
      } else {
        let diameter = Math.round(body[object]['diameter']/11.33333);
        diameterReturn(diameter);
      } 
      /* eslint-enable */

      function lengthReturn(length){
        if (length < 1) {
          $("#randomObject").html(`Did you know ${object} is less than 1 🍌 long and weighs less than 1 🍌!`);
        } else {
          $("#randomObject").html(`Did you know ${object} is ${length} 🍌's long and weighs as much as ${weight} 🍌's!!`);
        }
      }
      function heightReturn(height){
        if (height < 1) {
          $("#randomObject").html(`Did you know ${object} is less than 1 🍌 tall and weighs less than 1 🍌!`);
        } else {
          $("#randomObject").html(`Did you know ${object} is ${height} 🍌's tall and weighs as much as ${weight} 🍌's!!`);
        }
      }
      function circumferenceReturn(circumference){
        if (circumference < 1) {
          $("#randomObject").html(`Did you know ${object} is less than 1 🍌 around and weighs less than 1 🍌!`);
        } else {
          $("#randomObject").html(`Did you know ${object} is ${circumference} 🍌's around and weighs as much as ${weight} 🍌's!!`);
        }
      }
      function diameterReturn(diameter){
        if (diameter < 1) {
          $("#randomObject").html(`Did you know ${object} is less than 1 🍌 across and weighs less than 1 🍌!`);
        } else {
          $("#randomObject").html(`Did you know ${object} is ${diameter} 🍌's wide and weighs as much as ${weight} 🍌's!!`);
        }
      }
    });
  });
});