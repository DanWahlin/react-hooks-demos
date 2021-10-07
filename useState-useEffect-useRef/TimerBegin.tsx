import React from 'react';

function TimerBegin() {
  const counter = 0;

  const startTimer = () => {
   
  };

  const clearTimer = () => {

    console.clear();
  }

  return (
    <div>
      <h1>Hello!</h1>
      <button onClick={startTimer}>Start Timer</button>
      &nbsp;&nbsp;
      <button onClick={clearTimer}>Clear Timer</button>
      <br /><br />
      {counter}
    </div>
    
  )

}

export default TimerBegin;
