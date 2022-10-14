import { useState } from 'react';
import { VocabEntryType } from '../data/types/Vocab';
import { Button, SHAPE } from 'baseui/button';

function moveThroughQuiz({
  setCurrentIndex,
  newIndex,
  setShouldShowAnswer,
}: {
  setCurrentIndex: Function;
  newIndex: number;
  setShouldShowAnswer: Function;
}) {
  setShouldShowAnswer(false);
  return setCurrentIndex(newIndex);
}

function renderAnswer({ vocab }: { vocab: VocabEntryType }) {
  const kanjiSection = <div>kanji: {vocab.kanji}</div>;
  return (
    <div>
      {vocab.kanji ? kanjiSection : null}
      <div>meaning: {vocab.meaning}</div>
    </div>
  );
}

function Quiz({
  returnToSettings,
  vocab,
}: {
  returnToSettings: Function;
  vocab: VocabEntryType[];
}) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [shouldShowAnswer, setShouldShowAnswer] = useState<boolean>(false);

  const current = vocab[currentIndex];

  return (
    <div>
      {'Quiz here'}
      <div>{current.kana}</div>
      {shouldShowAnswer ? renderAnswer({ vocab: current }) : null}
      <Button
        shape={SHAPE.pill}
        onClick={() =>
          moveThroughQuiz({
            newIndex: currentIndex - 1,
            setCurrentIndex,
            setShouldShowAnswer,
          })
        }
        disabled={currentIndex < 1}
      >
        {'Back'}
      </Button>
      <Button shape={SHAPE.pill} onClick={() => setShouldShowAnswer(true)}>
        {'View answer'}
      </Button>
      <Button
        shape={SHAPE.pill}
        onClick={() =>
          moveThroughQuiz({
            newIndex: currentIndex + 1,
            setCurrentIndex,
            setShouldShowAnswer,
          })
        }
        disabled={currentIndex === vocab.length - 1}
      >
        {'Next'}
      </Button>
      <div>{returnToSettings()}</div>
    </div>
  );
}

export default Quiz;
