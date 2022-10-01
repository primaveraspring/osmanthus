import { GENKI_1 } from '../types/Courses';
import lesson1 from './lesson1';
import lesson2 from './lesson2';
import lesson3 from './lesson3';
import lesson4 from './lesson4';
import lesson5 from './lesson5';

const units = {
  [lesson1.id]: lesson1,
  [lesson2.id]: lesson2,
  [lesson3.id]: lesson3,
  [lesson4.id]: lesson4,
  [lesson5.id]: lesson5,
};

export default {
  id: GENKI_1,
  name: 'Genki 1',
  units,
};
