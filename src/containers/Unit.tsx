import { UnitType } from '../data/types/Units';
import { VocabEntryType, VocabListType } from '../data/types/Vocab';

type UnitProps = {
  unit: UnitType;
};

function renderVocabRows(vocabList: VocabListType) {
  if (vocabList.length < 1) {
    return null;
  }

  return vocabList.map((vocabEntry: VocabEntryType) => renderVocab(vocabEntry));
}

function renderVocab(vocab: VocabEntryType) {
  return (
    <tr>
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
        {renderVocabRows(unit.vocab)}
      </table>
    </div>
  );
}

export default Unit;
