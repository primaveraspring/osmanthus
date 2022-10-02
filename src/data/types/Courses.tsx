import { UnitType } from './Units';

export const JAPANESE_FOR_BUSY_PEOPLE_1 = 'jfbp1';
export const GENKI_1 = 'genki1';

export type CourseKeyType = keyof {
  [JAPANESE_FOR_BUSY_PEOPLE_1]: string;
  [GENKI_1]: string;
};

export type CourseType = {
  id: string;
  name: string;
  units: { [unitId in CourseKeyType]: UnitType };
};
