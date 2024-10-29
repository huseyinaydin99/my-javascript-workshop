require('styles/main.scss');

import { log, logTitle } from 'logger';

logTitle('Obje işlemleri');

const address = {
  city: 'Niğde',
  country: 'Türkiye',
  postCode: '51200'
};

const name = {
  firstName: 'Hüseyin',
  lastName: 'Aydın'
};

const person = { ...address, ...name };

log(JSON.stringify(person, null, 2));