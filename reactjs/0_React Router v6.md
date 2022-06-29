# React Router v6

```jsx
// file : index.js
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

    ...
    <Router>
        <App/>
    </Router>
    ...
```

```jsx
// file : App.js
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/Home";
import ContactPage from "./pages/Contact";
import NewsPage from "./pages/News";

function App() {
  return (
    <div id="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
```

```jsx
// file: pages/ HomePage.js

function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

export default Home;
```

```jsx
// file: pages/ NewsPage.js

function News() {
  return (
    <div>
      <h1>News</h1>
    </div>
  );
}

export default News;
```

```jsx
// file: pages/ Contact.js

function Contact() {
  return (
    <div>
      <h1>Contact</h1>
    </div>
  );
}

export default Contact;
```
