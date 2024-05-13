// script.js
let startTime;
let updatedTime;
let difference;
let tInterval;
let running = 0;
let lapNumber = 0;

function startTimer(){
  if(!running){
    startTime = new Date().getTime();
    tInterval = setInterval(getShowTime, 1);
    running = 1;
    document.getElementById('startStop').innerHTML = 'Stop';
  } else {
    clearInterval(tInterval);
    running = 0;
    document.getElementById('startStop').innerHTML = 'Start';
  }
}

function getShowTime(){
  updatedTime = new Date().getTime();
  difference = updatedTime - startTime;
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);
  let milliseconds = Math.floor((difference % 1000) / 10);
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;
  milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;
  document.getElementById('display').innerHTML = minutes + ':' + seconds + ':' + milliseconds;
}

function lapTimer(){
  if(running){
    var li = document.createElement('li');
    li.innerHTML = 'Lap ' + (++lapNumber) + ': ' + document.getElementById('display').innerText;
    document.getElementById('laps').appendChild(li);
  }
}

function resetTimer(){
  clearInterval(tInterval);
  running = 0;
  lapNumber = 0;
  startTime = new Date().getTime(); // Reset the start time
  document.getElementById('display').innerHTML = '00:00:00';
  document.getElementById('laps').innerHTML = '';
  document.getElementById('startStop').innerHTML = 'Start';
}

document.getElementById('startStop').addEventListener('click', startTimer);
document.getElementById('lap').addEventListener('click', lapTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
