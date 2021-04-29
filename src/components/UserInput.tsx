import React, { FunctionComponent, useRef, useState, useEffect } from 'react';
import { useTyping } from '../state/context';

// Key down event
function useKey(key: any) {
  const [pressed, setPressed] = useState(false);

  const match = (event: any) => key.toLowerCase() === event.key.toLowerCase();

  const onDown = (event: any) => {
    if(match(event)) setPressed(true);
  }

  const onUp = (event: any) => {
    if(match(event)) setPressed(false);
  }

  useEffect(() => {
    window.addEventListener('keydown', onDown);
    window.addEventListener('keyup', onUp);
    return () => {
      window.removeEventListener('keydown', onDown);
      window.removeEventListener('keyup', onUp);
    }
  }, [key])
  
  return pressed;
}

export const UserInput: FunctionComponent = () => {
  const {
    state: { input, disabledTxtArea }, 
    onInput, onReset, updateQuote, updateTxtAreaDisabled
  } = useTyping();

  const tab = useKey('tab');

  
  const inputRef = useRef<HTMLTextAreaElement>(null);

  return (
    <>
    <textarea 
      value={input}
      readOnly={disabledTxtArea}
      onChange={(e) => {
        onInput(e.target.value)
        updateTxtAreaDisabled();
      }
    }
    ref={inputRef}
    />
    <button
      onClick={() => {
        onReset();
        updateQuote();
        inputRef.current?.focus();
        }
      }>Click Me.</button>
    </>
  )};
