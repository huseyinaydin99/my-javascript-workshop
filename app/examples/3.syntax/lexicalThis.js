require('styles/main.scss');

import { log, logTitle } from 'logger';

logTitle('this keyword - this anahtar sözcüğü');

const person = {
  name: 'Hüseyin',
  cars: ['ae86', 'supra'],
  toString: function() {
    // log(`${this.name} has ${this.cars}`)
    this.cars.forEach(car => {
      log(`${this.name} has ${car}`);
    });
  }
}

person.toString();