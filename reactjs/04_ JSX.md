# JSX (Javascript XML)

- JSX không phải là HTML, cần có Javascript, [Babel](https://bit.ly/2VOIMN7) để dùng JSX

```Javascript
    // HTML
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

    // script
    type="text/babel"

    const reactCourse = 'ReactJS';
    
    const ul = 
        <ul className="courses-list">    
            <li style={{ color: red; font-size: 15px; }} /*Javascript*/>Javascript</li>
            <li>{reactCourse} /*Javascript*/ </li>
        </ul>
    ;

    ReactDOM.render(ul, document.getElementById('root'));
```

```Javascript
    const courses = [
        {
            name: 'HTML, CSS'
        },
        {
            name: 'Responsive web design'
        },
        {
            name: 'ReactJS'
        }
    ];

    const jsx = (
        <ul>
            {courses.map((course, index) => 
                <li key={index}>{course.name}</li>
            )}
        </ul>
    )

    ReactDOM.render(jsx, document.getElementById('root'));
```

```Javascript
    const jsx = (
        <React.Fragment>
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
        </React.Fragment>
    );

    ReactDOM.render(jsx, document.getElementById('root'));
```

