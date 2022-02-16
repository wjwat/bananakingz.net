import $ from 'jquery';
import './pong.css';
import p5 from 'p5';

$(() => {
  if ($('body').is('.pong')) {
    const containerElement = document.getElementById('p5-container');

      setup = function() {
        createCanvas(624, 351);
        background(17, 150, 0);
      };

      class Paddle {
        constructor(x) {
          this.x = x;
          this.y = height / 2;
          this.height = 80;
          this.width = 20;
        }
          display() {
            fill(251, 255, 0);
            rect(this.x, this.y, this.width, this.height);
          };
      }
    };

    new p5(sketch, containerElement);
  });