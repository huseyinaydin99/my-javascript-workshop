require("styles/main.scss");

import $ from "jquery";
import { log, logTitle } from "logger";

logTitle("Break ve Continue anahtar kelimeleri");

var persons = [
  { name: "Hüseyin", age: 30 },
  { name: "Ceyda", age: 30 }
];

// for (var i = 0; i <= persons.length; i++) {
//   log(persons[i].name);
//   log(persons[i].age);
//   log("----------------")
// }

var number = 0;

while(number < 5) {
  number++;
  if (number < 5) {
    continue;
  }
  log(number);
}

// var i = 0;

// do {
//   i++;
//   log(i)
// } while(false);