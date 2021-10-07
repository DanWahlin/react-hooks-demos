import React, { useState, useEffect, useRef } from 'react';

function Timer() {

  const [counter, setCounter] = useState(0);
  let timerId = useRef(null);

  useEffect(() => {
    console.log('Hello useEffect');
  }, [counter]);

  const startTimer = () => {
   timerId.current = setInterval(() => {
     // setCounter(counter + 1); // Won't work right due to closure
     setCounter(counter => counter + 1);
   }, 1000);
  };

  const clearTimer = () => {
    clearInterval(timerId.current);
    setCounter(0);
    console.clear();
  }

  return (
    <div>
      <h1>Timer</h1>
      <button onClick={startTimer}>Start Timer</button>
      &nbsp;&nbsp;
      <button onClick={clearTimer}>Clear Timer</button>
      <br /><br />
      {counter}
    </div>
    
  )

}

export default Timer;