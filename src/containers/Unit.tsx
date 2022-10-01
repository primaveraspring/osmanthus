import { UnitType } from '../data/types/Units';

type UnitProps = {
  unit: UnitType;
};

function Unit({ unit }: UnitProps) {
  return <div>{unit.name}</div>;
}

export default Unit;
