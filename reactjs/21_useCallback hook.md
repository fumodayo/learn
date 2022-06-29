# useCallback() hook

- Giúp tránh tạo ra 1 function mới một cách không cần thiết trong function component
- Reference types
- React memo()

```jsx
// file: Apps.js
import { useState, useCallback } from "react";
import Content from "./Content";

function App() {
  const [count, setCount] = useState(0);

  // const a = () => {}; const b = () => {} ; a === b // false
  const handleIncrease = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <Content onIncrease={handleIncrease} />
      <h1>{count}</h1>
    </div>
  );
}

export default App;
```

```jsx
// file: Content.js
import { memo } from "react";

function Content({ onIncrease }) {
  console.log("re-render");
  return (
    <>
      <h1>Hello</h1>
      <button onClick={onIncrease}>Click me</button>
    </>
  );
}

export default memo(Content);
```
