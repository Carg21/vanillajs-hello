/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];
  let indiwho = Math.floor(Math.random() * who.length);
  let indiaction = Math.floor(Math.random() * action.length);
  let indiwhat = Math.floor(Math.random() * what.length);
  let indiwhen = Math.floor(Math.random() * when.length);

  let excusegen = document.querySelector("#excuse");
  console.log(excusegen);
  excusegen.innerHTML =
    who[indiwho] +
    " " +
    action[indiaction] +
    " " +
    what[indiwhat] +
    " " +
    when[indiwhen];
};
