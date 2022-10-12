import { useState } from 'react';

import { useCourse } from './Course';
import PracticeSetup from '../components/PracticeSetup';
import Quiz from '../components/Quiz';
import Slideshow from '../components/Slideshow';
import { Button } from 'baseui/button';
import { UnitType } from '../data/types/Units';

export const SETUP = 'SETUP';
export const QUIZ = 'QUIZ';
export const SLIDESHOW = 'SLIDESHOW';

export type ModeType = keyof {
  [SETUP]: string;
  [QUIZ]: string;
  [SLIDESHOW]: string;
};

function renderChangeSettingsButton(setIsActive: Function) {
  return (
    <Button onClick={() => setIsActive(false)}>{'Change settings'}</Button>
  );
}

function Practice() {
  const [selectedUnits, setSelectedUnits] = useState<number[]>([]);
  const [selectedStyle, setSelectedStyle] = useState<number>();
  const [isActive, setIsActive] = useState<boolean>(false);
  const { course } = useCourse();

  let mode = SETUP;
  if (selectedStyle === 0) {
    mode = QUIZ;
  } else if (selectedStyle === 1) {
    mode = SLIDESHOW;
  }

  let currentView = () =>
    PracticeSetup(
      selectedUnits,
      setSelectedUnits,
      course.units,
      selectedStyle,
      setSelectedStyle,
      setIsActive
    );

  if (isActive && selectedUnits.length > 0) {
    const returnToSettings = () => renderChangeSettingsButton(setIsActive);
    const unitsToUse: UnitType[] = Object.values(course.units).filter(
      (_unit, index) => selectedUnits.indexOf(index) >= 0
    );
    if (mode === QUIZ) {
      currentView = () => Quiz(returnToSettings, unitsToUse);
    } else if (mode === SLIDESHOW) {
      currentView = () => Slideshow(returnToSettings, unitsToUse);
    }
  }

  return (
    <div>
      <h3>Practice</h3>
      <span>{currentView()}</span>
    </div>
  );
}

export default Practice;
