require("styles/main.scss");

import $ from "jquery";
import { log, logTitle } from "logger";

logTitle("Tür eşitliği ile eşitlik vs tür eşitsizliği ile eşitlik");

log("tür eşitsizliği ile eşitlik")
log(typeof 0 + " " + typeof false);
log(0 == false);

log(typeof "0" + " " + typeof false);
log("0" == false);

log(typeof 1 + " " + typeof "1");
log(1 == "1");

log("Tür eşitliği ile eşitlik")

log(typeof 0 + " " + typeof false);
log(0 === false);

log(typeof "0" + " " + typeof false);
log("0" === false);

log(typeof 1 + " " + typeof "1");
log(1 === "1");

// != !== fark var!!!!