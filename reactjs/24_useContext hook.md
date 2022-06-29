# useContext() Hook

- Truyền dữ liệu từ component cha đến các component con mà không cần dùng đến props

- Ví dụ:

```jsx
// file: ThemeContext.js
import { useState, createContext } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const value = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
```

```jsx
// CompA => CompC
// Theme: Dark / Light

// 1. Create Context
// 2. Provider
// 3. Consumer

import { useContext } from "react";
import { ThemeProvider, ThemeContext } from "./ThemeContext";
import Content from "./Content";

export default function App() {
  const context = useContext(ThemeContext);

  return (
    <ThemeProvider>
      <div>
        <button onClick={context.toggleTheme}>Toggle theme</button>
        <Content />
      </div>
    </ThemeProvider>
  );
}
```

```jsx
import Paragraph from "./Paragraph";

export default function Content() {
  return (
    <div>
      <Paragraph />
    </div>
  );
}
```

```jsx
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Paragraph() {
  const context = useContext(ThemeContext);

  return (
    <div className={context.theme}>
      Ullamco nulla consequat sint sunt esse adipisicing in ipsum culpa non qui
      occaecat.
    </div>
  );
}
```

- Ví dụ: [Global State](./24_demo/)

# Redux vs React-Context

1. Debugging capabilities (Dễ dàng debug - React debug)
2. Middleware (Có kiên trúc dễ dàng apply middleware)
3. Addons and extensibility (Dễ mở rộng)
4. Cross-platform and cross-framework usage (Đa nền tảng)
5. Depending on your app's setup, much better performance than working with just Context
