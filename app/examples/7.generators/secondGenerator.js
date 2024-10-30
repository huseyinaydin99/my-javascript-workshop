require("styles/main.scss");

import { log, logTitle } from "logger";

logTitle("Generators");

const getNumbers = function* (numbers) {
  for (var i = 0; i < numbers.length; i++) {
    yield numbers[i];
  }
};

const getNumbersGen = getNumbers([1, 2, 3, 4, 5]);

const interval = setInterval(() => {
  const next = getNumbersGen.next();
  if (next.done) {
    log("üretici bitti değerlerin sonu geldi");
    clearInterval(interval); //zamanlayıcıyı durdurur temizler
  } else {
    const number = next.value;
    log(number);
  }
}, 1000);