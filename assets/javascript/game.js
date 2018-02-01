
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var win = 0;
var losses = 0;

var guess = 9;

var letters = [];

var goal = alphabet[Math.floor((Math.random() * 26)+ 0)];



function renderGame() {
  document.querySelector("#wins").innerHTML = "Wins: " + win;
  document.querySelector("#loses").innerHTML = "Losses: " + losses;
  document.querySelector("#guesses").innerHTML = "Guesses Left: " + guess;
  document.querySelector("#letters").innerHTML = "Your Guesses so far: " + letters;
}

function newGoal() {
  document.querySelector("#letters").innerHTML = "Your Guesses so far: " + letters;
  goal = alphabet[Math.floor((Math.random() * 26)+ 0)];
}

renderGame();

document.onkeyup = function(event) {
   var input = event.key.toLowerCase();
  
   if (alphabet.indexOf(input) > -1) {
    letters.push(input);
    guess--;
    document.querySelector("#guesses").innerHTML = "Guesses Left: " + guess;
    document.querySelector("#letters").innerHTML = "Your Guesses so far: " + letters;

    if (guess > 0) {
      if (input === goal) {
        win++;
        document.querySelector("#wins").innerHTML = "Wins: " + win;
        guess = 9;
        document.querySelector("#guesses").innerHTML = "Guesses Left: " + guess;
        letters = [];
        newGoal();
      } 
    } else if (guess === 0) {
      losses++;
      document.querySelector("#loses").innerHTML = "Losses: " + losses;
      guess = 9;
      document.querySelector("#guesses").innerHTML = "Guesses Left: " + guess;
      letters = [];
      newGoal();
    }
  }
}



