require("styles/main.scss");

import { log, logTitle } from "logger";

logTitle("Let keyword - let anahtar sözcüğü ile değişken tanımlama");

for (var i = 0; i < 10; i++) {
  log(i);
}

log(i); //erişim var

for (let i = 0; i < 10; i++) {
  log(i);
}

log(i); //erişim yok