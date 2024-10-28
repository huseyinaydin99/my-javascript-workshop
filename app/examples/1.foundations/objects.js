require("styles/main.scss");

import $ from "jquery";
import { log, logTitle } from "logger";

logTitle("Arrays");

var person = {
  name: "Hüseyin AYDIN",
  age: 30,
  hasDriverLicence: true,
  dateOfBirth: "01/01/1994",
  address: {
    firstLine: "Falan felan mahallesi",
    postCode: "51200",
    country: "Türkiye"
  }
};

log(JSON.stringify(person));

log(person.name);
log(person.age);
log(person.hasDriverLicence);
log(JSON.stringify(person.address))

log(Object.values(person));