export const SET_COUNTER = "SET_COUNTER";
export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";

export interface ISetCounter {
  type: typeof SET_COUNTER;
  payload: number;
}
export const set = (value: number): ISetCounter => ({
  type: SET_COUNTER,
  payload: value,
});

interface IIncrement {
  type: typeof INCREMENT_COUNTER;
}

export const increment = (): IIncrement => ({
  type: INCREMENT_COUNTER,
});

export interface IDecrement {
  type: typeof DECREMENT_COUNTER;
}

export const decrement = (): IDecrement => ({
  type: DECREMENT_COUNTER,
});

export const incrementIfOdd = () => (dispatch: any, getState: any) => {
  const { counter } = getState();

  if (counter % 2 === 0) {
    return;
  }

  dispatch(increment());
};

export const incrementAsync = (delay = 1000) => (dispatch: any) => {
  setTimeout(() => {
    dispatch(increment());
  }, delay);
};

export type TAllowedActions = ISetCounter | IIncrement | IDecrement;
