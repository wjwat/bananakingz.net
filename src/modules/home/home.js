import $ from 'jquery';

import displayQuote from '../quotes/quotes.js';

import '../quotes/quotes.css';
import './home.css';

$(() => {
  if ($('body').is('.home')) {
    displayQuote();
  }
});
