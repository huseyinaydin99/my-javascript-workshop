require('styles/main.scss');

import $ from 'jquery';
import { log, logTitle } from 'logger';

logTitle('Built in functions JS içindeki hali hazırda kullanılan fonksiyonlar')

var person = {name: "Samet", age: 30};
log(Object.keys(person));
log(Object.values(person));

log("Polat Alemdar".toLowerCase());
log("Porsuk Balemdar".toUpperCase());
log("Hüseyin AYDIN".endsWith("AYDIN"));
log("Reçel İvedik".startsWith("İvedik"));