require("styles/main.scss");

import $ from "jquery";
import { log, logTitle } from "logger";

logTitle("Async Await - asenkron fonsiyonlar ve await ile bekletme");

const logName = async (name) => {
  log(name);
  const transformName = new Promise((resolve, reject) => {
    setTimeout(() => resolve(name.toUpperCase()), 1000);
  });

  const result = await transformName;

  // 2. promis sonucu dönderiliyor.
  return result;
};

logName("Hüseyin").then((res) => {
  log("asenkron fonksiyonun sonucu = " + res);
});

const getRandomUsers = async (n) => {
  try {
    const fetchRandomUsers = await fetch(
      `httpsrandomuser.me/api/?results=${n}`
    );
    const data = await fetchRandomUsers.json();
    data.results.forEach((user) => {
      const { gender, email } = user;
      log(`${gender} - ${email}`);
    });
    return data;
  } catch (err) {
    log(err);
  }
};

getRandomUsers(5);