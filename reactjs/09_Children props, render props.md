# Props trong JSX

```Javascript
<YourComponent
    propName1="String literals"
    propName2={expression}
/>
```

- Props default to `true`

```Javascript
  function Button({title, primary}){
      console.log(primary); // true
      return <button>{title}</button>
  }

  function App(){
      return(
          <div id="wrapper">
              <Button primary title={title}/>
          </div>
      )
  }

  ReactDOM.render(<App/>, document.getElementById('root'));
```

- Children Props

```Javascript
<YourComponent
    propName1="String literals"
    propName2={expression}
/>
```

```Javascript
  function Button({children}){
      return <button>{children}</button>
  }

  function App(){
      return(
          <div id="wrapper">
              <Button>{false || 'Click me!'}</Button>
          </div>
      )
  }

  ReactDOM.render(<App/>, document.getElementById('root'));
```

```Javascript
    function List({data, children}){
        return (
            <ul>
                {data.map((item, index /*...props*/) => children(item, index /*...props*/))}
            </ul>
        )
    }
    
    function App(){
        const cars = ['BWM', 'Honda', 'Mazda'];
        return(
            <div id="wrapper">
                <List data={cars}>
                    {(item, index) => <li key={index}>{item}</li>}
                </List>
            </div>
        )
    }

    ReactDOM.render(<App/>, document.getElementById('root'));
```

- Spread / Rest props

```Javascript
  function Input({label, ...inputProps}){
      return(
          <div>
            <label>{label}</label>
            <input {...inputProps}/>
          </div>
      )
  }

  function App(){
      return(
          <Input
            label="Full Name"
            type="text"
            placeholder="Enter name..."
            onFocus={() => {
                console.log(Math.random());
            }}
          />
      )
  }

  ReactDOM.render(<App/>, document.getElementById('root'));
```
