# Redux

1. Một số lưu ý quan trọng trước khi bắt đầu tìm hiểu Redux

   - HTML, CSS
   - ES 6+
   - React: Props, state, Function Component, React Hooks,...
   - Async trong JS

2. Redux là gì

- Là một thư viện JS dùng để quản lý và cập nhật state của ứng dụng
- Là một PATTERN (khuôn mẫu)

3. Vì sao phải sử dụng Redux (Redux Toolkit)

- Quản lí Global state
  - Các component tại mọi nơi trong ứng dụng có thể truy xuất và cập nhật
  - Giải quyết vấn đề của React khi muốn truyền dữ liệu vào các cấp con cháu
- Dễ dàng debug
- Xử lý caching dữ liệu từ Server
- Redux toolkit sinh ra để gairi quyết các vấn đề đối với Redux Core:
  - Việc cấu hình (config) Redux phức tạp
  - Phải cài đặt thủ công nhiều packages để Redux có thể hoạt động hiệu quả
  - Redux yêu cầu rất nhiều boilerplate code (code lặp đi lặp lại nhiều lần)

4. Khi nào nên sử dụng Redux

- Dự án có số lượng lớn state và các state được sử dụng ở nhiều nơi
- State được cập nhật thường xuyên
- Logic code cập nhật state phức tạp
- Ứng dụng có số lượng code trung bình hoặc lớn và có nhiều người làm chung
- Cần debug và muốn xem cách state được cập nhật tại bất kì khoảng thời gian nào

5. Kiến trúc của Redux và các khái niệm cần nắm

- State management

```jsx
function Counter() {
  // State: a counter value
  const [counter, setCounter] = useState(0);

  // Action: code that causes an update to the state when some thing happens
  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1);

    // View
    return (
      <div>
        value: {counter}
        <button onClick={increment}>Increment</button>
      </div>
    );
  };
}
```

- Immutability (Bất biến)

```jsx
// mutation : Khong nen dung trong REDUX
const obj = { a: 1, b: 2 };
obj.b = 3;

const arr = ["a", "b"];
arr.push("c");
arr[1] = "d";
```

```jsx
// immutation : Nen dung trong REDUX
const obj = {
  a: {
    c: 3,
  },
  b: 2,
};

const obj2 = {
  ...obj,
  a: {
    ...obj.a,
    // Thay doi gia tri c
    c: 42,
  },
};

// copy va tao ra su thay doi
const arr = ["a", "b"];
const arr2 = arr.concat("c");

const arr3 = arr.slice();
arr3.push("c");
```

- Kiến trúc Redux
  ![Ảnh ví dụ](https://redux.js.org/assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif)

- REDUCERS

  - Là 1 function (dùng để cập nhật lại giá trị state ở trong kho, kiểm tra action là gì rồi cập nhật state tương ứng)
  - Giá trị state mới luôn được tính toán dự trên giá trị state trước đó
  - Không được thay đổi giá trị state hiện tại
  - Không được dùng code bất đồng bộ,không dự đoán được ở trong function reducer( Math.random(), Date.now(), Request tới Server...)
  - PURE FUNCTION (Dự đoán được)

  ```jsx
  const initValue = { value: 0 };
  const rootReducer = (state = initValue, action) => {
    // Action
    /**
    {
        type: "todoList/increment",
        payload: 10,
    };
    **/

    // predictable (Dự đoán được)
    switch (action.type) {
      case "INCREMENT":
        // Immutability
        return {
          ...state,
          value: state.value + 1,
        };
      // => { value: 1; }
      case "todoList/increment":
        return {
          ...state,
          value: state.value + action.payload,
        };
      // => { value: 10; }

      default:
        return state;
    }
  };
  ```

- ACTION

  - Là 1 object

  ```jsx
  const INCREMENT = {
    type: "todoList/increment",
    payload: 10,
  };

  // Action creators
  const incrementCreator = (data) => {
    return {
      type: "todoList/increment123",
      payload: data,
    };
  };

  incrementCreator(10);
  ```

- DISPATCH

  - Là 1 function

  ```jsx
  dispatch(INCREMENT);
  /** 
    {
        type: "todoList/increment",
        payload: 10,
    };
  **/

  dispatch(incrementCreator(15));
  /** 
    {
        type: "todoList/increment123",
        payload: 15,
    };
  **/
  ```

6. Ví dụ:
