# Ôn tập ES 6 +

## 1. Arrow Function

```Javascript
    const sum = (a, b) => a + b;
    console.log(sum(2,2)); // 4

    const sum = (a, b) => ({a: a, b: b});
    console.log(sum(2,2)); // {a: 2, b: 2}

    const logged = message => console.log(message);
    logged('Hello'); // Hello

    const user = {
        name: 'Son Thai',
        getName: () => {
            this.name; // context
        }
    };

    console.log(user.getName()); // undefined

    const Game = (name, price) => {
        this.name = name,
        this.price = price
    };
    const jsGame = new Game('XD', 1000);

    console.log(jsGame); // Uncaught TypeError: Game is not a constructor
```

## 2. Enhanced Object literals

```Javascript
    // 1. Định nghĩa key: value cho object
    const name = 'Javascript';
    const price = 1000;

    const course = {
        name,
        price
    };
    console.log(course); // {name: 'Javascript', price: 1000}

    // 2. Định nghĩa method cho object
    const name = 'Javascript';
    const price = 1000;

    const course = {
        name,
        price,
        getName() {
            return name;
        }
    };

    console.log(course.getName()); // Javascript

    // 3. Định ngĩa key cho object dưới dạng biến
    const fieldName = 'name';
    const fieldPrice = 'price';

    const course = {
        [fieldName]: 'Javascript',
        [fieldPrice]: 1000
    };
    console.log(course); // {name: 'Javascript', price: 1000}
```

## 3. Destructuring, Rest (Lấy ra phần còn lại)

```Javascript
    const array = ['Javascript', 'PHP', 'NodeJS'];

    const [a, , c] = array;
    console.log(a, c); // Javascript NodeJS

    const [a,...rest] = array;
    console.log(rest); // PHP NodeJS

    const courses = {
        name: 'Javascript',
        price: 1000,
        image: 'image-address',
        children: {
            name: 'ReactJS'
        }
    };

    const {name, ...rest} = courses;
    console.log(rest); // {price: 1000, image: 'image-address'}

    const {name: parentName, children: {name: childrenName} } = courses;
    console.log(parentName); // Javascript
    console.log(childrenName); // ReactJS

    const {name, description = 'default description' } = courses;
    console.log(description); // default description

    function logged(a, ...params){
        console.log(params);// (6) [2, 3, 4, 5, 6, 7]
    };
    logged(1,2,3,4,5,6,7);

    function logged({name, ...rest}){
        console.log(name); // Javascript
        console.log(rest); // 1000 content
    };
    logged({
        name: 'Javascript',
        price: 1000,
        description: 'content'
    });

```

## 4. Spread
```Javascript
    const array1 = ['Javascript', 'PHP', 'NodeJS'];

    const array2 = ['ReactJS', 'Dart'];

    const array3 = [...array2, ...array1];
    console.log(array3); // ['ReactJS', 'Dart', 'Javascript', 'PHP', 'NodeJS']



    const obj1 = {
        name: 'Javascript'
    };

    const obj2 = {
        price: 1000
    };

    const obj3 = {
        ...obj1,
        ...obj2
    };
    console.log(obj3); // {name: 'Javascript', price: 1000}


    const defaultApi = {
        api: 'defaultDomain',
        apiVersion: 'v1',
        other: 'other',
        //
    }

    const exApi = {
        ...defaultApi,
        api: 'exDomain'
    }

    console.log(exApi); // {api: 'exDomain', apiVersion: 'v1', other: 'other'}

    const array = ['Javascript', 'ReactJS', 'PHP'];

    function logged(...rest){
        for(let i = 0; i < rest.length; i++){
            console.log(rest[i]); // Javascript ReactJS PHP
        }
    }

    logged(...array /* spread */);
```

## 5. (JS Modules)[https://www.youtube.com/watch?v=08lWi4T2Bfg&t=700s]
```Javascript
    // file: app.js
    import {logger2} from './logged.js';
    import * as constants from './constants.js';

    logger2('Test message...', constants.TYPE_WARN);
```

```Javascript
    // file:  logger.js
    import {
        TYPE_LOG, 
        TYPE_WARN,
        TYPE_ERROR
    } from './constants.js';

    function logger(log, type = TYPE_LOG){
        console[type](log);
    };

    export default logger;
```

```Javascript
    // file: constants.js
    export const TYPE_LOG = 'log';
    export const TYPE_WARN = 'warn';
    export const TYPE_ERROR = 'error';
```

```Javascript
    // Cach 1:
    import logger from './logger.js';
    export default logger;

    // Cach 2: 
    export {default as logger2} from './logger.js';
```