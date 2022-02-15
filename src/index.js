import $ from 'jquery';
import './css/yacck.css';
import './css/site.css';

import './modules/home/home.js';
import './modules/quotes/quotes.js';
import './modules/jokes/jokes.js';
import './modules/about/about.js';
import './modules/facts/facts.js';

// Highlight which page we're currently on in the navigation sidebar.
$(() => {
  $('.navigation a').on('click', e => {
    $('.navigation a').removeClass('active');
    $(e.target).addClass('active');
  });
});
