import { UnitType } from '../data/types/Units';

function Slideshow(returnToSettings: Function, units: UnitType[]) {
  console.log(units);
  return (
    <div>
      {'Slideshow here'}
      <div>{returnToSettings()}</div>
    </div>
  );
}

export default Slideshow;
