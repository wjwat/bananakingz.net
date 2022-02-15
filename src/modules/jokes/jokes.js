import $ from 'jquery';

import './jokes.css';

const fetchJoke = async () => {
  const response = await fetch('https://wowthatsbig.net/api/randomjoke');
  return response.json();
};

const formatJoke = (joke) => {
  const br = '<br>';
  const header = '🍌🍌🍌 Have you heard this one before? 🍌🍌🍌';
  const footer = '😂😂🤣😂😂';

  const formattedJoke = header +
    br + br +
    joke + br +
    footer;

  return formattedJoke;
};

export default function displayJoke() {
  fetchJoke()
    .then (resp => {
      const randomJoke = resp[0];
      $('.jokes #output').html(formatJoke(randomJoke));
    });
}

$(() => {
  if ($('body').is('.jokes')) {
    displayJoke();
    //$('.quotes #get-quote').on('click', displayQuote);
  }
});

