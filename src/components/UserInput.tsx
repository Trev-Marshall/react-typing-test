import React, { FunctionComponent, useRef } from 'react';
import { useTyping } from '../state/context';

export const UserInput: FunctionComponent = () => {
  const {
    state: { input, disabledTxtArea }, 
    onInput, onReset, updateQuote, updateTxtAreaDisabled
  } = useTyping();

  
  const inputRef = useRef<HTMLTextAreaElement>(null);

  return (
    <div className="user-input-container">
    <textarea 
      className="text-area"
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
      className="button"
      onClick={() => {
        onReset();
        updateQuote();
        inputRef.current?.focus();
        }
      }>Click Me..</button>
    </div>
  )};
