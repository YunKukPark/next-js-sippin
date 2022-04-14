import React, { useState } from 'react';
import Navbar from '../components/Navbar';

function Home() {
  const [counter, setCounter] = useState(0);
  const increaseCount = () => setCounter(prev => prev + 1);
  return (
    <>
      <Navbar />
      <div>hi {counter}</div>
      <button onClick={increaseCount}>+</button>
    </>
  );
}

export default Home;
