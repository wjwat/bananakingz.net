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

        update() {
          if (this.isUp) {
            this.up();
          } else if (this.isDown) {
            this.down();
          }
        }
      }

      class Ball {
        constructor() {
          this.r = 10;
          this.reset();
        }

        update() {
          if (this.y < this.r || this.y > 350 - this.r) {
            this.ySpeed = -this.ySpeed;
          }
          if (this.x < this.r || this.x > 625 + this.r) {
            this.reset();
          }
          this.x += this.xSpeed;
          this.y += this.ySpeed;
        }

        reset() {
          this.x = 625 / 2;
          this.y = 350 / 2;
          this.xSpeed = p.random(3, 4);
          let isLeft = p.random(1) > .5;
          if (isLeft) {
            this.xSpeed = -this.xSpeed;
          }
          this.ySpeed = p.random(-3, 3);
        }
        
        display() {
          p.fill(131, 70, 0);
          p.ellipse(this.x, this.y, this.r * 2, this.r * 2);
        }
        
        hitPlayer(player) {
          if (this.x - this.r <= player.x + player.width && this.x > player.x) {
            if (this.isSameHeight(player)) {
              this.xSpeed = -this.xSpeed;
            }
          }
        }

        hitAi(ai) {
          if (this.x + this.r >= ai.x && this.x <= ai.x + ai.width) {
            if (this.isSameHeight(ai)) {
              this.xSpeed = -this.xSpeed;
            }
          }
        }

        isSameHeight(player) {
          return this.y >= player.y && this.y <= player.y + player.height;
        }
      }

      p.setup = function() {
        p.createCanvas(625, 350);
        p.playerPaddle = new Paddle(26);
        p.aiPaddle = new Paddle(577);
        p.ball = new Ball();
      };

      p.draw = function() {
        p.background(17, 150, 0);
        p.playerPaddle.display();
        p.aiPaddle.display();
        p.playerPaddle.update();
        p.aiPaddle.update();
        p.processAI();
        p.ball.update();
        p.ball.display();
        p.ball.hitPlayer(p.playerPaddle);
        p.ball.hitAi(p.aiPaddle);
        p.stroke(251, 255, 0);
        p.line(625/2, 0, 625/2, p.height);
      };

      p.processAI = function() {
        let middleOfPaddle = p.aiPaddle.y + p.aiPaddle.height / 2;
        if (middleOfPaddle > p.ball.y) {
          p.aiPaddle.isUp = true;
          p.aiPaddle.isDown = false;
        } else {
          p.aiPaddle.isDown = true;
          p.aiPaddle.isUp = false;
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