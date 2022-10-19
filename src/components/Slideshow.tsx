import { useState, useEffect } from 'react';
import { VocabEntryType } from '../data/types/Vocab';
import { Button, SHAPE } from 'baseui/button';
import { Block } from 'baseui/block';

function moveThroughSlideshow({
  setCurrentIndex,
  newIndex,
  length,
}: {
  setCurrentIndex: Function;
  newIndex: number;
  length: number;
}) {
  if (newIndex < 0 || newIndex >= length) {
    return null;
  }
  return setCurrentIndex(newIndex);
}

function slideshowInterval(setCurrentIndex: Function, length: number) {
  return setInterval(() => {
    setCurrentIndex((index: number) => (index + 1 >= length ? 0 : index + 1));
  }, 5000);
}

function Slideshow({
  returnToSettings,
  vocab,
}: {
  returnToSettings: Function;
  vocab: VocabEntryType[];
}) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [intervalId, setIntervalId] = useState<number>(0);

  const current = vocab[currentIndex];
  const length = vocab.length;

  useEffect(() => {
    const currentInterval = slideshowInterval(setCurrentIndex, length);
    setIntervalId(currentInterval);
    return () => clearInterval(currentInterval);
  }, [setIntervalId]);

  return (
    <div>
      <Block>
        <div>{current.kana}</div>
        <div>{current.kanji ? current.kanji : null}</div>
        <div>{current.meaning}</div>
      </Block>
      <Block paddingTop="25px">
        <Button
          style={{ marginRight: '10px' }}
          shape={SHAPE.pill}
          onClick={() =>
            moveThroughSlideshow({
              newIndex: currentIndex - 1,
              setCurrentIndex,
              length,
            })
          }
          disabled={currentIndex < 1}
        >
          {'Back'}
        </Button>
        <Button
          shape={SHAPE.pill}
          onClick={() => {
            if (intervalId > 0) {
              clearInterval(intervalId);
              setIntervalId(0);
            } else {
              return setIntervalId(slideshowInterval(setCurrentIndex, length));
            }
          }}
        >
          {intervalId > 0 ? 'Pause' : 'Continue'}
        </Button>
        <Button
          style={{ marginLeft: '10px' }}
          shape={SHAPE.pill}
          onClick={() =>
            moveThroughSlideshow({
              newIndex: currentIndex + 1,
              setCurrentIndex,
              length,
            })
          }
          disabled={currentIndex === vocab.length - 1}
        >
          {'Next'}
        </Button>
      </Block>
      <div>{returnToSettings()}</div>
    </div>
  );
}

export default Slideshow;
