require("styles/main.scss");

import $ from "jquery";
import { log, logTitle } from "logger";

logTitle("Diziler - arrays yani (:");

var name = "Şahin";
var names = ["Doğan", "Kartal", "Serçe", "Murat 124"];
log(names);

log(names[1]);
log(names.length);

for (var n of names) {
  log(n);
}

names.forEach(function(n, index) {
  log(index + " - " + n);
});