# React.memo()

- memo() -> Higher Order Component (HOC)
- memo() nhận vào component rồi check các props sau mỗi lần re-render có thay đổi
  nếu ít nhất 1 props bị thay đổi thì memo sẽ re-render lại component

```jsx
// file: Apps.js
import { useState } from "react";
import Content from "./Content";

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleIncrease = () => {
    setCount2(count2 + 1);
  };

  return (
    <div>
      <Content count={count} />
      <h1>{count}</h1>
      <h1>{count2}</h1>

      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleIncrease2}>Increase 2</button>
    </div>
  );
}

export default App;
```

```jsx
// file: Content.js
import {memo} from 'react'

function Content({count}){
    return (
        <h1>Hello {count}</h1>
        {console.log('re-render');}
    )
}

export default memo(Content);
```
