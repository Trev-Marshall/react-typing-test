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
      <h3>
        You don't have a highscore currently.
      </h3>
    );
  }else {
    return (
      <h3>{`High Score: ${highScr.wpm.wordsPerMinute}`}</h3>
    )
  }
}

export default HighScore
