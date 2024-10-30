require("styles/main.scss");

import { log, logTitle } from "logger";

import { coroutine as co } from "bluebird";

logTitle("Generators and promises - üreticiler ve promisler");

/*
Örnek Akış:
Fonksiyon Başlatma: getRandomUsers(10) çağrılır ve generator fonksiyonu başlatılır.
Veri Çekme: fetch işlemi yapılır ve yield ile duraklatılır.
Veri İşleme: json() işlemi yapılır ve yine yield ile duraklatılır.
Sonuç Döndürme: Elde edilen data sonuç olarak döner.

Co kütüphanesi next() çağrılarını otomatik olarak yönetir. 
Yani, co kullanarak bir generator fonksiyonu oluşturduğunuzda, 
asenkron işlemlerin her bir yield ifadesinden sonra otomatik olarak next() çağrısı yapılır.
*/

const getRandomUsers = co(function* (n) {
  const fetchRandomUsers = yield fetch(
    `https://randomuser.me/api/?results=${n}`
  );
  const data = yield fetchRandomUsers.json();
  return data;
});

getRandomUsers(10)
  .then((randomUsers) => {
    randomUsers.results.forEach((user) => {
      const { gender, email } = user;
      log(`${gender} - ${email}`);
    });
  })
  .catch((err) => log);