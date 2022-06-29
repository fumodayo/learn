# Props 

- Là `object` chứa `Properties` để mô tả cho `React element`
- React elements
    - Sử dụng props giống như với attribute của thẻ HTML
    - 2 props class, for => className, htmlFor
    ```Javascript
        <label htmlFor="email">Email</label>
        <input id="email"/>
    ```
    - Phải tuân theo quy ước có sẵn (VD: img thì src, alt, ...)

- React component
    - Sử dụng props giống như đối số cho Component
    - Tự do đặt tên theo props
        - Đặt theo camelCase (VD: controlAt, backColor, ... )
        - *Có thể bao gồm dấu gạch ngang

- Chú ý: 
    - Prop "key" là prop đặc biệt ( thường được dùng trong Array )
    - Props cơ bản là đối số của Component
        => Props có thể là bất cứ kiểu dữ liệu gì
    - Sử dụng destructuring

```Javascript
    //PostItem.js
    function PostItem(Props){

        if(typeof props.callback === 'function'){
            props.callback(Math.random());
        };

        return(
            <div className="post-item">                
                <img 
                    src={Props.image}
                    alt={Props.title}
                />
                <h2>{Props.title}</h2>
                <p>{Props.status}</p>
            </div>
        )
    };

    // Destructuring
    function PostItem({
        image,
        title,
        status,
        callback = () => {},
    }){
        callback();
        
        return(
            <div className="post-item">                
                <img 
                    src={image}
                    alt={title}
                />
                <h2>{title}</h2>
                <p>{status}</p>
            </div>
        )
    };

    // App.js
    function App(){
        return (
            <div class="wrapper">
                <PosItem
                    image="https://files.fullstack.edu.vn/f8-prod/courses/13/13.png"
                    title="1 Xây Dựng Website với ReactJS"
                    status="1 tiếp tục học"
                    callback={(random) => {
                        console.log(random, 'random');
                    }}
                />
                <PosItem
                    image="https://files.fullstack.edu.vn/f8-prod/courses/13/13.png"
                    title="2 Xây Dựng Website với ReactJS"
                    status="2 tiếp tục học"
                />
                <PosItem
                    image="https://files.fullstack.edu.vn/f8-prod/courses/13/13.png"
                    title="3 Xây Dựng Website với ReactJS"
                    status="3 tiếp tục học"
                />
                
            </div>
        )
    };

    // index.js
    ReactDOM.render(<App/>, document.getElementById('root'));
```