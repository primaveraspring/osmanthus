import { useState } from 'react';
import { VocabEntryType } from '../data/types/Vocab';
import { Button, SHAPE } from 'baseui/button';
import { Block } from 'baseui/block';
import { StatefulInput } from 'baseui/input';

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
    <Block paddingTop="25px">
      {vocab.kanji ? kanjiSection : null}
      <div>meaning: {vocab.meaning}</div>
    </Block>
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
      <Block minHeight="300px">
        <Block minHeight="200px">
          <div>{current.kana}</div>
          <Block maxWidth="300px" margin="0 auto" paddingTop="25px">
            <StatefulInput initialState={{ value: '' }} />
          </Block>
          {shouldShowAnswer ? renderAnswer({ vocab: current }) : null}
        </Block>
        <Block>
          <Block paddingTop="25px">
            <Button
              style={{ marginRight: '10px' }}
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
            <Button
              shape={SHAPE.pill}
              onClick={() => setShouldShowAnswer(true)}
            >
              {'View answer'}
            </Button>
            <Button
              style={{ marginLeft: '10px' }}
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
          </Block>
        </Block>
      </Block>
      <Block paddingTop="25px">{returnToSettings()}</Block>
    </div>
  );
}

export default Quiz;
