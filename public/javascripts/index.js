var socket = io();
var input;
var button;
var playerList;

function submitName() {
  socket.emit('change name', input.value);
}

function addOrUpdateName(info) {
  var playerEntry = playerList.querySelector('li.' + info.playerId);
  if (!playerEntry) {
    playerEntry = document.createElement('li');
    playerEntry.classList.add(info.playerId);
    playerList.appendChild(playerEntry);
  }

  playerEntry.innerHTML = info.name;
}

window.addEventListener('load', () => { 
  input = document.querySelector('input.name');
  button = document.querySelector('button.submit');
  playerList = document.querySelector('ul.players');

  button.onclick = submitName;
  socket.on('name change', addOrUpdateName);
});
