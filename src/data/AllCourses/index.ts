import {
  JAPANESE_FOR_BUSY_PEOPLE_1,
  GENKI_1,
  CourseKeyType,
} from '../types/Courses';
import jfbp1 from '../JapaneseForBusyPeople1';
import genki1 from '../Genki1';

const AllCourses = {
  [JAPANESE_FOR_BUSY_PEOPLE_1 as CourseKeyType]: jfbp1,
  [GENKI_1 as CourseKeyType]: genki1,
};

export default AllCourses;
