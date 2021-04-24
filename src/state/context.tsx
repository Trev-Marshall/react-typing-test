import { 
  createContext, 
  FunctionComponent, 
  useReducer, 
  useContext, 
  Dispatch
} from 'react';

import { db } from '../firebase/firebase';

import { initialState, reducer, Action, ActionTypes, State } from './state'

// This is where the data gets pushed to a context
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


  // Grab data from database if needed and switches to new quote
  const updateQuote = () => {
    if (state.quoteBool === false) {
      const quotes = db.collection('excerpts').onSnapshot((snapshot) => {
        const tempQuotes = snapshot.docs.map((doc) => ({
          id: doc.id,
          quote: doc.data(),
        }))
        quotes();
        state.excerpts = [tempQuotes];
        console.log(state.quoteBool);
        state.quoteBool = true;
        console.log(state.excerpts, state.quoteBool);
        dispatch({ type: ActionTypes.UPDATE_QUOTES});
      });
      return state.excerpts;
    };
    // Finds the length of the excerpt array
    const size: number = Object.keys(state.excerpts[0][0].quote).length;
    // Picks and updates text state
      const pickQuote = (size: number) => {
      let i = Math.floor(Math.random() * size + 1);
      state.text = state.excerpts[0][0].quote[`quote ${i}`];
      console.log(state.text);
      };
      pickQuote(size);
      dispatch({ type: ActionTypes.UPDATE_QUOTES});
  };

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

  // Reset button that resets values of type test
    const onReset = () => {
    state.seconds = 0;
    state.input = '';
    state.characters = 0;
    state.excerpts = [];
    clearInterval(state.timerId);
    dispatch({ type: ActionTypes.SET_TIMER, payload: ''});
  };

  // return [state, dispatch];
  return { state, onInput, onReset, updateQuote };
};