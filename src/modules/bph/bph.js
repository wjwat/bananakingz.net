import $ from 'jquery';
import './bph.css';

function speedConvert(speed){
  if (speed < 0) {
    return 'You were time travelling! BACKWARDS THROUGH TIME!';
  } else if ((!isNaN(speed)) && (speed < 1000)) {
    return 'You were going ' + (speed * 9051.42).toFixed(1) + ' bananas per hour';
  } else if ((!isNaN(speed)) && (speed > 1000)) {
    return 'You were going too fast! Try entering a slower speed';
  } else {
    return "Our speedometer broke trying to calculate your request. Check your input and try again";
  }
}

$(() => {
  if ($('body').is('.bph')) {
    $('#how-fast').submit(function(event) {
      event.preventDefault();
      let speed = parseInt($('#speed').val());
      $("#output-text").show();
      $('#converted-speed').text(speedConvert(speed));
    });
  }
});