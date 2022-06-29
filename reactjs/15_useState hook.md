# useState (Trạng thái của dữ liệu)

## Dùng khi nào?

- Khi muốn dữ liệu thay đổi thì giao diện tự động được cập nhật (render lại theo dữ liệu)

## Cách dùng

```jsx
    import {useState} from 'react';

    function Component(){
        const [state, setState] = useState(initState);

        ...
    }
```

```jsx
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(1);

  const handleIncrease = () => {
    setCounter(counter + 1); // 2
    setCounter(counter + 1); // 2
    setCounter(counter + 1); // 2
  };

  console.log("re-render"); // 1 lan

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

export default App;
```

- Lưu ý:

  - Component được re-render sau khi `setState`
  - `Initial State` chỉ dùng cho lần đầu

  - `set State`với `callback`

    ```jsx
    import { useState } from "react";

    function App() {
      const [counter, setCounter] = useState(1);

      const handleIncrease = () => {
        setCounter((prevState) => prevState + 1); // 2
        setCounter((prevState) => prevState + 1); // 3
        setCounter((prevState) => prevState + 1); // 4
      };

      console.log("re-render"); // 1 lan

      return (
        <div className="App">
          <h1>{counter}</h1>
          <button onClick={handleIncrease}>Increase</button>
        </div>
      );
    }

    export default App;
    ```

  - `Initial state` với callback

    ```jsx
    import { useState } from "react";

    const orders = [100, 200, 300];

    function App() {
      const [counter, setCounter] = useState(() => {
        const total = order.reduce((total, cur) => total + cur);
        console.log(total); // 600
        return total;
      }); // initial state sẽ lấy giá trị return 1 lần mà không cần tính lại ở lần thứ 2

      const handleIncrease = () => {
        setCounter(counter + 1); // 601
      };

      return (
        <div className="App">
          <h1>{counter}</h1>
          <button onClick={handleIncrease}>Increase</button>
        </div>
      );
    }
    ```

  - `Set state` là thay thế state bằng giá trị mới

    ```jsx
    import { useState } from "react";

    function App() {
      const [info, setInfo] = useState({
        name: "Son Thai",
        age: 21,
      });

      const handleUpdate = () => {
        setInfo({
          ...info,
          address: "da nang", // {'name': 'Son Thai', 'age': 21, 'address': 'da nang'}
        });
      };

      return (
        <div id="App">
          <h1>{JSON.stringify(info)}</h1>
          <button onClick={handleUpdate}>Update</button>
        </div>
      );
    }

    export default App;
    ```

```jsx
import { useState } from "react";
const gifts = ["CPU i9", "RAM 32GB", "RGB Keyboard"];

function App() {
  const [gift, setGift] = useState();

  const randomGift = () => {
    const index = Math.floor(Math.random() * gifts.length);
    setGift(gifts[index]);
  };

  return (
    <div id="App">
      <h1>{gift || "Chưa có phần thưởng"}</h1>
      <button onClick={randomGift}>Lấy thưởng</button>
    </div>
  );
}

export default App;
```

# Two-way Binding

- One-way Binding

```jsx
import { useState } from "react";

const [name, setName] = useState("");
console.log(name); // Nguyen Van A

function App() {
  return (
    <div id="App">
      <input onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setName("Nguyen Van B")}></button>
    </div>
  );
}

export default App;
```

_Chỉ thay đổi value bên trong mà không thay đổi giao diện bên ngoài_

- Two-way Binding

```jsx
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  console.log(name); // Nguyen Van A

  return (
    <div id="App">
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setName("Nguyen Van B")}></button>
    </div>
  );
}

export default App;
```

_Thay đổi value bên trong, thay đổi luôn giao diện bên ngoài_

```jsx
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log({
      name,
      email,
    });
  };

  return (
    <div id="App">
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
```

```jsx
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log({
      name,
      email,
    });
  };

  return (
    <div id="App">
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
```

- Radio Button

```jsx
import { useState } from "react";
courses = [
  {
    id: 1,
    name: "HTML,CSS",
  },
  {
    id: 2,
    name: "ReactJS",
  },
  {
    id: 3,
    name: "NodeJS",
  },
];
function App() {
  const [checked, setChecked] = useState(2);

  const handleSubmit = () => {
    console.log({ id: checked });
  };

  return (
    <div id="App">
      {courses.map((course) => (
        <div key={course.id}>
          <input
            type="radio"
            onChange={() => setChecked(checked.id)}
            checked={checked === course.id}
          />
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
```

- Check Box

```jsx
import { useState } from "react";
courses = [
  {
    id: 1,
    name: "HTML,CSS",
  },
  {
    id: 2,
    name: "ReactJS",
  },
  {
    id: 3,
    name: "NodeJS",
  },
];
function App() {
  const [checked, setChecked] = useState([]);

  const handleCheck = (id) => {
    setChecked((prev) => {
      const isChecked = checked.includes(id);
      if (isChecked) {
        // Nếu có id và trả về true thì
        // Unchecked
        return checked.filter((item) => item !== id); // Hàm sẽ trả về item khác với id trùng
      } else {
        return [...prev, id];
      }
    });
  };

  const handleSubmit = () => {
    console.log({ ids: checked });
  };

  return (
    <div id="App">
      {courses.map((course) => (
        <div key={course.id}>
          <input
            type="checkbox"
            onChange={() => handleCheck(course.id)}
            checked={
              checked.includes(
                course.id
              ) /*so sánh xem trong checked có id trùng thì trả về true*/
            }
          />
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
```

- Todo List

```jsx
import { useState } from "react";

function App() {
  
  const [job, setJob] = useState("");

  const [jobs, setJobs] = useState(() => {

    const storageJobs = JSON.parse(localStorage.getItem("jobs"));
    return storageJobs;

  } ?? []); // Nếu storageJobs là undefined hoặc null thì dùng []

  const handleSubmit = () => {
    setJobs((prev) => {
      const newJobs = [...prev, job];

      // Save to local storage
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem("jobs", jsonJobs);

      return newJobs;
    });

    setJob("");
  };

  return (
    <div id="App">
      <input value={job} onChange={(e) => setJob(e.target.value)} />

      {jobs.map((job, index) => (
        <li key={index}>{job}</li>
      ))}

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
```
