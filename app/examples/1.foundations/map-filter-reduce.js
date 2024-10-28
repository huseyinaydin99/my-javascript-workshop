require('styles/main.scss');

import $ from 'jquery';
import { log, logTitle } from 'logger';

logTitle('Map(Dönüştürme) | Filter(Eleme) | Reduce(Birleştirme)')

var mapCallback = function(n) {
  return n * 2;
}

var map = [1, 2, 3, 4, 5].map(mapCallback);

log("[].map");
log(map);

log("[].filter");
var filter = [1, 2, 3, 4, 5, 10, 29, 100].filter(function(n) {
  return n % 2 == 0;
});

log(filter);

log("[].reduce");
var reduce = [1, 2, 3, 4, 5].reduce(function(accumulator, current) {
  return accumulator + current;
});

log(reduce);