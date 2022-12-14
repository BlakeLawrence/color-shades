// heading and heading div selectors
const heading = document.getElementById("main-heading");
const headingDiv = document.getElementById("heading-div");

// BLUE LOGIC
//array of blue colors
import { blueShades } from "./colorArrays/blues.js";

// query selectors
const blueSquare = document.getElementById("square1");
const blueButton = document.getElementById("btn-blue");
blueButton.addEventListener("click", randomBlue);
const blueText = document.getElementById("blue");

//function to choose random blue from array and apply effects to query selectors
function randomBlue() {
  let random =
    blueShades[Math.floor(Math.random() * blueShades.length - 1) + 1];
  blueSquare.style.backgroundColor = random.color;
  blueSquare.innerText = random.color;
  blueText.style.color = random.color;
  blueText.style.visibility = "visible";
  blueText.innerHTML = random.name;
  heading.style.color = random.color;
}

//PINK LOGIC
// importing pink colors array
import { pinkShades } from "./colorArrays/pinks.js";

//query selectors
const pinkSquare = document.getElementById("square2");
const pinkButton = document.getElementById("btn-pink");
pinkButton.addEventListener("click", randomPink);
const pinkText = document.getElementById("pink");

//function to choose random pink from array and apply effects to query selectors
function randomPink() {
  let random =
    pinkShades[Math.floor(Math.random() * pinkShades.length - 1) + 1];
  pinkSquare.style.backgroundColor = random.color;
  pinkSquare.innerText = random.color;
  pinkText.style.color = random.color;
  pinkText.innerHTML = random.name;
  pinkText.style.visibility = "visible";
  heading.style.color = random.color;
}

//GREEN LOGIC
// importing green colors array
import { greenShades } from "./colorArrays/greens.js";

//query selectors
const greenSquare = document.getElementById("square3");
const greenButton = document.getElementById("btn-green");
greenButton.addEventListener("click", randomGreen);
const greenText = document.getElementById("green");

//function to choose random green from array and apply effects to query selectors
function randomGreen() {
  let random =
    greenShades[Math.floor(Math.random() * greenShades.length - 1) + 1];
  greenSquare.style.backgroundColor = random.color;
  greenSquare.innerText = random.color;
  greenText.style.color = random.color;
  greenText.innerHTML = random.name;
  greenText.style.visibility = "visible";
  heading.style.color = random.color;
}
