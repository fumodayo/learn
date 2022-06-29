# DOM events

```Javascript
    // API
    const courses = [...];

    //UI Component
    const CoursesItem = ({course}) => (
        <div>
            <h2 onClick={() => handleClick(course)}>{props.title}</h2>
            <img src={props.thumbnail_cdn}/>
            <p>{props.description}</p>
            <p>{props.students_count}</p>
        </div>
    )

    function App(){
        const handleClick = (course) => {
            console.log(course.title);
        }

        return(
            <div id="wrapper">
            {
                courses.map(course => (
                    <CoursesItem
                        key={course.id}
                        course={course}
                        onClick={handleClick}
                    />
                ))
            }
            </div>
        )
    }
```

```Javascript
    function App(){
        return(
            <div id="app">
                <button
                    onClick={() =>
                        console.log(Math.random());
                    }
                >
                    Click Me!
                </button>
            </div>
        )
    }

    ReactDOM.render(<App/>, document.getElementById('root'));
```
