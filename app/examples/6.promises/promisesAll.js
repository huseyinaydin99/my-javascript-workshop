require('styles/main.scss');

import { log, logTitle } from 'logger';

logTitle('Promises');

const namesPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(['Hüseyin', 'Ali', 'Veli', 'Selami']);
  }, 3000);

  setTimeout(() => {
    reject("sunucudan veri okunamadı hata oldu");
  }, 5000);
});

const surnamesPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(['Aydın', 'Bal', 'Yılmaz', 'Zımba']);
  }, 3000);

  setTimeout(() => {
    reject("sunucudan veri okunamadı hata oldu");
  }, 5000);
});

Promise.all([namesPromise, surnamesPromise]).then(data => {
  const [names, surnames] = data;
  for (var i = 0; i < names.length; i++) {
    const name = names[i];
    const surname = surnames[i];
    log(`${name} ${surname}`);
  }

}).catch(error => {
  log(error);
});
