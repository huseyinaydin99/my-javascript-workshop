require('styles/main.scss');

import { log, logTitle } from 'logger';

logTitle('ES6 classes and inheritance - sınıflar ve miras kavramı');

class Animal {
  constructor(name, age) {
    log(`${name} hayvan nesnesi yapıcı kod bloğu. nesne oluşturuluyor...`);
    this.name = name;
    this.age = age;
  }

  static iAmAstaticMethod() {
    log('hayvan sınıfı içinde durağan yani static metodum.');
  }

  eat() {
    log(`${this.name} ben yiyorum.`);
  }

  sleep() {
    log(`${this.name} uyuyorum.`);
  }

  wakeUp() {
    log(`${this.name} uykudan uyandım.`);
  }

  logAge() {
    log(`Adım ${this.name}, ${this.age} yaşındayım.`);
  }
}

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age)
    this.breed = breed;
  }

  logBreed() {
    log(`Ben köpeğim ${this.name}, cinsim ${this.breed}.`);
  }

  logAgeFromDog() {
    super.logAge();
  }
}

class Cat extends Animal {
  constructor(name, age) {
    super(name, age)
  }

  logAgeFromCat() {
    super.logAge();
  }
}

const tonton = new Dog('Tonton', 20, 'Süs köpeği.');
tonton.logBreed();
tonton.logAgeFromDog();

log('----------')

const pisikeddy = new Cat('Pisi kedi', 10);
pisikeddy.logAgeFromCat();
pisikeddy.eat();
pisikeddy.sleep();
pisikeddy.wakeUp();
pisikeddy.logAge();

/*
Animal.iAmAstaticMethod();

const okuzcuk = new Animal("okuz", 5);
okuzcuk.eat();
okuzcuk.sleep();
okuzcuk.wakeUp();
okuzcuk.sleep();
okuzcuk.wakeUp();
okuzcuk.logAge();

log('---------------');

const esek = new Animal("esek", 3);
esek.eat();
esek.sleep();
esek.wakeUp();
esek.sleep();
esek.wakeUp();
esek.logAge();
*/