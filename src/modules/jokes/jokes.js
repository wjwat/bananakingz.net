import $ from 'jquery';

import './jokes.css';

const fetchJoke = async () => {
  const response = await fetch('https://wowthatsbig.net/api/randomjoke');
  return response.json();
};

export default function displayJoke() {
  fetchJoke()
    .then (resp => {
      const randomJoke = resp[0];
      $('.jokes #output').text('🤣😂\n' + randomJoke + '\n🤣😂');
    });
}

$(() => {
  if ($('body').is('.jokes')) {
    displayJoke();
    //$('.quotes #get-quote').on('click', displayQuote);
  }
});

