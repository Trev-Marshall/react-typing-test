import React from 'react'

function HighScore(wpmBest: any) {
  if(wpmBest.highScr === null){
    return (
      <p>
        You don't have a highscore currently.
      </p>
    );
  }else {
    return (
      <p>{`High Score: ${wpmBest.highScr.wpmBest}`}</p>
    )
  }
}

export default HighScore
