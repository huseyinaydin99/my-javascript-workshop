require('styles/main.scss');

import { log, logTitle } from 'logger';

logTitle('Fonksiyonlarda varsayılan parametreler');

const calculatePay = (yearSalary, bonus = {
  teamBonus: 0,
  employeeBonus: 0
}) => {
  return yearSalary + bonus.teamBonus + bonus.employeeBonus;
}

log(calculatePay(22000, {teamBonus: 10000, employeeBonus: 6000 }));