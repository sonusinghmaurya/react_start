import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [IncDec, setIncDec] = useState(true);
  const [toggleTimer, setToggleTimer] = useState(null);

  const toggleOperation = () => {
    setCounter((prevCounter) => prevCounter + (IncDec ? 1 : -1));
  };

  const handleButtonClick = () => {
    clearTimeout(toggleTimer);
    toggleOperation();
    setToggleTimer(setTimeout(() => setIncDec((x) => !x), 1000));
  };

  return (
    <div className="container">
      <h1>Counter App</h1>
      <div className="counter-display">
        <h1>{counter}</h1>
      </div>
      <button onClick={handleButtonClick}>toggle</button>
    </div>
  );
}

export default App;
