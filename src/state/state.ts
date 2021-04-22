import { countCorrectCharacters } from "./util";

// Creating interface for the initial state and stating the types
export interface State {
  excerpts: {}[];
  text: string;
  input: string;
  characters: number;
  seconds: number;
  timerId?: number;
  quoteBool: boolean;
}
// creating the initial state values. The type is "State" as stated in the variable header
export const initialState: State = {
  excerpts: [],
  text: '',
  input: '',
  characters: 0,
  seconds: 0,
  timerId: undefined,
  quoteBool: false,
}

// Creating types
export enum ActionTypes {
  CHANGE_INPUT,
  SET_TIMER,
  TICK,
  UPDATE_QUOTES,
}

// Payload is optional and when passed through we obtain info on the type since <T> is declared at the interface header
export interface Action<T> {
  type: ActionTypes;
  payload?: T;
}

// creating types 
type Transducer = (state: State, action: Action<any>) => State;
type Reducer<T = any> = (state: State, payload?: T) => State;
// Transducer in redux terms is root reducer. In functional programming it is a map to say which reducer is going to be used

// Declaring variable that updates the excerpts
export const changeQuotes: Reducer<string[]> = (state, excerpts = []) => ({
  ...state,
  excerpts,
})

// Declaring variable that updates the input
export const changeInput: Reducer<string> = (state, input = '') => ({
  ...state,
  input,
  characters: countCorrectCharacters(state.text, state.input),
});

// Declaring variable to update the timerId which is optional
export const setTimer: Reducer<number> = (state, timerId) => ({
  ...state,
  // The reason the payload is optional is so that the timerId can become undefined from a number
  timerId,
});

// Update timer
export const tick: Reducer = (state) => ({
  ...state,
  seconds: state.seconds + 1,
});

// Manages the state and pushes the updates to the state and returns the state in the end.
export const reducer: Transducer = (state, action) => {
  switch(action.type){
    case ActionTypes.CHANGE_INPUT:
      return changeInput(state, action.payload);
    case ActionTypes.SET_TIMER:
      return setTimer(state, action.payload);
    case ActionTypes.UPDATE_QUOTES:
      return changeQuotes(state, action.payload);
    case ActionTypes.TICK:
      return tick(state);
    default: 
    return state;
  }
}