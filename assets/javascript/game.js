
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var win = 0;
var losses = 0;

var guess = 9;

var letters = [];

var goal;

var wins = document.querySelector("#wins");
var loss = document.querySelector("#loses");
var guesses = document.querySelector("#guesses");
var letter = document.querySelector("#letters")

function renderGame() {
  wins.innerHTML = "Wins: " + win;
  loss.innerHTML = "Losses: " + losses;
  guesses.innerHTML = "Guesses Left: " + guess;
  letter.innerHTML = "Your Guesses so far: " + letters;
}

function newGoal() {
  letters = [];
  guess = 9;
  guesses.innerHTML = "Guesses Left: " + guess;
  letter.innerHTML = "Your Guesses so far: " + letters;
  goal = alphabet[Math.floor((Math.random() * 26)+ 0)];
  console.log(goal);
}

renderGame();

document.onkeyup = function(event) {
   var input = event.key.toLowerCase();
  
   if (alphabet.indexOf(input) > -1) {
    letters.push(input);
    guess--;
    guesses.innerHTML = "Guesses Left: " + guess;
    letter.innerHTML = "Your Guesses so far: " + letters;

    if (guess > 0) {
      if (input === goal) {
        win++;
        wins.innerHTML = "Wins: " + win;
        newGoal();
      } 
    } else if (guess === 0) {
      losses++;
      loss.innerHTML = "Losses: " + losses;
      newGoal();
    }
  }
}



