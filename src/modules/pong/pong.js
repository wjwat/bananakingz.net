import $ from 'jquery';
import './pong.css';
import p5 from 'p5';
import Paddle from './pongPaddle';

$(() => {
  if ($('body').is('.pong')) {
    const containerElement = document.getElementById('p5-container');
    let height = 351;

    const sketch = (p) => {
      class Paddle {
        constructor(x) {
          this.x = x;
          this.y = height / 2;
          this.height = 80;
          this.width = 20;
        }
    
        display() {
          p.fill(251, 255, 0);
          p.rect(this.x, this.y, this.width, this.height);
        }
      }

      p.setup = function() {
        p.createCanvas(624, 351);
        p.playerPaddle = new Paddle(26);
      };

      p.draw = function() {
        p.background(17, 150, 0);
        p.playerPaddle.display();
      };
    };

    new p5(sketch, containerElement);
  }
});