import React, { FunctionComponent, useRef } from 'react';
import { useTyping } from '../state/context';


export const UserInput: FunctionComponent = () => {
  const {
    state: { input }, 
    onInput, onReset, updateQuote
 } = useTyping();

 const inputRef = useRef<HTMLTextAreaElement>(null);

  return (
    <>
    <textarea 
      value={input}
      onChange={(e) => {
        onInput(e.target.value)
      }
    }
    ref={inputRef}
    />
    <button onClick={() => {
      onReset();
      updateQuote();
      inputRef.current?.focus();
      }}>Click Me.</button>
    </>
  )};
