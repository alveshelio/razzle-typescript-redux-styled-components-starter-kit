import { createSelector } from "reselect";
import { AppState } from "../reducers/index";

const getCounterState = (state: AppState) => state.counter;

export const getCounterSelector = createSelector(getCounterState, counter => counter);
