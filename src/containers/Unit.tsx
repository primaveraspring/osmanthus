import { Table } from 'baseui/table-semantic';
import { useUnit } from './Course';

function Unit() {
  const { unit } = useUnit();

  if (!unit) {
    return null;
  }

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
