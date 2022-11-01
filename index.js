let userName = prompt("Welcome to RPS, What is your name?");
let player = prompt(`hello ${userName}, enter your move (R, P or S)`);
let playerMove = player.toUpperCase();
let moves = ["ROCK", "PAPER", "SCISSORS"];
let playerScore = 0;
let computerScore = 0;

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
    `its a draw!!! you both chose ${playerMove}... The score is: \n Player:${playerScore} \n Computer: ${computerScore}`
  );
} else if (
  (playerMove === "ROCK" && computerMove === "SCISSORS") ||
  (playerMove === "PAPER" && computerMove === "ROCK") ||
  (playerMove === "SCISSORS" && computerMove === "PAPER")
) {
  playerScore++;
  prompt(
    `you WIN!!! your ${playerMove} beats the computers ${computerMove}... The score is: \n Player:${playerScore} \n Computer: ${computerScore}`
  );
} else {
  computerScore++;
  prompt(
    `you LOSE!!! the computers ${computerMove} beats your ${playerMove}... The score is: \n Player:${playerScore} \n Computer: ${computerScore}`
  );
}
playAgain = prompt(
  "would you like to play again? enter y to continue, or n to exit"
).toLowerCase();
