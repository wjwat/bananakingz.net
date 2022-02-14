import $ from 'jquery';
import './css/yacck.css';
import './css/site.css';

import './modules/home/home.js';
import './modules/example/example.js';
import './modules/badexample/badexample.js';
import './modules/quotes/quotes.js';

// Highlight which page we're currently on in the navigation sidebar.
$(() => {
  $('.navigation a').on('click', e => {
    $('.navigation a').removeClass('active');
    $(e.target).addClass('active');
  });
});
