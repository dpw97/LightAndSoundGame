//globals
const cluePauseTime = 333;
const nextClueWaitTime = 1000;

let pattern = [];
let clueHoldTime = 0;
let progress = 0;
let gamePlaying = false;
let tonePlaying = false;
let volume = 0.5;
let guessCounter = 0;
let strikesCounter = 0;

function makeRandomPattern() {
  // assigns a num between 1-7 to each index of pattern
  for (let i = 0; i < 7; i++) {
    pattern[i] = Math.floor(Math.random() * Math.floor(7)) + 1;
  }
}

function startGame() {
  makeRandomPattern();
  clueHoldTime = 1000;
  progress = 0;
  strikesCounter = 0;
  gamePlaying = true;
  makeSureImgHidden();
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
}

function lightButton(btn) {
  document.getElementById("gameBtn" + btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("gameBtn" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    clueHoldTime = clueHoldTime * 0.9;
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}
function makeSureImgHidden() {
  document.getElementById("dogWin").classList.add("hidden");
  document.getElementById("winMsg").classList.add("hidden");
  document.getElementById("dogLose").classList.add("hidden");
  document.getElementById("loseMsg").classList.add("hidden");
}
function loseGame() {
  stopGame();
  document.getElementById("wrongGuesses").classList.add("hidden");
  document.getElementById("dogLose").classList.remove("hidden");
  document.getElementById("loseMsg").classList.remove("hidden");
}
function winGame() {
  stopGame();
  document.getElementById("wrongGuesses").classList.add("hidden");
  document.getElementById("dogWin").classList.remove("hidden");
  document.getElementById("winMsg").classList.remove("hidden");
}
function wrongGuess() {
  strikesCounter++;
  let guesses = 3 - strikesCounter;
  if (guesses == 1) {
    document.getElementById("wrongGuesses").innerHTML =
      "You have " + guesses + " guess left";
  } else {
    document.getElementById("wrongGuesses").innerHTML =
      "You have " + guesses + " guesses left";
  }
  if (guesses == 0) {
    document.getElementById("wrongGuesses").innerHTML = "";
  }
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }
  if (pattern[guessCounter] == btn) {
    if (guessCounter == progress) {
      if (progress == pattern.length - 1) {
        winGame();
      } else {
        progress++;
        playClueSequence();
      }
    } else {
      guessCounter++;
    }
  } else {
    wrongGuess();
  }
  if (strikesCounter == 3) {
    loseGame();
  }
}

// Major notes
const freqMap = {
  1: 220.0, //A3
  2: 246.94, //B3
  3: 261.63, //C4
  4: 293.66, //D4
  5: 329.63, //E4
  6: 349.23, //F4
  7: 392.0 //G4
};

function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone();
  }, len);
}

function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}

function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
