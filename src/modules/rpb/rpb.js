import $ from 'jquery';
import './rpb.css';

const rpbPieces = ['rock', 'paper', 'banana'];
const rpbDisplay = ['🥥', '🍃', '🍌'];
const rpbWins = ["0:2", "1:0", "2:1"];
let rpbPlayerSelection = '';
let seconds_left = 3;
var userSels = '';

const rpbHandleKeyboard = (e) => {
  if (e.keyCode === 49) {$('#rock').trigger('click');}
  if (e.keyCode === 50) {$('#paper').trigger('click');}
  if (e.keyCode === 51) {$('#banana').trigger('click');}
};

const rpbSetPlayerSelection = (e) => {
  if (rpbPlayerSelection) {
    $('#' + rpbPlayerSelection).removeClass('selection');
  }
  $(e.target).addClass('selection');
  $('#player').html(rpbDisplay[rpbPieces.indexOf(e.target.id)]);
  rpbPlayerSelection = e.target.id;
};

const rpbResetGame = () => {
  userSels.off('click', rpbSetPlayerSelection);
  $(document).off('keyup', rpbHandleKeyboard);
  if (rpbPlayerSelection) {
    $('#' + rpbPlayerSelection).removeClass('selection');
  }
  $('#timer').html('3');
  $('#computer').html('👿');
  $('#player').html('🐵');
  $('#output').html('');
  $('#output').hide();
  rpbPlayerSelection = '';
  seconds_left = 3;
  console.log('reset');
};

const rpbStartGame = () => {
  rpbResetGame();
  $('#start').off('click', rpbStartGame);
  userSels.on('click', rpbSetPlayerSelection);
  $(document).on('keyup', rpbHandleKeyboard);
  let rpbComputerSelection = Math.floor(Math.random() * 3);

  const interval = setInterval(() => {
    if (seconds_left <= 0)
    {
      clearInterval(interval);
      userSels.off('click', rpbSetPlayerSelection);
      $('#timer').html('0');
      $('#computer').html(rpbDisplay[rpbComputerSelection]);
      rpbCheckWinner(rpbPieces.indexOf(rpbPlayerSelection), rpbComputerSelection);
      rpbAttachHandlers();
      return;
    }
    $('#timer').html(--seconds_left);
    $('#computer').html(rpbDisplay[Math.floor(Math.random() * 3)]);
  }, 1000);
};

const rpbCheckWinner = (player, computer) => {
  const output = $('#output');

  if (player === -1) {
    output.html('Player forfeit!');
  } else if (player === computer) {
    output.html('TIE!');
  } else if (rpbWins.indexOf(`${player}:${computer}`) > -1) {
    output.html('Player Won!');
  } else {
    output.html('Computer Won!');
  }
  output.show();
};

const rpbAttachHandlers = () => {
  $('#start').on('click', rpbStartGame);
};

$(() => {
  if ($('body').is('.rpb')) {
    userSels = $('.rpb #rock, .rpb #paper, .rpb #banana');
    rpbAttachHandlers();
  }
});
