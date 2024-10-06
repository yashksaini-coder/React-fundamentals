import React, { useState } from 'react';

function App (){
  return(
    <div>
      <Counter></Counter>
    </div>
  )
}

function Counter(){
  
  let [count, setCount] = useState(0);

  setInterval(() => {
    setCount(count + 1);
  }, 1000);

  return (
    <div>
      <h1 id="text">{count}</h1>
    </div>
  )

}

export default App;