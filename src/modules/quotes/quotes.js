import $ from 'jquery';
import './quotes.css';

const quoteWords = {
  'banana': ['Dijkstra', 'language', 'program', 'programmer', 'programming', 'computer', 'whatever', 'genius', 'web', 'engineer', 'student'],
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

const displayQuote = () => {
  fetchQuote()
    .then(resp => {
      const mangled = mangleQuote(resp.en);
      // const inStr = (e) => (mangled.indexOf(e) < 0);

      console.log('=================================================');
      console.log(Object.keys(quoteWords));
      console.log(mangled);

      (Object.keys(quoteWords).some(e => {
        if (mangled.indexOf(e) < 0) {
          console.log('false');
          return false;
        } else {
          console.log('true');
          return true;
        }
      }))

      // if (!(Object.keys(quoteWords).some(inStr))) {
      //   console.log(mangled);
      //   console.log('No bananas found in quote');
      //   displayQuote();
      //   return;
      // }

      // if (mangled.indexOf('banana') < 0) {
        
      // }
      $('.quotes #output').text(mangleQuote(resp.en));
      $('.quotes #author').text(resp.author.replace(/a/g, 'ana'));
    })
    .catch(err => {
      $('.quotes #output').text("Our staff of Banana Slammers are hard at work fixing the plumbing, try again later!");
      $('.quotes #author').text(err);
    });
};

$(() => {
  if ($('body').is('.quotes')) {
    displayQuote();
    $('.quotes #get-quote').on('click', displayQuote);
  }
});
