import React from 'react'

function HighScore(props: any) {
  if(props.highScr === null){
    return (
      <p>
        You don't have a highscore currently.
      </p>
    );
  }else {
    return (
      <p>{`High Score: ${props.highScr.wpm.wordsPerMinute}`}</p>
    )
  }
}

export default HighScore
