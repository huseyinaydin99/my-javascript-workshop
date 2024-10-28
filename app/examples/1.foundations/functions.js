require("styles/main.scss");

import $ from "jquery";
import { log, logTitle } from "logger";

logTitle("fonksiyonlar");

function addNumbers(n1, n2) { //--<< parametreler
  // fonksiyonun kod bloğu başlangıcı
  // iş mantığı
  // 3 + 2
  var result = n1 + n2;
  return result;
  // fonksiyonun kod bloğu bitişi
}

var result = addNumbers(10, 20);
log(result)