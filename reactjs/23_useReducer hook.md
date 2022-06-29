# useReducer() hook

- Dùng giống useState nhưng được dùng trong các State phức tạp như {{}} hay là nhiều State phụ thuộc nhau

```jsx
import { useState } from "react";

// useState
// 1. Init state: 0
// 2. Actions: Up (state + 1) / Down (state - 1)

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>Down</button>
      <button onClick={() => setCount(count + 1)}>Up</button>
    </div>
  );
}

export default App;
```

```jsx
// useReducer
// 1. Init state: 0
// 2. Actions: Up (state + 1) / Down (state - 1)
// 3. Reducer
// 4. Dispatch

// 1. Init state: 0
const initState = 0;

// 2. Actions: Up (state + 1) / Down (state - 1)
const UP_ACTION = "up";
const DOWN_ACTION = "down";

// 3. Reducer
const reducer = (state, action) => {
  console.log("reducer running");
  switch (action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      throw new Error("Invalid action");
  }
};

import { useReducer } from "react";

function App() {
  const [count, dispatch] = useReducer(reducer, initState);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
      <button onClick={() => dispatch(UP_ACTION)}>Up</button>
    </div>
  );
}

export default App;
```

- Ví dụ : Todo App

```jsx
import { useReducer, useRef } from "react";

// useReducer
// 1. Init State
const initState = {
  job: "",
  jobs: [],
};

// 2. Action
const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DELETE_JOB = "delete_job";

const setJob = (payload) => {
  return {
    type: SET_JOB,
    payload,
  };
};

const addJob = (payload) => {
  return {
    type: ADD_JOB,
    payload,
  };
};

const deleteJob = (payload) => {
  return {
    type: DELETE_JOB,
    payload,
  };
};

// 3. Reducer
const reducer = (state, action) => {
  console.log("Action:", action);
  console.log("PrevState:", state);

  let newState;

  switch (action.type) {
    case SET_JOB:
      newState = {
        ...state,
        job: action.payload,
      };
      break;
    case ADD_JOB:
      newState = {
        ...state,
        // job: '',
        jobs: [...state.jobs, action.payload],
      };
      break;
    case DELETE_JOB:
      const newJobs = [...state.jobs];

      newJobs.splice(action.payload, 1);
      newState = {
        ...state,
        jobs: newJobs,
      };

      break;
    default:
      throw new Error("Invalid action");
  }

  console.log("State", newState);
  return newState;
};

// 4. Dispatch

function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { job, jobs } = state;

  const inputRef = useRef();

  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(""));

    inputRef.current.focus();
  };

  return (
    <div>
      <h3>Todo</h3>
      <input
        ref={inputRef}
        value={job}
        placeHolder="Enter todo..."
        onChange={(e) => {
          // e.target.value
          dispatch(setJob(e.target.value));
        }}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <span onClick={() => dispatch(deleteJob(index))}>&time;</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```
