import { GENKI_1 } from '../types/Courses';
import lesson1 from './lesson1';
import lesson2 from './lesson2';
import lesson3 from './lesson3';
import lesson4 from './lesson4';
import lesson5 from './lesson5';
import lesson6 from './lesson6';
import lesson7 from './lesson7';
import lesson8 from './lesson8';
import lesson9 from './lesson9';
import lesson10 from './lesson10';
import lesson11 from './lesson11';
import lesson12 from './lesson12';

const units = {
  [lesson1.id]: lesson1,
  [lesson2.id]: lesson2,
  [lesson3.id]: lesson3,
  [lesson4.id]: lesson4,
  [lesson5.id]: lesson5,
  [lesson6.id]: lesson6,
  [lesson7.id]: lesson7,
  [lesson8.id]: lesson8,
  [lesson9.id]: lesson9,
  [lesson10.id]: lesson10,
  [lesson11.id]: lesson11,
  [lesson12.id]: lesson12,
};

export default {
  id: GENKI_1,
  name: 'Genki 1',
  units,
};
