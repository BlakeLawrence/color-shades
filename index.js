//ROCK PAPER AND SCISSORS

// let userName = prompt("Welcome to RPS, What is your name?");
// let player = prompt(`hello ${userName}, enter your move (R, P or S)`);
// let playerMove = player.toUpperCase();
// let moves = ["ROCK", "PAPER", "SCISSORS"];
// let computerScore = 0;
// let playerScore = 0;

// if (playerMove === "R") {
//   playerMove = "ROCK";
// } else if (playerMove === "P") {
//   playerMove = "PAPER";
// } else if (playerMove === "S") {
//   playerMove = "SCISSORS";
// }

// console.log(`Player: ${playerMove}`);

// let computerMove = moves[Math.floor(Math.random() * 3)];
// console.log(`PC: ${computerMove}`);
// if (playerMove === computerMove) {
//   prompt(
//     `its a draw!!! you both chose ${playerMove}... The score is: \n Player:${playerScore} \n Computer: ${computerScore}`
//   );
// } else if (
//   (playerMove === "ROCK" && computerMove === "SCISSORS") ||
//   (playerMove === "PAPER" && computerMove === "ROCK") ||
//   (playerMove === "SCISSORS" && computerMove === "PAPER")
// ) {
//   playerScore++;
//   prompt(
//     `you WIN!!! your ${playerMove} beats the computers ${computerMove}... The score is: \n Player:${playerScore} \n Computer: ${computerScore}`
//   );
// } else {
//   computerScore++;
//   prompt(
//     `you LOSE!!! the computers ${computerMove} beats your ${playerMove}... The score is: \n Player:${playerScore} \n Computer: ${computerScore}`
//   );
// }
// playAgain = prompt("to continue, enter y, or n to stop");

// QUIZ

const name = prompt("this is the quiz game, what is your name?");
alert(`Hello ${name}, welcome and enjoy`);
alert("here comes question one...");
let score = 0;
let answerOne = prompt("What is the capital of UK");
if (answerOne === "london") {
  score++;
}
console.log(score);
let answerTwo = prompt("What is the capital of Spain");
if (answerTwo === "barcelona") {
  score++;
}
console.log(score);
let answerThree = prompt("What is the capital of South Africa");
if (answerThree === "johannesburg") {
  score++;
}
console.log(score);
let answerFour = prompt("What is the capital of italy");
if (answerFour === "milan") {
  score++;
}
console.log(score);
let answerFive = prompt("What is the capital of Greece");
if (answerFive === "athens") {
  score++;
}
console.log(score);

alert(`thanks for the game, your score = ${score}`);
