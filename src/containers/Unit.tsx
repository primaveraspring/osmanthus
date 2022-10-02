import { UnitType } from '../data/types/Units';
import { Table } from 'baseui/table-semantic';

type UnitProps = {
  unit: UnitType;
};

function Unit({ unit }: UnitProps) {
  const headers = unit.headers;
  const data = unit.vocab.map((v) => Object.values(v));

  return (
    <div>
      <h3>{unit.name}</h3>
      <Table columns={Object.values(headers)} data={data} />
    </div>
  );
}

export default Unit;
