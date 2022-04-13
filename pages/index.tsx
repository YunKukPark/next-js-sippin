import React, { useState } from 'react';

function Home() {
  const [counter, setCounter] = useState(0);
  const increaseCount = () => setCounter(prev => prev + 1);
  return (
    <>
      <div>hi {counter}</div>
      <button onClick={increaseCount}>+</button>
    </>
  );
}

export default Home;
