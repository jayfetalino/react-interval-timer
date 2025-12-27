// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


// App.jsx
// Interval timer with start, pause, and reset.

import { useState, useEffect } from "react";

function App() {
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [isRunning,setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) {
      return; 
    }

    const intervalId = setInterval(() => {
      setSecondsLeft((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => { 
      clearInterval(intervalId);
    };
  }, [isRunning]);

  return (
    <main>
      <h1>Interval Timer</h1>

      <p>Seconds left: {secondsLeft}</p>

      <button onClick={() => setSecondsLeft(60)}>Set 60s</button>
      <button onClick={() => setSecondsLeft(30)}>Set 30s</button>
      <button onClick={() => setIsRunning(true)}>Start</button>
      <button onClick={() => setIsRunning(false)}>Pause</button>
      <button onClick={() => setSecondsLeft(0)}>Reset</button>
    </main>
  );
}

export default App;