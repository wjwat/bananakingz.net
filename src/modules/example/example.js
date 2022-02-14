import $ from 'jquery';
import './example.css';

// We wait for the page to load, select our namedspaced h2, and change the text
// of it to something else. This is a good example.
$(() => {
  $('.example h2').html('Hello! This is a good example!');
  $('.example h3').html('Let me live');
});
