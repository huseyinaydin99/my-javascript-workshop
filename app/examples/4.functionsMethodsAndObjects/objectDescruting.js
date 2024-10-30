require('styles/main.scss');

import { log, logTitle } from 'logger';

logTitle('Object descruturing - nesne/obje parçalama');

const getUser = () => {
  return {
    name: 'Hüseyin',
    surname: 'Aydın',
    gender: 'erkek',
    address: {
      country: 'Türkiye',
      city: 'Niğde',
      postCode: '51200',
      fullAddress: {
        doorNumber: 1500,
        street: 'Falanca filanca sokak.'
      }
    },
    age: 30
  }
};

const user = getUser();

// const name = user.name;
// const age = user.age;
// const country = user.address.country;
const doorNumber = user.address.fullAddress.doorNumber;

const { name : theName, age : theAge, address : { country : theCountry } } = user;
const { address : { fullAddress : { doorNumber : number } } } = user;

log(theName);
log(theAge);
log(theCountry);
log(number);