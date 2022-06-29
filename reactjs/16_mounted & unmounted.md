# Mounted / Unmounted

```jsx
// file: Content.js

function Content() {
  return <h1> Hi </h1>;
}

export default Content;
```

```jsx
// file : App.js
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

_Tại thời điểm nó được sử dùng thì được gọi là mounted / unmounted thì ngược lại_
