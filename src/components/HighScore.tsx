import React, { useEffect } from 'react'
import { db } from '../firebase/firebase'

function HighScore({ highScr, setScore, user }: any) {

useEffect(() => {
  const wpmRef = db.collection('users').doc(user?.uid);
  wpmRef.get().then((doc) => {
    console.log(doc.data());
    setScore(doc.data());
  })
}, [user?.uid]);

  if(highScr === null){
    return (
      <p>
        You don't have a highscore currently.
      </p>
    );
  }else {
    return (
      <p>{`High Score: ${highScr.wpm.wordsPerMinute}`}</p>
    )
  }
}

export default HighScore
