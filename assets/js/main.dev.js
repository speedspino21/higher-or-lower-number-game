"use strict";

var current_elem = document.getElementById("current");
var btns = document.getElementsByClassName("btn");
var result_elem = document.getElementById("result");
var score_elem = document.getElementById("score");
var last_number = 0;
var current_number = getRandomInt();
var score = 0;
current_elem.innerText = current_number;

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    PlayGame(this.dataset.value);
  });
}

function PlayGame(choice) {
  last_number = current_number;
  current_number = getRandomInt();
  current_elem.innerText = current_number;
  var comparison;

  if (last_number < current_number) {
    comparison = "higher";
  } else if (last_number > current_number) {
    comparison = "lower";
  } else {
    comparison = "match";
  }

  if (choice == comparison) {
    score++;
    score_elem.innerText = score;
    result_elem.innerText = "Correct";
    result_elem.classList.add("correct");
    result_elem.classList.remove("hide");
    setTimeout(function () {
      result_elem.classList.remove("correct");
      result_elem.classList.add("hide");
    }, 750);
  } else if (comparison == "match") {
    result_elem.innerText = "Match";
    result_elem.classList.remove("hide");
    setTimeout(function () {
      result_elem.classList.add("hide");
    }, 750);
  } else {
    result_elem.innerText = "Incorrect";
    result_elem.classList.add("incorrect");
    result_elem.classList.remove("hide");
    score = 0;
    score_elem.innerText = score;
    setTimeout(function () {
      result_elem.classList.remove("incorrect");
      result_elem.classList.add("hide");
    }, 750);
  }
}

function getRandomInt() {
  return Math.floor(Math.random() * 10);
}