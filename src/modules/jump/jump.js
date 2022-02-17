import $ from 'jquery';
import './jump.css';
require('./assets/img/character.png');
require('./assets/img/kiwi.png');

let counter = 0;

const jump = () => {
  if ($('.jump #character')[0].classList == "animate") {
    return;
  } else {
    $('.jump #character')[0].classList.add("animate");
    setTimeout(() => {
      $('.jump #character')[0].classList.remove("animate");
    } ,300);
  }
};

const checkIfDead = () => {
  let characterTop = parseInt(window.getComputedStyle($('.jump #character')[0]).getPropertyValue("top"));
  let blockLeft = parseInt(window.getComputedStyle($('.jump #block')[0]).getPropertyValue("left"));
  if (blockLeft<1 && blockLeft>-22 && characterTop>=140) {
    $(".jump #scoreSpan").text("Game over. Your final score was: " + (counter));
    return 'nope';
  } else {
    counter++;
    $(".jump #scoreSpan").text("Score: " + counter);
  }
};

$(() => {
  if ($('body').is('.jump')) {
    $('.jump #start').text('Start Game!');
    $(".jump #start").on("click", () => {
      $(".jump #start").toggle();
      $('.jump #character').toggle();
      $('.jump #block').toggle();
      $('.jump #block').css({'animation' : 'block 1s infinite linear'});
      counter = 0;
      const interval = setInterval(() => {
        let aliveCheck = checkIfDead();
        if (aliveCheck === 'nope') {
          $('.jump #character').toggle();
          $(".jump #start").toggle();
          $('.jump #start').text('Try Again!');
          $('.jump #block').toggle();
          $('.jump #block').css({'animation' : 'none'});
          clearInterval(interval);
        }
      }, 10);
    });
    $('.game').on('click', jump);
  }
});