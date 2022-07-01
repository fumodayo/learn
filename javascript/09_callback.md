# JavaScript Callback

- Là hàm (function) được truyền qua đối số khi gọi hàm khác

- Khi thỏa mãn 3 điều kiện:

1. Là hàm
2. Được truyền qua đối số
3. Được gọi lại (trong hàm nhận đối số)

- Ví dụ:

```Javascript
    function myFunction(param){
        if(typeof param === 'function'){
            param(123);
        }
    }

    function myCallback(value){
        console.log('Value:', value); // 123
    }

    myFunction(myCallback);
```

```Javascript
    var courses = [
        'Javascript',
        'PHP',
        'NodeJS'
    ];

    Array.prototype.map2 = function(callback){
        var output = [], arrayLength = this.length;
        for(var i = 0; i < arrayLength; i++){
            var result = callback(this[i], i);
            output.push(result);
        }
        return output;
    }

    var htmls = courses.map2(function(course, index){
        return `<h2>${course}</h2>`;
    })

    console.log(htmls.join(''));
    /* output :
    <h2>Javascript</h2><h2>PHP</h2><h2>NodeJS</h2>
    */
```

```Javascript
    var courses = [
        'Javascript',
        'PHP',
        'NodeJS'
    ];

    courses.length = 100;

    Array.prototype.forEach2 = function(callback){
        for(index in this){
            if(this.hasOwnProperty(index)) /* Xác định index có trong prototype -> true - false*/{
                callback(this[index], index, this);
            }
        }
    }

    courses.forEach2(function(course, index, array){
        console.log(course, index, array);
    });

    /* output
    Javascript 0 (100) ['Javascript', 'PHP', 'NodeJS', empty × 97]
    PHP 1 (100) ['Javascript', 'PHP', 'NodeJS', empty × 97]
    NodeJS 2 (100) ['Javascript', 'PHP', 'NodeJS', empty × 97]
    */
```

```Javascript
        var courses = [
            {
                name: 'Javascript',
                coin: 900
            },
            {
                name: 'PHP',
                coin: 400
            },
            {
                name: 'NodeJS',
                coin: 750
            }
        ];

        Array.prototype.filter2 = function(callback){
            var output = [];
            for (index in this){
                if(this.hasOwnProperty(index)){
                    var result = callback(this[index], index, this);
                    if(result){
                        output.push(this[index]);
                    }
                }
            }
            return output;
        }

        var filterCourses = courses.filter2(function(course, index, array){
            return course.coin > 700;
        });

        console.log(filterCourses);
        /* output
        0: {name: 'Javascript', coin: 900}
        1: {name: 'NodeJS', coin: 750}
        */
```

```Javascript
    var courses = [
            {
                name: 'Javascript',
                coin: 900,
                isFinish: true
            },
            {
                name: 'PHP',
                coin: 400,
                isFinish: false
            },
            {
                name: 'NodeJS',
                coin: 750,
                isFinish: false
            }
        ];

    Array.prototype.some2 = function(callback){
        var output = false;
        for(index in this){
            if(this.hasOwnProperty(index)){
                if(callback(this[index], index, this)){
                    output = true;
                    break;
                };
            }
        }  
        return output;
    };

    var isResult = courses.some2(function(course, index, array){
        return course.isFinish;
    });

    console.log(isResult); // true

```

```Javascript
    var courses = [
            {
                name: 'Javascript',
                coin: 900,
                isFinish: true
            },
            {
                name: 'PHP',
                coin: 400,
                isFinish: false
            },
            {
                name: 'NodeJS',
                coin: 750,
                isFinish: false
            }
    ];

    Array.prototype.every2 = function(callback){
        var output = true;
        for(var index in this){
            if(this.hasOwnProperty(index)){
                var result = callback(this[index], index, this);
                if(!result){
                    output = false;
                    break;
                }
            }
        }
        return output;
    };

    var isResult = courses.every2(function(course, index, array){
        return course.coin > 500;
    });

    console.log(isResult); // false
```
