import { JAPANESE_FOR_BUSY_PEOPLE_1, CourseType } from '../types/Courses';
import unit1 from './unit1';
import unit2 from './unit2';
import unit3 from './unit3';
import unit4 from './unit4';
import unit5 from './unit5';

const units = {
  [unit1.id]: unit1,
  [unit2.id]: unit2,
  [unit3.id]: unit3,
  [unit4.id]: unit4,
  [unit5.id]: unit5,
};

export default {
  id: JAPANESE_FOR_BUSY_PEOPLE_1,
  name: 'Japanese For Busy People 1',
  units,
};
