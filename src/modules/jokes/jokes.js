import $ from 'jquery';

import './jokes.css';

const fetchJoke = async () => {
  const response = await fetch('https://wowthatsbig.net/api/randomjoke');

  return response.json();
};
