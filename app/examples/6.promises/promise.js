require("styles/main.scss");

import { log, logTitle } from "logger";

logTitle("Promises");

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("data sunucudan okundu");
  }, 3000);

  setTimeout(() => {
    reject("sunucudan veri çekme esnasında hata oldu");
  }, 5000);
});

promise
  .then((response) => {
    log(response);
  })
  .catch((error) => {
    log(error);
  });