import React, { useState } from 'react';

function App (){
  return (
    <div>
      <Counter></Counter>
    </div>
  )
}

function Counter(){
  
  let [count, setCount] = useState(0);

  function increase(){
    setCount(count + 1);
  }

  function decrease(){
    setCount(count - 1);
  }

  function reset(){
    setCount(count = 0);
  }

  return (
    <div>
      <h1 id="text">{count}</h1>
      <button onClick={increase}>Increase</button>
      <br></br>
      <button onClick={decrease}>Decrease</button>
      <br></br>
      <button onClick={reset}>Reset</button>
    </div>
  )

}

export default App;