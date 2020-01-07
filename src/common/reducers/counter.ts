import { SET_COUNTER, INCREMENT_COUNTER, DECREMENT_COUNTER } from "../actions";
import { TAllowedActions } from "../actions/index";

const initialState = 0;

const counter = (state = initialState, action: TAllowedActions) => {
  switch (action.type) {
    case SET_COUNTER:
      return action.payload;
    case INCREMENT_COUNTER:
      return state + 1;
    case DECREMENT_COUNTER:
      return state - 1;
    default:
      return state;
  }
};

export type TCounterState = ReturnType<typeof counter>;
export default counter;
