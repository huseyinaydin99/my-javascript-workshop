require("styles/main.scss");

import { log, logTitle } from "logger";

logTitle("Promises and fetch api - Promisler ve web apiden veri çekme");

const getRandomUsers = (n) => {
  const fetchRandomUsers = fetch(`https://randomuser.me/api/?results=${n}`); //n tane rast gelen kullanıcı bilgisini api'den çeker
  fetchRandomUsers.then((data) => {
    data.json().then((randomUsers) => {
      log(JSON.stringify(randomUsers.results.length));
      randomUsers.results.forEach((user) => {
        const { gender, email } = user;
        log(`${gender} - ${email}`);
      });
    });
  });
};

getRandomUsers(100); //100 tane