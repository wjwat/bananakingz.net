import $ from 'jquery';
import './quotes.css';

const quoteWords = {
  'banana': ['Dijkstra', 'recursion', 'language', 'program', 'programmer', 'programming', 'computer', 'whatever', 'genius', 'web', 'engineer', 'student'],
  'Banana': ['God'],
  'bananas': ['horses', 'programmers', 'projects', 'bugs', 'experts', 'machines'],
  'peels': ['brushes', 'lines'],
  'peel' : ['design'],
  'peeling': ['learning', 'dying'],
  'hooch': ['wine'],
  'banana brotherhood': ['community']
};

const fetchQuote = async () => {
  // You would want to use response to check for HTTP status codes and result to
  // return the JSON response
  const response = await fetch('https://programming-quotes-api.herokuapp.com/Quotes/Random');
  // const result = await response.json();

  return response.json();
};

const mangleAuthor = (author) => {
  return author.replace(/a/g, 'ana');
};

const mangleQuote = (quote) => {
  let result = quote;
  let reg = new RegExp();

  Object.entries(quoteWords).forEach(replacement => {
    replacement[1].forEach(word => {
      reg = new RegExp(`\\b${word}\\b`, 'gmi');
      result = result.replace(reg, replacement[0]);
    });
  });
  return result;
};

export default function displayQuote() {
  fetchQuote()
    .then(resp => {
      const mangled = mangleQuote(resp.en);
      const inStr = Object.keys(quoteWords).some(e => {
        return mangled.indexOf(e) > -1;
      });

      if (!inStr) {
        displayQuote();
        return;
      }

      $('.quotes #output').text(mangleQuote(resp.en));
      $('.quotes #author').text(mangleAuthor(resp.author));
    })
    .catch(err => {
      $('.quotes #output').text("Our staff of Banana Slammers are hard at work fixing the plumbing, try again later!");
      $('.quotes #author').text(err);
    });
}

$(() => {
  if ($('body').is('.quotes')) {
    displayQuote();
    $('.quotes #get-quote').on('click', displayQuote);
  }
});
