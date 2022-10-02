import { UnitType } from '../data/types/Units';
import {
  VocabListType,
  VocabEntryType,
  HeadersType,
} from '../data/types/Vocab';

type UnitProps = {
  unit: UnitType;
};

function renderVocabRows(
  vocabList: VocabListType,
  headers: HeadersType,
  unitId: string
) {
  if (vocabList.length < 1) {
    return null;
  }

  return vocabList.map((vocabEntry: VocabEntryType, index) =>
    renderVocab(vocabEntry, headers, unitId, index)
  );
}

function renderVocab(
  vocab: VocabEntryType,
  headers: HeadersType,
  unitId: string,
  index: number
) {
  return (
    <tr key={`${unitId}-vocab-${index}`}>
      {Object.keys(headers).map((headerId: string, index) => {
        return (
          <td key={`${unitId}-${headerId || ''}-vocab-${index}`}>
            {vocab[headerId] || ''}
          </td>
        );
      })}
    </tr>
  );
}

function Unit({ unit }: UnitProps) {
  const headers = unit.headers;
  return (
    <div>
      <h3>{unit.name}</h3>
      <table>
        <thead>
          <tr>
            {Object.keys(headers).map((headerKey: string) => {
              return (
                <th key={`${unit.id}-header-${headerKey}`}>
                  {headers[headerKey]}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>{renderVocabRows(unit.vocab, headers, unit.id)}</tbody>
      </table>
    </div>
  );
}

export default Unit;
