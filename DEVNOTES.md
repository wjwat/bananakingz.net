# Adding a module

- Add name of module in navigation sidebar in `./index.html`
- Add new HtmlWebpackPlugin to `./webpack.config.js`
- Add import of module .js to `src/index.js`

# Be specific with your selectors

$('form').on('submit', doSomething) // Bad

$('.mymodule form').on('submit', doSomething) // Good

# Waiting until page load to interact with page

`$(() => {})`

is the same as

`$(document).ready(() => {})`
