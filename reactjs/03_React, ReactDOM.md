# document.createElement();

```Javascript
    // HTML
    <div id="root"></div>

    // Javascript
    const root = document.getElementById('root');
    const h1 = document.createElement('h1');

    h1.innerText = 'Hello';
    h1.className = 'heading';
    h1.style = 'color: red; font-size: 20px;';

    Object.assign(h1.style, {
        color: 'blue',
        backgroundColor: '#333'
    });

    console.dir(h1); // Object cua : h1.heading

    root.appendChild(h1); // render ra: Hello!
```

# Add React to Website

1. [Github](https://github.com/facebook/react)
2. [NPMJS - Node Package Manager](https://www.npmjs.com/package/react)
3. [UNPKG](https://unpkg.com/react@17.0.0/umd/react.production.min.js)

```Javascript
    // React
    <script crossorigin src="https://unpkg.com/react@17.0.0/umd/react.production.min.js"></script>

    // ReactDOM
    <script crossorigin src="https://unpkg.com/react-dom@17.0.0/umd/react-dom.production.min.js"></script> 
```

4. [Official docs](https://reactjs.org/docs/getting-started.html)

# React.createElement();
- React.createElement() -> React element
- document.createElement() -> DOM element

```Javascript
    // HTML
    <h1 title="Hello" class="heading">Hello !</h1>

    <div id="root"></div>
    
    // Javascript
    
    // DOM
    const h1DOM = document.createElement('h1');

    h1DOM.title = 'hello';
    h1DOM.className = 'heading';
    h1DOM.innerText = 'Hello !';

    document.body.appendChild(h1DOM);

    // React@17
    // React.createElement(type, props, children, n)
    const h1React = React.createElement('h1', {
        title: 'hello',
        className: 'heading'
    },'Hello !');

    const root = document.getElementById('root');

    // ReactDOM -> render UI
    ReactDOM.render(h1React, root);

    //React@18
    const root = ReactDOM.createRoot(container);
    root.render(h1React);
```

```Javascript
    // HTML
    <ul>
        <li>Javascript</li>
        <li>ReactJS</li>
    </ul>

    //Javascript


    // DOM
    const ulDOM = document.createElement('ul');
    ulDOM.id = 'ul-li';
    ulDOM.style = 'color: red; font-size: 25px;';

    const liDOM1 = document.createElement('li');
    liDOM1.innerText = 'Javascript';
    const liDOM12= document.createElement('li');
    liDOM2.innerText = 'ReactJS';

    ulDOM.appendChild(liDOM1);
    ulDOM.appendChild(liDOM2);

    document.body.appendChild(ulDOM);

    //React
    const React.createElement(
        'ul', 
        {
            id: 'ul-li',
            style: 'color: red; font-size: 25px;'
        },
        React.createElement('li', null, 'Javascript'),
        React.createElement('li', null, 'ReactJS')
     );
```
