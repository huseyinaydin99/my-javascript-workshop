require("styles/main.scss");

import { log, logTitle } from "logger";

logTitle("Arrow functions - ok işaretli fonksiyonlar");

const hello = () => {
  const name = "Hüseyin";
  return `Merhabalar ${es6}`;
};

const powers = [1, 2, 3, 4, 5].map((number, index) => Math.pow(number, index));

const add = (n1, n2) => n1 + n2;

const milesToKm = (miles) => miles * 1.60934;

log(hello());
log(powers);
log(add(100, 100));
log(milesToKm(300));