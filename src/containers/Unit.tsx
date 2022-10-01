import { UnitType } from '../data/types/Units';
import { VocabEntryType, VocabListType } from '../data/types/Vocab';

type UnitProps = {
  unit: UnitType;
};

function renderVocabRows(vocabList: VocabListType, unitId: string) {
  if (vocabList.length < 1) {
    return null;
  }

  return vocabList.map((vocabEntry: VocabEntryType, index) =>
    renderVocab(vocabEntry, unitId, index)
  );
}

function renderVocab(vocab: VocabEntryType, unitId: string, index: number) {
  return (
    <tr key={`${unitId}-vocab-${index}`}>
      <td>{vocab.kana}</td>
      <td>{vocab.meaning}</td>
    </tr>
  );
}

function Unit({ unit }: UnitProps) {
  return (
    <div>
      <h3>{unit.name}</h3>
      <table>
        <tr>
          <th>Kana</th>
          <th>Meaning</th>
        </tr>
        {renderVocabRows(unit.vocab, unit.id)}
      </table>
    </div>
  );
}

export default Unit;
