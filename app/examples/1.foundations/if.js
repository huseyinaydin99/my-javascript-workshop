require("styles/main.scss");

import $ from "jquery";
import { log, logTitle } from "logger";

logTitle("şart blokları");

var person = {
  name: "Aleyna",
  age: 16
}

if (person.age >= 18)
 log(person.name + " yetişkin");
else if (person.age == 17)
 log(person.name + " yetişkinliğe az kalmış");
else 
 log(person.name + " çocuk");