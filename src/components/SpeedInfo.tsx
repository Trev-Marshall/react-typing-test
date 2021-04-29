import React from 'react';
import { db } from '../firebase/firebase';
import { useTyping } from '../state/context';
import {wpm, words, minutes} from '../state/util';

export const SpeedInfo = (props: any) => {
  const {
    state: { characters, seconds, text, input},
  } = useTyping();

  let wordsPerMinute: number = wpm(words(characters), minutes(seconds));

  const addWMPToFirestore = (props: any) => {
  if (input.length === text.length - 1 && props.user) {
    if(props.highScr === null || wordsPerMinute > props.highScr.wordsPerMinute)
    db.collection('users').doc(props.user.uid).set(
      {wpm: {wordsPerMinute}},
      );
      console.log("done");
    }
};

  addWMPToFirestore(props);

  return (
    <>
    <div>Elapsed Time: {seconds}s</div>
    <div>WPM: {wordsPerMinute}</div>
    <div>Correct Characters: {characters}/{text.length - 2}</div>
    </>
  )
};