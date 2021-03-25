import React from 'react';

function Instructions() {
  return (
    <div className="instructions">
      <h4>Modify this code with the follow criteria:</h4>
      <ul>
        <li>
          "Add Counter" button should add a Counter component with the count
          starting at 5
        </li>
        <li>"Remove" button should remove the associated counter</li>
        <li>
          "Remove" button should not exist on the first Counter but on all other
          counters
        </li>
        <li>Total value should represent the sum of all Counter count value</li>
      </ul>
    </div>
  );
}

export default Instructions;
