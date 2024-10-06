import { useState, useEffect } from 'react';

function App (){
  return(
    <div>
      <Counter></Counter>
    </div>
  )
}

function Counter(){
  
  let [count, setCount] = useState(0);

  // hooking into the livecycle events of the component

  console.log("render function called");

  useEffect(() => {
    setInterval(function() {
      setCount(count + 1);
    }, 1000);
  }, []);

  function increase(){
    setCount(count + 1);
  }

  return (
    <div>
      <h1 id="text">{count}</h1>
      <br></br>
      <button onClick={increase}>Increase</button>  
    </div>
  )

}

export default App;