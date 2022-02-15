import $ from 'jquery';
import './css/yacck.css';
import './css/site.css';
import './modules/home/home.js';
import './modules/quotes/quotes.js';
import './modules/jokes/jokes.js';
import './modules/about/about.js';
import './modules/conversion/UI.js';
import './modules/facts/facts.js';
import './modules/pong/pongUI.js';

require('./assets/img/3d-ban.gif');
require('./assets/img/vert-spin.gif');
require('./assets/img/3d-bun.gif');
require('./assets/img/3d-rev-bun.gif');

// Highlight which page we're currently on in the navigation sidebar.
$(() => {
  $('.navigation a').on('click', e => {
    $('.navigation a').removeClass('active');
    $(e.target).addClass('active');
  });
});
