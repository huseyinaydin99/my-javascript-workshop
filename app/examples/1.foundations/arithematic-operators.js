require("styles/main.scss");

import $ from "jquery";
import { log, logTitle } from "logger";

logTitle("Aritmetik operatörler");

/*
  + - / % * TOPLA, ÇIKAR, BÖL, ÇARP, MOD AL.
*/

var addition = 2 + 2; //TOPLA
var subtraction = 3 - 90; //ÇIKAR
var division = 10 / 5; //BÖL
var multiplication = 3 * 30; //ÇARP
var remainder = 10 % 4; //MOD AL

log(addition);
log(subtraction);
log(division);
log(multiplication);
log(remainder);