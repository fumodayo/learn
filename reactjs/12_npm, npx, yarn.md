# [NPM](https://docs.npmjs.com/cli/v7/configuring-npm/folders)

- Project scope

```Javascript
  - npm install react react-dom --save => dependencies
  - npm i react react-dom => dependencies

  - npm install -save-dev react react-dom => devDependencies
  - npm i -D react react-dom => devDependencies

  - npm uninstall react react-dom
```

- Global scope

```Javascript
  - npm i --global create-react-app (lưu ở trong user file bin)
  - npm i --g create-react-app

  - npm uninstall -g create-react-app

create-react-app --help
```

# NPX: Node => npm, npx

- Giúp không cần cài thư viện lên máy (VD: luôn kéo phiên bản mới nhất về thực thi)

# [YARN & NPM](https://www.sitepoint.com/yarn-vs-npm/)

- CLI (a command-line interface) Tương tác bằng lệnh trên terminal

_Lưu ý: Nếu có package-lock.json, package.json thì chỉ cần: npm i_

- Performance
  - npm: Khi cài nhiều thư viện cùng lúc cài tuần tự từng thư viện một
  - yarn: Cài song song
- Cache:
  - yarn tốt hơn trong reinstall: Trong lần đầu install yarn sẽ lưu
    trữ trong một phân vùng trong máy (cache) mặc dù vậy sẽ làm tốn dung lượng hơn
