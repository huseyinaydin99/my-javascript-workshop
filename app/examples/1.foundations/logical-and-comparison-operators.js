require("styles/main.scss");

import $ from "jquery";
import { log, logTitle } from "logger";

logTitle("Karşılaştırma ve Mantıksal Operatörler");

log("Karşılaştırma Operatörleri")
log(10 == 10);
log(10 < 10);
log(10 <= 10);
log(10 > 10);
log(10 >= 10);
log(10 != 10);
log(10 != 11);

log("Mantıksal Operatörler")
log(10 == 10 && 20 == 20 && 100 == 100);
log(10 == 10 && 20 != 20);

log(20 == 30 || 10 == 10);

log(!(10 == 10));
log(!(10 == 20));

if ((10 == 20)) {
  log("if bloğu çalıştırıldı");
}