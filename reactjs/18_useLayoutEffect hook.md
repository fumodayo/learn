# useLayoutEffect hook

## useEffect

1. Cập nhật lại state
2. Cập nhật DOM (mutated)
3. Render lại UI
4. Gọi cleanup nếu deps thay đổi
5. Gọi Effect callback

## useLayoutEffect

1. Cập nhật lại state
2. Cập nhật DOM (mutated)
3. Gọi cleanup nếu deps thay đổi (sync)
4. Gọi useLayoutEffect callback (sync)
5. Render lại UI

```jsx
// file: Content.js
import { ueState, useLayoutEffect } from "react";

function Content() {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    if (count > 3) setCount(0);
  }, [count]);

  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleCount}>Run</button>
    </div>
  );
}

export default Content;
```

```jsx
// file: App.js
import { useState } from "react";
import Content from "./Content";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div id="App">
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Content />}
    </div>
  );
}

export default App;
```
