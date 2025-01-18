import { useState } from "react";

const useCounter = (initialVal: number = 0) => {
  const [count, setCount] = useState<number>(initialVal);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  const reset = () => {
    setCount(initialVal);
  };

  return { count, increment, decrement, reset };
};

export default useCounter;