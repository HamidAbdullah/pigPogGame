"use strict";

//Selecting Elements
const score0EL = document.querySelector("#score--0");
const score1L = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diseL = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

//Starting Conditions
score0EL.textContent = 0;
score1L.textContent = 0;
diseL.classList.add("hidden");

const score = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Rolling Dice Functionality
btnRoll.addEventListener("click", function () {
  // 1. Generate Random Dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  //  2. Display Dice
  diseL.classList.remove("hidden");
  diseL.src = `dice-${dice}.png`;

  // 3. check for rolled 1: if true switch to next player
  if (dice !== 1) {
    // Add Dice to the current Source
    currentScore += dice;
    document.current0El.textContent = currentScore;
  } else {
    // Switch to the next player
  }
});
