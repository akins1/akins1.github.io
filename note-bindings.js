function getNoteLetterFromNumber(noteNumber) {
  const num = (noteNumber - 1) % 12;
  const letters = [
    "A",
    "Bb",
    "B",
    "C",
    "Db",
    "D",
    "Eb",
    "E",
    "F",
    "F#",
    "G",
    "Ab",
  ];
  return letters[num];
}

function isBlackKey(noteNumber) {
  return getNoteLetterFromNumber(noteNumber).length == 2;
}
