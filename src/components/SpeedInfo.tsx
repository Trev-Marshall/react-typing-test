import React from 'react';
import { useTyping } from '../state/context';
import {wpm, words, minutes} from '../state/util';

export const SpeedInfo = () => {
  const {
    state: { characters, seconds, text },
  } = useTyping();

  let wordsPerMinute: number = wpm(words(characters), minutes(seconds));

  return (
    <>
    Typing Speed
    <div>Elapsed Time: {seconds}s</div>
    <div>WPM: {wordsPerMinute}</div>
    <div>Correct Characters: {characters}/{text.length - 2}</div>
    </>
  )
}