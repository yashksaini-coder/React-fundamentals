import './App.css'
import { useState } from 'react';
import PropTypes from 'prop-types';
function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <LightBulb />
    </div>
  )
}

BulbState.propTypes = {
  bulbOn: PropTypes.bool.isRequired,
};

function BulbState({ bulbOn }) {
  return <h2>{bulbOn ? "Bulb is on" : "Bulb is off"}</h2>;
}

function LightBulb() {
    const [bulbOn, setBulbOn] = useState(true);
    return (
        <>
            <BulbState bulbOn={bulbOn} />
            <ToggleBulb setBulbOn={setBulbOn} />
        </>
    )
}

ToggleBulb.propTypes = {
    setBulbOn: PropTypes.func.isRequired,
};

function ToggleBulb({ setBulbOn }) {
    return <button onClick={() => setBulbOn(prev => !prev)}>Toggle Bulb</button>;
}

export default App
