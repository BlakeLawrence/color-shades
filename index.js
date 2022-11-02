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

// Color changer app

// BLUE LOGIC
const blueShades = [
  "#65DEF1",
  "#2274A5",
  "#A5D8FF",
  "#2F52E0",
  "#3423A6",
  "#7180B9",
  "#374A67",
  "#19647E",
  "#3F88C5",
  "#032B43",
  "#648DE5",
  "#304C89",
  "#2DE1FC",
];

const blueSquare = document.getElementById("square1");

const blueButton = document.getElementById("btn-blue");

blueButton.addEventListener("click", randomBlue);

function randomBlue() {
  let random =
    blueShades[Math.floor(Math.random() * blueShades.length - 1) + 1];
  blueSquare.style.backgroundColor = random;

  blueSquare.innerText = random;
}

//PINK LOGIC
const pinkShades = [
  "#F49CBB",
  "#AA1155",
  "#D56AA0",
  "#DAA49A",
  "#D199B6",
  "#C493B0",
  "#EEABC4",
  "#E15A97",
  "#C799A6",
  "#E3C0D3",
  "#FF99C9",
  "#F7B2AD",
  "#F26A8D",
];

const pinkSquare = document.getElementById("square2");

const pinkButton = document.getElementById("btn-pink");

pinkButton.addEventListener("click", randomPink);

function randomPink() {
  let random =
    pinkShades[Math.floor(Math.random() * pinkShades.length - 1) + 1];
  pinkSquare.style.backgroundColor = random;

  pinkSquare.innerText = random;
}

//GREEN LOGIC
const greenShades = [
  "#436436",
  "#D6F599",
  "#D2FF28",
  "#C5D86D",
  "#1B998B",
  "#C8FFBE",
  "#003B36",
  "#012622",
  "#7FD1B9",
  "#519872",
  "#0FA3B1",
  "#3B5249",
  "#A4B494",
];
const greenSquare = document.getElementById("square3");

const greenButton = document.getElementById("btn-green");

greenButton.addEventListener("click", randomGreen);

function randomGreen() {
  let random =
    greenShades[Math.floor(Math.random() * greenShades.length - 1) + 1];
  greenSquare.style.backgroundColor = random;

  greenSquare.innerText = random;
}
