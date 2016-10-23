(function() { 

var deviceDash;
var devicePlayer;

window.addEventListener('load', () => {
  deviceDash = document.querySelector('.deviceDash');
  devicePlayer = document.querySelector('.devicePlayer');

  deviceDash.addEventListener('click', () => window.location  = '/dash');
  devicePlayer.addEventListener('click', () => window.location = '/player');
});

}());
