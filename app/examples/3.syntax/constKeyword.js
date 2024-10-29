require('styles/main.scss');

import { log, logTitle } from 'logger';

logTitle('Const keyword - sabit anahtar sözcüğü');

let name = 'Hüseyin';
name = {};
name = 2;

log(name);

const person = {};

person['name'] = 'Hüsnü';

log(person.name);

const array = [];
array.push('Hüsamettin Cindoruk diziye eklendi');

log(array[0]);