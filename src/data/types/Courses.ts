import { UnitType } from './Units';

export const JAPANESE_FOR_BUSY_PEOPLE_1 = 'jfbp1';
export const GENKI_1 = 'genki1';

export type CourseKeyType = keyof {
  [JAPANESE_FOR_BUSY_PEOPLE_1]: string;
  [GENKI_1]: string;
};

export type UnitsForCourseType = { string: UnitType };

export type CourseType = {
  id: CourseKeyType;
  name: string;
  units: UnitsForCourseType;
};
