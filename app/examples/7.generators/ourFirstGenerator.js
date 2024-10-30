require("styles/main.scss");

import { log, logTitle } from "logger";

logTitle("Generators - üreticiler");

const getNumbers = function* () {
  yield 1;
  yield "Selamun Aleyküm";
  yield true;
  yield { name: "Hüseyin" };
  return "bitti!";
};

const numbersGen = getNumbers();

log(numbersGen.next().value);
log(numbersGen.next().value);
log(numbersGen.next().value);
log(JSON.stringify(numbersGen.next().value));
log(numbersGen.next().value);