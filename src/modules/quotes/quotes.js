import $ from 'jquery';
import './quotes.css';

async function fetchQuote() {
  const response = await fetch('https://programming-quotes-api.herokuapp.com/Quotes/Random');
  // const result = await response.json();

  return response.json();
  // return fetch(`https://programming-quotes-api.herokuapp.com/Quotes/Random`)
  //   .then(function(res) {
  //     if (!res) {
  //       throw Error (res.statusText);
  //     }
  //     return res.json();
  //   })
  //   .catch(function(error) {
  //     return error;
  //   });
} 

// transform quote


$(() => {
  fetchQuote()
    .then(resp => {
      console.log(resp);
      $('.quotes #output').text(resp.en + ' -- ' + resp.author);
    });
});
