// Creates audio context
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

// Plays a note with a given frequency and duration
function playNote(frequency, duration) {
  console.log(`Trying to play frequency: ${frequency}`);

  // Creates and sets frequency of the oscillator
  const oscillator = audioContext.createOscillator();
  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);

  // Creates and sets volme of the gain to the selected volume
  const gainNode = audioContext.createGain();
  gainNode.gain.setValueAtTime(volume, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(
    0.001,
    audioContext.currentTime + duration
  );

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.start();
  setTimeout(() => oscillator.stop(), duration * 1000);
}

// Generates a random frequency within a specified range
function randomFrequency(min, max) {
  return Math.random() * (max - min) + min;
}

// Generates a random duration for each note
function randomDuration() {
  return Math.random() * 0.5 + 0.1; // Random duration between 0.1 and 0.6 seconds
}

// Equation from https://en.wikipedia.org/wiki/Piano_key_frequencies
function getFrequencyFromNumber(noteNumber) {
  return parseFloat(440 * Math.pow(2, (noteNumber - 49) / 12)).toPrecision(12);
}

// Plays a note for 1 second
function playPianoKey(elementId, noteNumber) {
  const pianoKey = document.getElementById(elementId);

  pianoKey.classList.remove("whitePianoNote");
  pianoKey.classList.add("whitePianoNoteOn");

  const frequency = getFrequencyFromNumber(noteNumber);

  playNote(frequency, 1);

  setTimeout(() => {
    pianoKey.classList.remove("whitePianoNoteOn");
    pianoKey.classList.add("whitePianoNote");
  }, 1000);
}

// Start the initialization of the controls, randomizer,
// arpeggiator, and note list
var noteList = [];
var oscList = [];

var speedElement = document.getElementById("speed");
var speedText = document.getElementById("speedText");
speedText.textContent = speedElement.value;
var speed = parseInt(speedElement.value);

var volumeElement = document.getElementById("volume");
var volumeText = document.getElementById("volumeText");
volumeText.textContent = volumeElement.value;
var volume = parseInt(volumeElement.value) ?? 0.3;

var arpeggiatorLoop = null;
var arpeggiatorRandomizer = randomizer(noteList);

speedElement.addEventListener("input", (event) => {
  speedText.value = event.target.value;
  speed = parseInt(event.target.value);
});
volumeElement.addEventListener("input", (event) => {
  volumeText.value = event.target.value;
  volume = parseFloat(event.target.value).toPrecision(3);
});

// Changes color of key and adds the note to the list
// to be played by the arpeggiator. This is run on every
// not that is clicked
function turnOnKey(elementId, noteNumber) {
  // Prevents notes from being selected if the arpeggiator has started
  if (arpeggiatorLoop == null) {
    noteList.push(noteNumber);
    noteList.sort();

    const pianoKey = document.getElementById(elementId);
    pianoKey.classList.remove("pianoNote");
    pianoKey.classList.add("pianoNoteOn");
    arpeggiatorRandomizer = randomizer(noteList);
  }
}

// Iterates over all the piano key elements and deselects them
function turnOffAllKeys() {
  noteList = [];
  oscList = [];

  for (i = 1; i < 100; i++) {
    try {
      const pianoKey = document.getElementById(`pianoKey${i}`);
      pianoKey.classList.remove("pianoNoteOn");
      pianoKey.classList.add("pianoNote");
    } catch (ex) {}
  }
}

// Selects a purely random note based on the note list
function selectRandomNoteIndex() {
  return Math.floor(Math.random() * noteList.length);
}

// Sets the state of the Start/Stop buttons and starts the loop
function playArpeggiator() {
  document.getElementById("randomStart").disabled = true;
  document.getElementById("randomStop").disabled = false;

  let idx = 0;
  speedElement.disabled = true;

  arpeggiatorLoop = setInterval(() => {
    //const randomIdx = selectRandomNoteIndex();
    const randomIdx = arpeggiatorRandomizer.getNextNumber();
    const frequency = getFrequencyFromNumber(noteList[randomIdx]);
    playNote(frequency, 1);
    idx++;
    console.log(
      `Played frequency: ${frequency} with loop id ${arpeggiatorLoop}`
    );
  }, 60000 / speed);
}

// Resets all the buttons, piano keys, and clears the arpeggiator
function stopArpeggiator() {
  document.getElementById("randomStart").disabled = false;
  document.getElementById("randomStop").disabled = true;

  speedElement.disabled = false;

  turnOffAllKeys();
  clearInterval(arpeggiatorLoop);
  arpeggiatorRandomizer.reset();

  arpeggiatorLoop = null;
}

function randomizer(numbers) {
  const probabilities = new Array(numbers.length).fill(1);

  function getNextNumber() {
    // Calculates total probability
    const totalProbability = probabilities.reduce(
      (total, val) => total + val,
      0
    );
    const randomValue = Math.random() * totalProbability;

    // Selects a number based on the random value
    let cumulativeProbability = 0;
    for (let i = 0; i < numbers.length; i++) {
      cumulativeProbability += probabilities[i];
      if (randomValue <= cumulativeProbability) {
        probabilities[i] *= 0.5;
        return i;
      }
    }
  }

  // Resets probabilities
  function reset() {
    for (let i = 0; i < probabilities.length; i++) {
      probabilities[i] = 1;
    }
  }

  return {
    getNextNumber: getNextNumber,
    reset: reset,
  };
}
