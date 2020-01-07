import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Counter from "./Counter";
import * as CounterActions from "../common/actions";
import { getCounterSelector } from "../common/selectors/counter";

const CounterContainer = () => {
  const counter = useSelector(getCounterSelector);
  const dispatch = useDispatch();
  const increment = () => dispatch(CounterActions.increment());
  const incrementIfOdd = () => dispatch(CounterActions.incrementIfOdd());
  const incrementAsync = () => dispatch(CounterActions.incrementAsync());
  const decrement = () => dispatch(CounterActions.decrement());

  return (
    <Counter
      increment={increment}
      incrementIfOdd={incrementIfOdd}
      incrementAsync={incrementAsync}
      decrement={decrement}
      counter={counter}
    />
  );
};

export default CounterContainer;
