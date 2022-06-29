# Hook - Gắn (gắn vào component)

- Hooks được thêm vào React từ phiên bản 16.8.0 để cạnh tranh function vs class

```Javascript
    import {
        useState,
        useEffect,
        useLayoutEffect,
        useRef,
        useCallback,
        useMemo,
        useReducer,
        useContext,
        useImperativeHandle,
        useDebugValue
    } from 'react';

    // Chưa dùng Hooks, chỉ là UI component
    function ComponentA() {
        return <h1>Haven't used hooks yet</h1>;
    }

    // Sử dụng hooks, hỗ trợ thêm nhiều tính năng
    function ComponentB(){
        // useState
        const [state, setState] = useState(initState);

        // useEffect
        useEffect(() => {

        }, [deps]);

        // useLayoutEffect
        useLayoutEffect(() => {

        }, [deps]);

        // useRef
        const ref = useRef();

        // useCallback
        const fn = useCallback(() => {

        }, [deps]);

        // useMemo
        const result = useMemo(() => {
            // return result for memo
        }, [deps]);

        // useReducer
        const [state, setState] = useReducer(reducer, initialArg, init);

        // useContext
        const value = useContext(MyContext);

        // useImperativeHandle
        useImperativeHandle(ref, createHandle, [deps]);

        // useDebugValue
        useDebugValue(isOnline ? "Online" : "Offline");

        return <h1>Hooks</h1>
    }
```

1. Chỉ dùng cho function component
2. Component đơn giản và dễ hiểu
   - Không bị chia logic ra như methods trong lifecycle (vòng đời) của Class Component
     (VD: Những logic xảy ra ở khác thời điểm nhưng lại có thể viết ở cạnh nhau)
   - Không cần sử dụng "this"
3. Sử dụng Hooks:
   - Dự án mới => Hooks
   - Dự án cũ
     - Component mới => Function component + Hooks
     - Component cũ => Giữ nguyên, có thời fgian tối ưu sau
   - Logic nghiệp vụ cần sử dụng các tính chất của OOP => Class component
4. Kết hợp sử dụng Function component & Class component

```Javascript
    // function component
    function Item({children}){
        return <li>{children}</li>
    }

    // class component
    class List extend React.Component{
        render(){
            return (
                <ul>
                    <Item>Javascript</Item>
                    <Item>HTML</Item>
                    <Item>ReactJS</Item>
                </ul>
            );
        }
    }
```
