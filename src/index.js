import $ from 'jquery';
import './css/yacck.css';
import './css/site.css';

import './modules/about/about.js';
import './modules/home/home.js';
import './modules/quotes/quotes.js';

// Highlight which page we're currently on in the navigation sidebar.
$(() => {
  $('.navigation a').on('click', e => {
    $('.navigation a').removeClass('active');
    $(e.target).addClass('active');
  });
});
