import React, { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);

  const onIncrement = () => {
    setCounter(counter + 1);
  };

  const onDecrement = () => {
    setCounter(counter - 1);
  };

  const onRemove = () => {
    console.warn('Fill in this logic to remove this counter');
  };

  return (
    <div className="counter">
      <span>Count: {counter}</span>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
}

export default Counter;
