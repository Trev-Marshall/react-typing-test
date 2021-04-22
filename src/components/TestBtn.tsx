import { useTyping } from '../state/context';

import React from 'react'

export const TestBtn = () => {
  const {
    updateQuote
  } = useTyping();
  return (
    <>
    <button onClick={updateQuote}>Log data</button>
    </>
  )
}

