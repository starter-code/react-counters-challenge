import React from 'react';
import Counter from './Counter';

function Counters() {
  return (
    <div className="counters">
      <button>Add Counter</button>
      <button>Remove Last Counter Added</button>
      <Counter />
    </div>
  );
}

export default Counters;
