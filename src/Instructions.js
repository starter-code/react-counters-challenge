import React from 'react';

function Instructions() {
  return (
    <div className="instructions">
      <h4>Modify this code with the follow criteria:</h4>
      <ul>
        <li>
          "Add Counter" button should add an entire counter with the count
          starting at 5
        </li>
        <li>
          "Remove Last Counter Added" button should remove the last counter
          created by "Add Counter" button
        </li>
        <li>Total value should represent the sum of all counters</li>
      </ul>
    </div>
  );
}

export default Instructions;
