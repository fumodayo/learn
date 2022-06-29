# React element types

string, function / class
   - Wrapper
     - Header -> Header component
     - Content -> Content component
     - Footer -> Footer component

```Javascript
    function Header(){
        return (
            <div className="header">Header</div>
        )
    };

    class Content extend React.component {
        render(){
            return <div className="content">Content</div>
        }
    };

    const app = (
        <div className="wrapper">
            <Header/>
            <Content/>
            <div className="footer">Footer</div>
        </div>
    );

    ReactDOM.render(app, document.getElementById('app'));
```
