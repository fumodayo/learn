# (Webpack)[https://fullstack.edu.vn/blog/phan-1-tao-du-an-reactjs-voi-webpack-va-babel.html]

- Giúp module hóa file front-end
    - module hóa giúp quản lí file hiệu quả
    - mini file giúp tối ưu

```Javascript
react-webpack # thư mục gốc
    | src # thư mục chứa source code chính
        | components # thư mục chứa components
        | index.js # File khởi tạo, render App vào #root
    | public 
        | index.html # HTML page, nơi chứa #rôt element 
```

``` Javascript
    // Terminal
    npm init

    npm i webpack -cli --save-dev

    npm i react@17.0.2 react-dom@17.0.2 --save /*flag < npm5.x*/

    npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev

    npm i css-loader style-loader --save-dev
```

```Javascript
// webpack.config.js
const path = require("path");

module.exports = {
  entry: "./src/index.js", // Dẫn tới file index.js ta đã tạo
  output: {
    path: path.join(__dirname, "/build"), // Thư mục chứa file được build ra
    filename: "bundle.js" // Tên file được build ra
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Sẽ sử dụng babel-loader cho những file .js
        exclude: /node_modules/, // Loại trừ thư mục node_modules
        use: ["babel-loader"]
      },
      {
        test: /\.css$/, // Sử dụng style-loader, css-loader cho file .css
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  // Chứa các plugins sẽ cài đặt trong tương lai
  plugins: [
  ]
};  
```

```Javascript
// .babelrc
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ]
}
```

```Javascript
// package.json
"scripts": {
    ...
    "start": "webpack --mode development --watch",
    "build": "webpack --mode production"
}
```

```Javascript
    <div id="root"></div>
    <script src="bundle.js"></script>

//---------------------------------------------------

    <script defer src="bundle.js"></script>
    <div id="root"></div>
```
