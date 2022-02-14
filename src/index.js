import $ from 'jquery';
import './css/yacck.css';
import './css/site.css';

import './modules/home/home.js';
import './modules/example/example.js';
import './modules/badexample/badexample.js';

// Highlight which page we're currently on in the navigation sidebar.
$(() => {
  $('.navigation a').on('click', e => {
    $('.navigation a').removeClass('active');
    $(e.target).addClass('active');
  });
  $('.navigation a[href="home/"]').addClass('active');
});
