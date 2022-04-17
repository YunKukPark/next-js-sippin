import React, { useState } from 'react';
import Seo from '../components/Seo';

function Home() {
  const [counter, setCounter] = useState(0);
  const increaseCount = () => setCounter(prev => prev + 1);
  return (
    <>
      <Seo title="Home"></Seo>
      <div>hi {counter}</div>
      <button onClick={increaseCount}>+</button>
    </>
  );
}

export default Home;
