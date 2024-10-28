/* css stil dosyası */
require("styles/main.scss");

/* js */

import $ from "jquery";
import { log, logTitle } from "logger";
/* import'lar */

logTitle("Değişkenler");
/* Kodlama örnekleri */

var name = "Hüseyin AYDIN";
var age = 30.0;
var hasDriverLicence = false;
var empty = undefined;

log(name + " değişken tipi: " + typeof name);
log(age + " değişken tipi: " + typeof age);
log(hasDriverLicence + " değişken tipi: " + typeof hasDriverLicence);
log(empty + " değişken tipi: " + typeof empty);