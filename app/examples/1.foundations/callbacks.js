require('styles/main.scss');

import $ from 'jquery';
import { log, logTitle } from 'logger';

logTitle('Callbacks fonksiyona parametre olarak başka bir fonksiyonu geçme')

function callbackExample(name, callback) {
  log(callback(name));
}

var callback = function(name) {
  return "Maraba televole: (: " + name;
}

callbackExample("Zımzımettin Şenşakırdakçıoğullarıakşamyatardasabahakadarhorulhoruluyuroğlu", function(name) {
  return "Selamualeyküm sevgilim benim :D : " + name;
});