require('styles/main.scss');

import $ from 'jquery';
import { log, logTitle } from 'logger';

logTitle('Callbacks - fonksiyona parametre olarak geçilip o fonksiyonun içerisinde çağrılan fonksiyonlar yani')


function callbackExample(name, callback) {
  log(callback(name));
}

var callback = function(name) {
  return "Merhabalar " + name;
}

callbackExample("Hüseyin AYDIN", function(name) {
  return "Selamu aleyküm sevgilim benim :D :=}> " + name;
});