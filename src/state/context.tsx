import { 
  createContext, 
  FunctionComponent, 
  useReducer, 
  useContext, 
  Dispatch
} from 'react';

import { initialState, reducer, Action, ActionTypes, State } from './state'

// This is where the data is from what I can tell
export const typingContext = createContext<[State, Dispatch<Action<any>>]>([
  initialState, 
  () => {},
]);

// Creating a functional componment
// Use reducer is used on the value of the typingContext value
export const TypingProvider: FunctionComponent = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
  <typingContext.Provider value={[state, dispatch]}>
    {children}
  </typingContext.Provider>
  );
};

// Using the typingContext state
export const useTyping = () => {
  const [state, dispatch] = useContext(typingContext);

  const onInput = (value: string) => {
    // When the timer id is undefined timer is started
    if (!state.timerId) {
      startTimer();
    }
    // When the input length is the same as the length of the text AND when the timerId exists, the timer is stopped.
    if (state.input.length >= state.text.length - 1 && state.timerId) {
      stopTimer();
    }

    dispatch({ type: ActionTypes.CHANGE_INPUT, payload: value });
  };

  const startTimer = () => {
    const timerId = setInterval(
      () => dispatch({ type: ActionTypes.TICK }),
      1000
    );
    dispatch({ type: ActionTypes.SET_TIMER, payload: timerId });
  };

  const stopTimer = () => {
    clearInterval(state.timerId);
    dispatch({ type: ActionTypes.SET_TIMER });
  };

  // const onReset = () => {
  //   state.timerId = 0;
  //   dispatch({ type: ActionTypes.CHANGE_INPUT, payload: '' });
  // };

    const onReset = () => {
    state.timerId = 0;
    dispatch({ type: ActionTypes.SET_TIMER});
  };

  // return [state, dispatch];
  return { state, onInput, onReset };
};