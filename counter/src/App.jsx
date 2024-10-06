import { useState, useEffect } from 'react';

function App (){
  let counterVisible = true;
  return(
    <div>
      { counterVisible ? <Counter></Counter> : null}
      { counterVisible && <Counter></Counter>}
    </div>
  )
}

function Counter(){
  
  let [count, setCount] = useState(0);

  // hooking into the livecycle events of the component

  console.log("render function called");

  useEffect(function (){
    setInterval(function() {
      setCount(function(currentCount) {
        return currentCount + 1;
      });
    }, 1000);
    console.log("component did mount");
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