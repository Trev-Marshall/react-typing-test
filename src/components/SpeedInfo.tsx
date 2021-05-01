import React from 'react';
import { db } from '../firebase/firebase';
import { useTyping } from '../state/context';
import {wpm, words, minutes, countCorrectCharacters} from '../state/util';

export const SpeedInfo = (props: any) => {
  const {
    state: { characters, seconds, text, input},
  } = useTyping();

  let wordsPerMinute: number = wpm(words(characters), minutes(seconds));
  let correctCharacters: number = countCorrectCharacters(text, input);

  console.log(correctCharacters);
  const addWMPToFirestore = (props: any) => {
  if (input.length === text.length && props.user) {
    console.log(props.highScr);
    if(props.highScr.wpm === null || wordsPerMinute > props.highScr.wpm?.wordsPerMinute){
    db.collection('users').doc(props.user.uid).set(
      {wpm: {wordsPerMinute}},
      );
      console.log(wordsPerMinute);
      console.log("New highscore!");
    };
  }
};
  addWMPToFirestore(props);

  return (
    <div className="speed-info-container text-color">
      <div>
        <div>Elapsed Time:</div>
        <div className="large-text">{seconds}s</div>
      </div>
      <div>
        <div>WPM:</div>
        <div className="large-text">{wordsPerMinute}</div>
      </div>
      <div>
        <div>Correct Characters:</div>
        <div className="large-text">{correctCharacters}</div>
      </div>
    </div>
  )
};