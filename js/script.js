var selectedNumber;
var i = 0;
var userGuess;
var userWins = 0;
var userGames = 0;

function makeGuess() {
  function restartGame() {
    i = 0;
    console.log(i + " Game Restarted2");
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
    userGames++;
    userWins++;
    document.getElementById('wins').innerHTML = "You have won " + userWins + " times";
    if (userWins === 1) {
      document.getElementById('wins').innerHTML = "You have won " + userWins + " time";
    }
    var userPercent = (userWins / userGames) * 100;
    var userPercent = Math.round(userPercent);
    document.getElementById('percent').innerHTML = "Win percentage: " + userPercent + "%";
  }
  if (i > 5) {
    alert("You Lose!!! The correct answer was " + selectedNumber);
    restartGame();
    userGames++;
    document.getElementById('wins').innerHTML = "You have won " + userWins + " times";
    if (userWins === 1) {
      document.getElementById('wins').innerHTML = "You have won " + userWins + " time";
    }
    var userPercent = (userWins / userGames) * 100;
    var userPercent = Math.round(userPercent);
    document.getElementById('percent').innerHTML = "Win percentage: " + userPercent + "%";
  }
}

function restartGame() {
  i = 0;
  console.log(i + " Game Restarted1");
  document.getElementById('status').innerHTML = " ";
  selectedNumber = 5111;
  userGuess = 0;
}
