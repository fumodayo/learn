# useEffect

- Events: Add / remove event listener
- Observer pattern: Subscribe / unsubscribe
- Close
- Timers: setInterval, setTimeout, clearInterval, clearTimeout
- useState
- mounted / unmounted

- useEffect được dùng để: (side effects)

  - update DOM
  - call API
  - Listen DOM events
    - scroll
    - resize
  - Cleanup
    - Remove listener / unsubscribe
    - Clear timer

1. useEffect(callback)

   - Gọi callback mỗi khi component re-render (ít dùng)
   - Gọi callback sau khi component thêm element vào DOM

   ```jsx
   // file: Content.js
   import { useEffect, useSate } from "react";

   function Content() {
     const [title, setTitle] = useState();

     useEffect(() => {
       console.log("mounted"); // nằm ở hàng đợi được vào sau
       document.title = title;
     });

     return (
       <div>
         <input value={title} onChange={(e) => setTitle(e.target.value)} />
         {console.log("render")} // render vào DOM được vào trước
       </div>
     );
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

2. useEffect (callback, [])

   - Chỉ gọi callback 1 lần sau khi component mounted

   ```jsx
   // file: Content.js

   import { useEffect, useSate } from "react";
   function Content() {
     const [posts, setPosts] = useState([]);

     useEffect(() => {
       fetch("https://jsonplaceholder.typicode.com/posts")
         .then((res) => res.json())
         .then((posts) => {
           setPosts(posts);
         });
     }, []);

     return (
       <div>
         <ul>
           {posts.map((post) => (
             <li key={post.id}>{post.title}</li>
           ))}
         </ul>
       </div>
     );
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

3. useEffect (callback, [deps])

   - Callback sẽ được gọi lại mỗi khi deps thay đổi

   ```jsx
   // file: Content.js
   import { useEffect, useSate } from "react";

   const tabs = ['posts', 'comments', 'albums'];

   function Content() {
       const [posts, setPosts] = useState([]);
       const [type, setType] = useState('posts');

       useEffect(() => {
           fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts);
            })
       }, [type]);

     return (
       <div>
        {tabs.map(tab => (
            <button
                key={tab}
                style={type === tab ? {
                    color: '#fff',
                    backgroundColor: '#333'
                } || {}}
                onClick={() => setType(tab)}
            >{tab}</button>
        ))}

        <ul>
            {posts.map( post => (
                    <li key={post.id}>{post.title || post.name}</li>
                ))}
        </ul>
       </div>
    );
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

4. chung cả 3:
   - Callback luôn được gọi sau khi component mounted
   - Cleanup function luôn được gọi trước khi component unmounted
   - Cleanup function luôn được gọi trước khi callback được gọi (trừ lần mounted)

# useEffect() width DOM events

```jsx
// file: Content.js
import { useEffect, useSate } from "react";

const tabs = ['posts', 'comments', 'albums'];

function Content() {
    const [posts, setPosts] = useState([]);
    const [type, setType] = useState('posts');
    const [showGoToTop, setShowGoToTop] = useState(false);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
         .then(res => res.json())
         .then(posts => {
             setPosts(posts);
         })
    }, [type]);

    useEffect(() => {
      const handleScroll = () => {
         if(window.scrollY >= 200) {
           setShowGoToTop(true);
         }else{
           setShowGoToTop(false);
         }

         //setShowGoToTop(window.scrollY >= 200);
      }
      window.addEventListener('scroll', handleScroll);
      console.log("addEventListener");

      // Cleanup function
      return () => {
        window.removeEventListener('scroll', handleScroll);
        console.log("removeEventListener");
      }
    }, []);

  return (
    <div>
     {tabs.map(tab => (
         <button
             key={tab}
             style={type === tab ? {
                 color: '#fff',
                 backgroundColor: '#333'
             } || {}}
             onClick={() => setType(tab)}
         >{tab}</button>
     ))}

     <ul>
         {posts.map( post => (
                 <li key={post.id}>{post.title || post.name}</li>
             ))}
     </ul>
     {showGoToTop && (
       <button
        style={{
          position: 'fixed',
          right: 20px,
          bottom: 20px
        }}
       > Go to top
       </button>
     )}
    </div>
 );
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

```jsx
// file: Content.js
import { useEffect, useSate } from "react";

function Content() {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <h1>{width}</h1>
    </div>
  );
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

# useEffect with timer functions

```jsx
// file: Content.js
import { useEffect, useSate } from "react";

function Content() {
  const [countdown, setCountDown] = useState(180);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCountdown(countdown - 1);
  //   }, 1000)
  // }, [countdown]);

  return (
    <div>
      <h1>{countdown}</h1>
    </div>
  );
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

# useEffect() with preview avatar

```jsx
// file: Content.js
import { useEffect, useSate } from "react";

function Content() {
  const [avatar, setAvatar] = useState();

  useEffect(() => {
    // Cleanup
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview);
    };
  }, [avatar]);

  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0];

    file.preview = URL.createObjectURL(file);

    setAvatar(file);

    e.target.value = null; // Chon nhieu anh giong nhau

    console.log(123);
  };
  return (
    <div>
      <input type="file" onChange={handlePreviewAvatar} />
      {avatar && <img src={avatar.preview} alt="" width="80%" />}
    </div>
  );
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

# useEffect with fake Chat App

```jsx
// file: index.js

//fake comments
function emitComment(id) {
  setInterval(() => {
    window.dispatchEvent(
      new CustomEvent(`lesson-${id}`, {
        detail: `Noi dung comment cua lesson ${id}`,
      })
    );
  }, 2000);
}

emitComment(1);
emitComment(2);
emitComment(3);
```

```jsx
// file: Content.js
import { useState, useEffect } from "react";
const lessons = [
  {
    id: 1,
    name: "ReactJS la gi",
  },
  {
    id: 2,
    name: "SPA, MPA la gi",
  },
  {
    id: 3,
    name: "On lai ES 6+",
  },
];

function Content() {
  const [lessonId, setLessonId] = useState(1);

  useEffect(() => {
    const handleComment = ({ detail }) => {
      console.log(detail);
    };

    window.addEventListener(`lesson-${lessonId}`, handleComment);

    return () => {
      window.removeEventListener(`lesson-${lessonId}`, handleComment);
    };
  }, [lessonId]);

  return (
    <div>
      <ul>
        {lessons.map((lesson) => (
          <li
            key={lesson.id}
            style={{ color: lessonId === lesson.id ? "red" : "#333" }}
            onClick={() => setLessonId(lesson.id)}
          >
            {lesson.name}
          </li>
        ))}
      </ul>
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
