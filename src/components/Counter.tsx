import React from "react";
import Button from "./Button";

interface ICounterProps {
  increment: () => void;
  incrementIfOdd: () => void;
  incrementAsync: () => void;
  decrement: () => void;
  counter: number;
}

const Counter: React.FC<ICounterProps> = ({ increment, incrementIfOdd, incrementAsync, decrement, counter }) => (
  <p>
    Clicked: {counter} times <Button onClick={increment}>+</Button> <Button onClick={decrement}>-</Button>{" "}
    <Button onClick={incrementIfOdd}>Increment if odd</Button>{" "}
    <Button onClick={() => incrementAsync()}>Increment async</Button>
  </p>
);

export default Counter;
