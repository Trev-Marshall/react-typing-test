import React from 'react';
import { db } from '../firebase/firebase';
import { useTyping } from '../state/context';
import {wpm, words, minutes} from '../state/util';

export const SpeedInfo = (props: any) => {
  const {
    state: { characters, seconds, text, input, timerId},
  } = useTyping();

  let wordsPerMinute: number = wpm(words(characters), minutes(seconds));

  const addWMPToFirestore = (props: any) => {
  if (input.length === text.length - 1 && timerId) {
    console.log(props.highScr.wpmBest, props.user.uid);
    if(wordsPerMinute > props.highScr.wpmBest)
      db.collection('users').doc(props.user.uid).set(
        {"wmp": {wordsPerMinute}},
      )
    }
};
  addWMPToFirestore(props);

  return (
    <>
    Typing Speed
    <div>Elapsed Time: {seconds}s</div>
    <div>WPM: {wordsPerMinute}</div>
    <div>Correct Characters: {characters}/{text.length - 2}</div>
    </>
  )
};