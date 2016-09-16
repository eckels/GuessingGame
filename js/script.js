var selectedNumber;
var i = 0;
var userGuess;

function makeGuess() {
  function restartGame() {
    i = 0;
    console.log(i + " Game Restarted");
    document.getElementById('status').innerHTML = " ";
    selectedNumber = 5111;
    userGuess = 0;
  }
  if (i < 1) {
    selectedNumber = Math.random();
    console.log(selectedNumber);
    selectedNumber = selectedNumber * 100;
    if (selectedNumber > 50) {
      selectedNumber = selectedNumber - 50;
    }
    selectedNumber = Math.round(selectedNumber);
  }
  i++;
  console.log(i);
  userGuess = document.getElementById("guess").value;
  userGuess = parseInt(userGuess);
  userGuess = Math.round(userGuess);
  console.log(userGuess);
  if (userGuess > selectedNumber) {
    document.getElementById('status').innerHTML = "your guess " + userGuess + " is higher than the selected number.";
  }
  if (userGuess < selectedNumber) {
    document.getElementById('status').innerHTML = "your guess " + userGuess + " is lower than the selected number.";
  }
  if (userGuess === selectedNumber) {
    alert("Your guess " + userGuess + " was correct and it took " + i + " guesses!");
    restartGame();
  }
  if (i > 5) {
    alert("You Lose!!!");
    restartGame();
  }
}

function restartGame() {
  i = 0;
  console.log(i + " Game Restarted");
  document.getElementById('status').innerHTML = " ";
  selectedNumber = 5111;
  userGuess = 0;
}
