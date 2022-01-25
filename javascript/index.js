const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
    chronometer.printMinutes()
    chronometer.printSeconds()
}

function printMinutes() {
  let getMin = chronometer.currentTime;
  minDecElement.innerHTML = getMin ;
  minUniElement.innerHTML = getMin;
} 

function printSeconds() {
  let getSec = chronometer.currentTime;
  secDecElement.innerHTML = getSec ;
  secUniElement.innerHTML = getSec;
 
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
  chronometer.start()
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.innerHTML === "START") {
    btnLeftElement.innerHTML = "STOP";
    btnLeftElement.classList.toggle("start");
    btnLeftElement.classList.toggle("stop");
    btnRightElement.innerHTML = "SPLIT"
    btnRightElement.classList.toggle("reset");
    btnRightElement.classList.toggle("split");
    chronometer.start();
    console.log (chronometer)

  } else if (btnLeftElement.innerHTML === "STOP") {
    btnLeftElement.innerHTML = "START";
    btnLeftElement.classList.toggle("stop");
    btnLeftElement.classList.toggle("start");
    btnRightElement.innerHTML = "RESET"
    btnRightElement.classList.toggle("split");
    btnRightElement.classList.toggle("reset");
    chronometer.stop();
    console.log (chronometer)
  };
  
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.innerHTML === "RESET") {
    chronometer.reset();
    console.log (chronometer)

  } else if ( btnRightElement.innerHTML === "SPLIT") {
    chronometer.split();
    console.log (chronometer)

  }
});
