/* css stili */
require("styles/main.scss");

/* js */
import $ from "jquery";
import { log, logTitle } from "logger";
/* importlar */

logTitle("Switch yapısı");

var person = {
  name: "Hüseyin",
  age: 30
}

switch(true) {
  case (person.age == 17):
    log(person.name + " yetişkin olmak üzere");
    break;
  case (person.age >= 18):
    log(person.name + " yetişkin");
    break;
  default:
    log(person.name + " çocuk");
}

switch (new Date().getDay()) {
  case 6:
    log("Cumartesi")
    break;
  case 5:
    log("Cuma")
    break;
  default:
    log("Bilinmeyen")
}