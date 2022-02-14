import $ from 'jquery';
import './badexample.css';

// This is a bad example because we have to wait for our page to load to then
// modify the DOM, and we've changing all H3s, and not the ones we want.
$('h3').html('I should have waited....');

// This will change all H2s after our page has loaded.
$(() => {
  $('h2').html('HAHAHA going to change all H2s');
});
