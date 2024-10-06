import { useState, useEffect } from 'react';

function App() {
  const [counterVisible, setCounterVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounterVisible(prev => !prev);
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div>
      {counterVisible ? <Counter /> : null}
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(currentCount => currentCount + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  function increase() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1 id="text">{count}</h1>
      <br />
      <button onClick={increase}>Increase</button>
    </div>
  );
}

export default App;