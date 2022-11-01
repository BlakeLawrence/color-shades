let playAgain = "y";
let userName = prompt("Welcome to RPS, What is your name?");
let playerScore = 0;
let computerScore = 0;
let player = prompt(`hello ${userName}, enter your move (R, P or S)`);
let playerMove = player.toUpperCase();
let moves = ["ROCK", "PAPER", "SCISSORS"];

console.log(playerMove);

if (playerMove === "R") {
  playerMove = "ROCK";
} else if (playerMove === "P") {
  playerMove = "PAPER";
} else if (playerMove === "S") {
  playerMove = "SCISSORS";
}

console.log(`Player: ${playerMove}`);

let computerMove = moves[Math.floor(Math.random() * 3)];
console.log(`PC: ${computerMove}`);
if (playerMove === computerMove) {
  prompt(
    `its a draw!!! Your score is ${playerScore} and computer's score is ${computerScore}`
  );
} else if (
  (playerMove === "ROCK" && computerMove === "SCISSORS") ||
  (playerMove === "PAPER" && computerMove === "ROCK") ||
  (playerMove === "SCISSORS" && computerMove === "PAPER")
) {
  playerScore++;
  prompt(
    `YOU WIN!!!!, your score is ${playerScore} and computer's score is ${computerScore}`
  );
} else {
  computerScore++;
  prompt(
    `YOU LOSE :( Your score is ${playerScore} and computer's score is ${computerScore}`
  );
}
playAgain = prompt(
  "would you like to play again? enter y to continue, or n to exit"
).toLowerCase();
