import { UnitType } from '../data/types/Units';

function Quiz(returnToSettings: Function, units: UnitType[]) {
  return (
    <div>
      {'Quiz here'}
      <div>{returnToSettings()}</div>
    </div>
  );
}

export default Quiz;
