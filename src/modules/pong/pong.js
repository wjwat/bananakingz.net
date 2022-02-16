import $ from 'jquery';
import './pong.css';
import p5 from 'p5';

$(() => {
  if ($('body').is('.pong')) {
    const containerElement = document.getElementById('p5-container');

    window.addEventListener("keydown", function(e) {
      if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
      }
    }, false);

    const sketch = (p) => {
      class Paddle {
        constructor(x) {
          this.x = x;
          this.y = 175;
          this.height = 80;
          this.width = 20;
          this.isUp = false;
          this.isDown = false;
        }
    
        display() {
          p.fill(251, 255, 0);
          p.rect(this.x, this.y, this.width, this.height);
        }

        up() {
          if (this.y > 0) {
            this.y -= 2;
          }
        }

        down() {
          if (this.y < 350 - this.height) {
            this.y += 2;
          }
        }
      }

      p.setup = function() {
        p.createCanvas(625, 350);
        p.playerPaddle = new Paddle(26);
        p.aiPaddle = new Paddle(577);
      };

      p.draw = function() {
        p.background(17, 150, 0);
        p.playerPaddle.display();
        p.aiPaddle.display();
        if (p.playerPaddle.isUp) {
          p.playerPaddle.up();
        } else if (p.playerPaddle.isDown) {
          p.playerPaddle.down();
        }
      };
      
      p.keyPressed = function() {
        if (p.keyCode === p.UP_ARROW) {
          p.playerPaddle.isUp = true;
        } else if (p.keyCode === p.DOWN_ARROW) {
          p.playerPaddle.isDown = true;
        }
      };
      p.keyReleased = function() {
        if (p.keyCode === p.UP_ARROW) {
          p.playerPaddle.isUp = false;
        } else if (p.keyCode === p.DOWN_ARROW) {
          p.playerPaddle.isDown = false;
        }
      };
    };

    new p5(sketch, containerElement);
  }
});