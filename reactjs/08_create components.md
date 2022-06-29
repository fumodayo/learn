# Create components

```Javascript
    const Form = {
        Input(){
            return <input/>
        },
        CheckBox(){
            return <input type="checkbox"/>
        }
    };

    function App() {
        const type = 'CheckBox';

        const Component = Form[type];

        return(
            <div id="wrapper">
                <Form.Input/>
                <Component/>
            </div>
        )
    };

    ReactDOM.render(<App/>, document.getElementById('root'));
```

```Javascript
    function Button({title, href, onClick}){
        let Component = 'button';
        const props = {};

        if(href){
            Component = 'a';
            props.href = href;
        }

        if(onClick){
            props.onClick = onClick;
        }

        return(
            <Component {...props} /* spread: onClick = {onClick}*/>{props.title}</Component>
        )
    }

    function App (){
        return (
            <div id="wrapper">
                <Button
                    title="click me"
                    href="https://www.google.com/"
                    onClick={() => console.log(Math.random())}
                />
            </div>
        )
    }

    ReactDOM.render(<App/>, document.getElementById('root'));
```

- Boolean, Null & undefined không được render
- Kết hợp toán tử logic để được render theo điều kiện

```Javascript
    function App(){
        let firstAccess = true;
        return(
            <div id="wrapper">
                {firstAccess && <h1>Welcome</h1>}
            </div>
        )
    }

    ReactDOM.render(<App/>, document.getElementById('root')); 
    // output: Welcome
```

```Javascript
    function App({title, content}){
        return(
            <div id="wrapper">
                {title || content}
            </div>
        )
    }

    ReactDOM.render(<App/>, document.getElementById('root')); 
    // output: undefined
```