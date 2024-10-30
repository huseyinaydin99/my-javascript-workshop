require('styles/main.scss');

import { log, logTitle } from 'logger';

logTitle('Array destructuring - dizi parçalama');

const names = ['Hüseyin', 'Ömer', 'Yasin', 'Saadet', 'Rümeysa'];

// const anna = names[0];
// const mariam = names[1];
// const joe = names[2];

const [huseyin, , omer, ...restOfNames] = names;

log(`${huseyin} ${omer}`);
log(restOfNames);
log(restOfNames.length);