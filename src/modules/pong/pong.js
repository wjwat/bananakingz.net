import $ from 'jquery';
import './pong.css';
import p5 from 'p5';

$(() => {
  if ($('body').is('.pong')) {
  const containerElement = document.getElementById('p5-container');

  const sketch = (p) => {
    let x = 100;
    let y = 100;

    p.setup = function() {
      p.createCanvas(624, 351);
    };

    p.draw = function() {
      p.background(0);
      p.fill(255);
      p.rect(x, y, 50, 50);
    };
  };

  new p5(sketch, containerElement);
  }
});