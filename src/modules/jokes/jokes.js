import $ from 'jquery';

import './jokes.css';

const fetchJoke = async () => {
  const response = await fetch('https://wowthatsbig.net/api/randomjoke');
  return response.json();
};

const formatJoke = (joke) => {
  const headers = [
    '🍌🍌🍌 Have you heard this one before? 🍌🍌🍌',
    '🍌🧦 This one will knock your socks off!! 🧦🍌',
    '🙈🙊🙉',
    '👑🐒👑'
  ];
  const br = '<br>';
  const header = headers[Math.floor(Math.random()*headers.length)];
  const footer = '🙈😂🤣😂🐵💯';

  const formattedJoke =
    header +
    br + br +
    joke + br + br +
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
    $('.jokes #get-joke').on('click', displayJoke);
  }
});
