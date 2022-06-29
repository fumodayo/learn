# useRef Hook

- Lưu các giá trị qua một tham chiếu bên ngoài

```jsx
import { useRef, useState, useEffect } from "react";

// timerId

function App() {
  const [count, setCount] = useState(60);

  const timerId = useRef();
  const prevCount = useRef();

  const handleStart = () => {
    timerId.current = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    console.log("Start", timerId.current);
  };

  const handleStop = () => {
    clearInterval(timerId.current);

    console.log("Stop", timerId.current);
  };

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  console.log(count, prevCount);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default App;
```
