/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let numberOrLetterArray = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

let redHearts = `<h1 class= "text-danger display-1" >♥</h1>`;
let blackHearts = `<h1 class= "text-dark display-1">♠</h1>`;
let trebol = `<h1 class= "text-dark display-1">♣</h1>`;
let diamonds = `<h1 class= "text-danger display-1">♦</h1>`;

let pikeArray = [redHearts, blackHearts, trebol, diamonds];

function radomCardPicker() {
  let numberOrLetterString = document.getElementById("numberOrLetter");

  let randomNumberOrLetter =
    numberOrLetterArray[Math.floor(Math.random() * numberOrLetterArray.length)];

  numberOrLetterString.innerHTML = randomNumberOrLetter;

  let upperPike = document.getElementById("upperPike");
  let bottomPike = document.getElementById("bottomPike");
  let randomPike = pikeArray[Math.floor(Math.random() * pikeArray.length)];

  upperPike.innerHTML = randomPike;
  bottomPike.innerHTML = randomPike;
}

window.onload = radomCardPicker;
