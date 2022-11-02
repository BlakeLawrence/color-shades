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

const heading = document.getElementById("main-heading");
console.log(heading);

const headingDiv = document.getElementById("heading-div");

// BLUE LOGIC
const blueShades = [
  {
    name: "1 blue",
    color: "#65DEF1",
  },
  {
    name: "2 blue",
    color: "#2274A5",
  },
  {
    name: "3 blue",
    color: "#A5D8FF",
  },
  {
    name: "4 blue",
    color: "#2F52E0",
  },
  {
    name: "5 blue",
    color: "#3423A6",
  },
  {
    name: "6 blue",
    color: "#7180B9",
  },
  {
    name: "7 blue",
    color: "#374A67",
  },

  {
    name: "8 blue",
    color: "#19647E",
  },
  {
    name: "9 blue",
    color: "#3F88C5",
  },
  {
    name: "10 blue",
    color: "#032B43",
  },
  {
    name: "11 blue",
    color: "#648DE5",
  },
  {
    name: "12 blue",
    color: "#304C89",
  },
  {
    name: "13 blue",
    color: "#2DE1FC",
  },
];

const blueSquare = document.getElementById("square1");

const blueButton = document.getElementById("btn-blue");

blueButton.addEventListener("click", randomBlue);

function randomBlue() {
  let random =
    blueShades[Math.floor(Math.random() * blueShades.length - 1) + 1];

  blueSquare.style.backgroundColor = random.color;

  blueSquare.innerText = random.color;
  heading.style.color = random.color;
  heading.innerHTML = random.name;
  headingDiv.style.justifyContent = "left";
}

//PINK LOGIC

const pinkShades = [
  {
    name: "1 pink",
    color: "#F49CBB",
  },
  {
    name: "2 pink",
    color: "#AA1155",
  },
  {
    name: "3 pink",
    color: "#D56AA0",
  },
  {
    name: "4 pink",
    color: "#DAA49A",
  },
  {
    name: "5 pink",
    color: "#D199B6",
  },
  {
    name: "6 pink",
    color: "#C493B0",
  },
  {
    name: "7 pink",
    color: "#EEABC4",
  },

  {
    name: "8 pink",
    color: "#E15A97",
  },
  {
    name: "9 pink",
    color: "#E3C0D3",
  },
  {
    name: "10 pink",
    color: "#FF99C9",
  },
  {
    name: "11 pink",
    color: "#F7B2AD",
  },
  {
    name: "12 pink",
    color: "#F26A8D",
  },
];

const pinkSquare = document.getElementById("square2");

const pinkButton = document.getElementById("btn-pink");

pinkButton.addEventListener("click", randomPink);

function randomPink() {
  let random =
    pinkShades[Math.floor(Math.random() * pinkShades.length - 1) + 1];

  pinkSquare.style.backgroundColor = random.color;

  pinkSquare.innerText = random.color;
  heading.style.color = random.color;
  heading.innerHTML = random.name;
  headingDiv.style.justifyContent = "center";
}
//GREEN LOGIC
const greenShades = [
  {
    name: "1 green",
    color: "#436436",
  },
  {
    name: "2 green",
    color: "#D6F599",
  },
  {
    name: "3 green",
    color: "#D2FF28",
  },
  {
    name: "4 green",
    color: "#C5D86D",
  },
  {
    name: "5 green",
    color: "#1B998B",
  },
  {
    name: "6 green",
    color: "#C8FFBE",
  },
  {
    name: "7 green",
    color: "#003B36",
  },

  {
    name: "8 green",
    color: "#012622",
  },
  {
    name: "9 green",
    color: "#7FD1B9",
  },
  {
    name: "10 green",
    color: "#519872",
  },
  {
    name: "11 green",
    color: "#0FA3B1",
  },
  {
    name: "12 green",
    color: "#3B5249",
  },
  {
    name: "12 green",
    color: "#A4B494",
  },
];
const greenSquare = document.getElementById("square3");

const greenButton = document.getElementById("btn-green");

greenButton.addEventListener("click", randomGreen);

function randomGreen() {
  let random =
    greenShades[Math.floor(Math.random() * greenShades.length - 1) + 1];

  greenSquare.style.backgroundColor = random.color;

  greenSquare.innerText = random.color;
  heading.style.color = random.color;
  heading.innerHTML = random.name;
  headingDiv.style.justifyContent = "right";
}
