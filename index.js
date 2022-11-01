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

// QUIZ game

// const name = prompt("this is the quiz game, what is your name?");
// alert(`Hello ${name}, welcome and enjoy`);
// alert("here comes question one...");
// let score = 0;

// answerArrayUK = ["london", "Newcastle", "Manchester", "Cornwall"];
// answerArraySpain = ["Barcelona", "Madrid", "Sitges", "Marbella"];
// answerArraySA = ["Durban", "Cape Town", "Johannesburg", "Port Elizabeth"];
// answerArrayItaly = ["Venice", "Naples", "Milan", "Pozitano"];
// answerArrayGreece = ["Athens", "Corfu", "XXII", "XXXXXIIIII"];

// let answerOne = prompt(
//   `Score = ${score} \n What is the capital of UK? \n A: ${answerArrayUK[0]} \n B: ${answerArrayUK[1]} \n C: ${answerArrayUK[2]} \n D: ${answerArrayUK[3]}`
// );
// if (answerOne.toLowerCase() === "a") {
//   score++;
// }
// console.log(score);
// let answerTwo = prompt(
//   `Score = ${score} \n What is the capital of Spain? \n A: ${answerArraySpain[0]} \n B: ${answerArraySpain[1]} \n C: ${answerArraySpain[2]} \n D: ${answerArraySpain[3]}`
// );
// if (answerTwo === "b") {
//   score++;
// }
// console.log(score);
// let answerThree = prompt(
//   `Score = ${score} \n What is the capital of South Africa? \n A: ${answerArraySA[0]} \n B: ${answerArraySA[1]} \n C: ${answerArraySA[2]} \n D: ${answerArraySA[3]}`
// );
// if (answerThree === "c") {
//   score++;
// }
// console.log(score);
// let answerFour = prompt(
//   `Score = ${score} \n What is the capital of Italy? \n A: ${answerArrayItaly[0]} \n B: ${answerArrayItaly[1]} \n C: ${answerArrayItaly[2]} \n D: ${answerArrayItaly[3]}`
// );
// if (answerFour === "c") {
//   score++;
// }
// console.log(score);
// let answerFive = prompt(
//   `Score = ${score} \n What is the capital of Greece? \n A: ${answerArrayGreece[0]} \n B: ${answerArrayGreece[1]} \n C: ${answerArrayGreece[2]} \n D: ${answerArrayGreece[3]}`
// );
// if (answerFive === "a") {
//   score++;
// }
// console.log(score);

// alert(`thanks for the game, your score = ${score}`);
