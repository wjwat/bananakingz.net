import $ from 'jquery';
import './tictacbanana.css';

let tbbCurrentPlayer = true;
let tbbBoard = Array(9).fill('');
let tbbWinningPlay = Array(3).fill('');

const tbbP1 = '🍌';
const tbbP2 = '🥝';

const tbbWinningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

function checkWinner(tbbBoard) {
// iterate over winning combo to see if someone has won
  for (const e of tbbWinningCombos) {
    let x = [tbbBoard[e[0]], tbbBoard[e[1]], tbbBoard[e[2]]];

    if (x.every(Number.isInteger) &&
        x.every((v, i , a) => v === a[0])) {
      tbbWinningPlay = [...e];
      return true;
    }
  }
  return false;
}

function markPosition(sel, player) {
  if (Number.isInteger(tbbBoard[sel.target.id])) {
    return false;
  }

  $(sel.target).text(player);

  if (player === tbbP1) {
    tbbBoard[sel.target.id] = 1;
  } else {
    tbbBoard[sel.target.id] = 0;
  }
  return true;
}

$(() => {
  function displayWinner() {
    let winner = tbbCurrentPlayer ? tbbP1 : tbbP2;
    $('.tictacbanana #bottom-display').text(winner + ' won!');
    tbbWinningPlay.forEach(e => {
      console.log(e);
      $('.tictacbanana #' + e).addClass('tbbdisplay');
    });
  }

  function displayStalemate() {
    $('.tictacbanana #bottom-display').text('Nobody wins!');
  }

  function updateCurrentMove() {
    $('.tictacbanana #bottom-display').text('Current Move: ' + (tbbCurrentPlayer ? tbbP1 : tbbP2));
  }

  function registerBoardClicks() {
    updateCurrentMove();
    // If a user clicks #reset multiple times it will register multiple click event
    // handlers which is why when you'd click on a separate space you'd get another
    // X instead of an O.
    $('.tictacbanana div.space').off('click');
    $('.tictacbanana div.space').on('click', (e) => {
      if (markPosition(e, tbbCurrentPlayer ? tbbP1 : tbbP2)) {
        if (checkWinner(tbbBoard) && tbbWinningPlay.some(Number)) { // a player has won!
          $('div.space').off();
          displayWinner();
          return;
        } else if (tbbBoard.every(Number.isInteger)) { // Stalemate
          displayStalemate();
          $(e).off();
          return;
        }
        tbbCurrentPlayer = !tbbCurrentPlayer;
        updateCurrentMove();
      }
    });
  }

  $('.tictacbanana #reset').on('click', () => {
    tbbBoard = Array(9).fill('');
    tbbWinningPlay = Array(3).fill('');
    tbbCurrentPlayer = true;

    $('.tictacbanana div.space').each((i, e) => {
      $(e).text('');
      $(e).removeClass('tbbdisplay');
    });
    $('.tictacbanana #bottom-display').text('');

    registerBoardClicks();
  });

  registerBoardClicks();
});
