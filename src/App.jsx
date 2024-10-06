import { useState } from 'react';

function App (){
  return(
    <div>
      <Counter></Counter>
    </div>
  )
}

function Counter(){
  
  let [count, setCount] = useState(0);

  console.log("render function called");
  setInterval(() => {
    setCount(count + 1);
  }, 1000);

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