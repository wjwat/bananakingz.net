import $ from 'jquery';
import './pong.css';
import p5 from 'p5';

$(() => {
  if ($('body').is('.pong')) {
    const containerElement = document.getElementById('p5-container');

    const sketch = (p) => {
      let x = 10;
      let y = 100;

      p.setup = function() {
        p.createCanvas(624, 351);
      };

      p.draw = function() {
        p.background(17, 150, 0);
        p.fill(251, 255, 0);
        p.rect(x, y, 10, 50);
      };
    };

    new p5(sketch, containerElement);
  }
});