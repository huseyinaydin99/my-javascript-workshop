require('styles/main.scss');

import { log, logTitle } from 'logger';

logTitle('String interpolasyon - tırnak içinde ifade kullanarak değişkenlere veya sabitlere erişme.');

const name = 'Hüseyin';
const country = 'Uzaylı';
const age = 30;

log("Adı: " + name + " Ülke" + country + " Yaş "+ age);
log(`Adı ${name} Ülke ${country} Yaş ${age}`);
log(`Adı ${name.length} Ülke ${country} Yaş ${age}`);