/* import { useState, useEffect } from "react";

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-4">Stopwatch</h1>
      <p className="text-4xl font-mono mb-6">{time} sec</p>
      <div className="space-x-4">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className="px-4 py-2 bg-blue-500 rounded-lg"
        >
          {isRunning ? "Pause" : "Start"}
        </button>
        <button
          onClick={() => {
            setTime(0);
            setIsRunning(false);
          }}
          className="px-4 py-2 bg-red-500 rounded-lg"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
 */

import { useState, useEffect } from "react";

export default function Timer() {
  const [time, setTime] = useState(60); // Default 60 seconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setIsRunning(false); // Stop when timer reaches 0
    }

    return () => clearInterval(interval);
  }, [isRunning, time]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-4">Countdown Timer</h1>
      <p className="text-4xl font-mono mb-6">{time} sec</p>
      <div className="space-x-4">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className="px-4 py-2 bg-blue-500 rounded-lg"
        >
          {isRunning ? "Pause" : "Start"}
        </button>
        <button
          onClick={() => {
            setTime(60); // Reset to 60 seconds
            setIsRunning(false);
          }}
          className="px-4 py-2 bg-red-500 rounded-lg"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

  
