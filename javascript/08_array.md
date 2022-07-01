# JavaScript Array

Để tạo ra `Array` ta có 2 cách:

```Javascript
    var languages = [
        'Javascript',
        'PHP',
        null,
        undefined,
        function(){},
        {},
        123,
    ];

    var languages = new Array(
        'Javascript',
        'PHP',
        null,
        undefined,
        function(){},
        {},
        123,
    );

    console.log(languages);
    // 0: 'Javascript'
    // 1: 'PHP'
    // 2: null
    // 3: undefined
    // 4: f()
    // 5: {}
    // 6: 123
    // length: 7
```

_Lưu ý: khi `typeof []` sẽ là một `object` giống với `typeof {}` để kiểm tra có phải Array không ta sẽ sử dụng:_

- Ví dụ:

```Javascript
    console.log(Array.isArray(languages)); // true
```

## Empty elements of Array

```Javascript
    var courses = [
        'Javascript',
        'PHP'
    ];
    courses.length = 10;
    for (var index in courses){
        console.log(index); // 0 1
    }
```

```Javascript
    var courses = Array(10);

    courses.push('PHP', 'NodeJS');
    console.log(courses.length); // 12
```

## JavaScript Array method

- Ví dụ ta có một `array`:

```Javascript
    var languages = [
        'Javascript',
        'CSS',
        'HTML'
    ];
```

### 1. toString (Chuyển kiểu dữ liệu `array` sang `string`)

```Javascript
    console.log(languages.toString()); //'Javascript,CSS,HTML'
```

### 2. Join (Giống `toString` như có thể đổi dấu `,` thành dấu khác)

```Javascript
    console.log(languages.join(' ')); //'JavascriptCSSHTML'
```

### 3. Pop (Xóa `element` cuối mảng và trả về phần tử đã xóa)

```Javascript
    console.log(languages.pop()); //HTML
    console.log(languages); // ['Javascript','CSS']
```

_Nếu xóa hết thì trả về `undefined`_

### 4. Push (Thêm một hay nhiều `element` vào cuối mảng và trả về `length` mới của mảng)

```Javascript
    console.log(languages.push('Java', 'C#')); //5
    console.log(languages); // ['Javascript','CSS','HTML','Java','C#']
```

### 5. Shift (Xóa `element` đầu mảng và trả về phần tử đã xóa)

```Javascript
    console.log(languages.pop()); //Javascript
    console.log(languages); // ['CSS','HTML']
```

_Nếu xóa hết thì trả về `undefined`_

### 6. Unshift (Thêm một hay nhiều `element` vào đầu mảng và trả về `length` mới của mảng)

```Javascript
    console.log(languages.push('Java', 'C#')); //5
    console.log(languages); // ['Java','C#','Javascript','CSS','HTML']
```

### 7. Splicing (Xóa/ Cắt/ Chèn một hay nhiều `element` vào mảng và trả về `element`)

```Javascript
    console.log(languages.splice(1, 2)); // 'CSS','HTML'
    console.log(languages); // ['Javascript']

    console.log(languages.splice(1, 0, 'Java')); // 'Java'
    console.log(languages); // ['Javascript','Java','CSS','HTML']
```

_Trong `languages.splice(1,2)` thì `1` là vị trí bắt đầu xóa, `2` là số phần tử xóa_
_Trong `languages.splice(1, 0, 'Java')` thì `1` là vị trí bắt đầu, `0` là số phần tử xóa, 'Java' là `element` muốn chèn (không giới hạn)_

### 8. Concat (Nối `array`)

```Javascript
    var films = [
        'A',
        'B',
        'C'
    ];

    var films2 = [
        1,
        2,
        3
    ];

    console.log(films.concat(films2)); // ['A','B','C',1,2,3]
```

### 9. Slicing (Cắt lấy một hay nhiều `element` của `array` xuất ra một mảng chứa `element` đó)

```Javascript
    console.log(languages.slice(1, 2)); // ['CSS']
```

_Trong `languages.slice(1, 2)` thì `1` là vị trí bắt đầu, `2` là vị trí kết thúc_

## Array method (Nhưng truyền vào là 1 function):

- Ví dụ ta có một `array`:

```Javascript
    var courses = [
        {
            id: 1,
            name: 'Javascript',
            coin: 250
        },
        {
            id: 2,
            name: 'HTML, CSS',
            coin: 0
        },
        {
            id: 3,
            name: 'PHP',
            coin: 0
        },
        {
            id: 4,
            name: 'PHP',
            coin: 400
        },
        {
            id: 5,
            name: 'ReactJS',
            coin: 500
        }
    ];
```

### 10. forEach() (Dùng để duyệt qua từng `element` của `array`)

```Javascript
    courses.forEach(function(course, index){
        console.log(index, course);
    });
```

### 11. every() (Dùng để kiểm tra tất cả các `element`của `array` phải thỏa mãn 1 điều kiện gì đó)

```Javascript
    var isFree = courses.every(function(course, index){
        console.log(index); // 0
        return course.coin === 0;
    });

    console.log(isFree); // false
```

### 12. some() (Chỉ cần 1 `element` thỏa mãn 1 điều kiện gì đó là trả về `true` hoặc `false` và ngừng lại khi gặp kết quả `true`)

```Javascript
    var isFree = courses.some(function(course, index){
        console.log(index); // 1
        return course.coin === 0;
    });

    console.log(isFree); // true
```

### 13. find() (Tìm kiếm 1 `element` trong `array`)

```Javascript
    var course = courses.find(function(course){
        return course === 'PHP';
    });

    console.log(course);
    /* output: {
            id: 3,
            name: 'PHP',
            coin: 0
        }
    */
```

_Lưu ý: Chỉ tìm kiếm 1 lần nếu tìm được sẽ tự output ra 1 phần tử, còn không tìm được sẽ ra`undefined`_

### 14. filter() (Tìm kiếm nhiều `element` thỏa mãn điều kiện trong `array`)

```Javascript
    var course = courses.filter(function(course){
        return course === 'PHP';
    });

    console.log(course);
    /* output:
        0:
        {
            id: 3,
            name: 'PHP',
            coin: 0
        }
        1:
        {
            id: 4,
            name: 'PHP',
            coin: 400
        }
    */
```

### 15. map() Khi muốn thay đổi `element` của một`array`

```Javascript

    function coursesHandle(course, index, originArray){
        // return {
        //     id: course.id,
        //     name: `Khoa hoc: ${course.name}`,
        //     coin: course.coin,
        //     coinText: `Gia: ${course.coin}`,
        //     index: index,
        //     originArray: originArray     //Trả về Array gốc
        // }
        return 123;
    }

    var newCourses = courses.map(coursesHandle);

    console.log(newCourses);
        // output:
        // 0: {
        //     123
        // },
        // 1: {
        //     123
        // },
        // 2: {
        //     123
        // },
        // 3: {
        //     123
        // },
        // 4: {
        //     123
        // }
```

### 16. reduce() Khi muốn nhận về 1 giá trị duy nhất sau khi tính toán, xử lý trên `array`

```Javascript
    // var totalCoin = 0;

    // for(var course of courses){
    //     totalCoin += course.coin;
    // }

    var i = 0;

    function coinHandle(accumulator/*Biến lưu trữ*/, currentValue/*Giá trị hiện tại VD: 1*/
    , currentIndex/*Chỉ mục của giá trị hiện tại VD: 0*/, originArray/*courses array*/ ){

        i++;

        var total = accumulator + currentValue.coin;

        console.table({
            'Lượt chạy: ': i,
            'Biến tích trữ:': accumulator,
            'Giá khóa học: ': currentValue.coin,
            'Tích trữ được:': total
        });

        /* output
        Lượt chạy: 1
        Biến tích trữ: 0
        Giá khóa học: 100
        Tích trữ được: 100

        Lượt chạy: 2
        Biến tích trữ: 100
        Giá khóa học: 200
        Tích trữ được: 300
        */

        return total;
    };

    var totalCoin = courses.reduce(coinHandle, 0 /*Giá trị khởi tạo ban đầu*/);

    var totalCoin = courses.reduce( (total, course) => total + course.coin, 0/*initial value*/);

    console.log(totalCoin); // 1200
```

```Javascript
    var numbers = [100, 200, 220, 200, 480];

    var totalCoin = numbers.reduce(function(total, number){
        return total + number;
    }/*initial value*/);

    console.log(totalCoin); // 1200

    /* Nếu không có initial value thì accumulator sẽ lấy đối tượng đầu tiên của mảng */
```

```Javascript
    //'Flat' - Làm phẳng mảng từ Depth array
    var depthArray = [1, 2, [3, 4], 5, 6, [7,8,9]];

    var flatArray = depthArray.reduce(function(flatOutput, depthItem){
        return flatOutput.concat(depthItem);
    }, []);

    console.log(flatArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

```Javascript
    //Lấy ra những khóa học đưa vào 1 mảng mới
    var topics = [
        {
            topic: "Front-end",
            courses: [
                {
                    id: 1,
                    title: "HTML, CSS"
                },
                {
                    id: 2,
                    title: "Javascript"
                }
            ]
        },
        {
            topic: "Back-end",
            courses: [
                {
                    id: 1,
                    title: "PHP"
                },
                {
                    id: 2,
                    title: "NodeJS"
                }
            ]
        },
    ];

    var newCourses = topics.reduce(function(courses, topic){
        return courses.concat(topic.courses);
    }, []);

    console.log(newCourses);
    /*output
        0: {id: 1, title: 'HTML, CSS'}
        1: {id: 2, title: 'Javascript'}
        2: {id: 1, title: 'PHP'}
        3: {id: 2, title: 'NodeJS'}
    */
```

```Javascript
    //Logic reduce
    var numbers = [1, 2, 3, 4, 5];

    // const result = numbers.reduce( (total, number, index, arrayOrigin) => {
    //     return total + number;
    // });

    Array.prototype.reduce2 = function (callback, result){
        let i = 0;

        //Không có initial value
        if(arguments.length < 2){
            i = 1;
            result = this[0];
        }

        for(; i < this.length; i++){
            result = callback(result, this[i], i, this);
        }

        return result;
    }

    const result = numbers.reduce2( (total, number, index, arrayOrigin) => {
        return total + number;
    });

    console.log(result); // 15
```

### 17. includes() Khi muốn tìm một đối tượng ở trong `array` trả về `true` và `false`

```Javascript
    var courses = ['Javascript','PHP','NodeJS'];

    // Độ dài của mảng: 3 + -3 = 0
    console.log(courses.includes('Javasciprt', -3 /* Vị trí bắt đầu tiềm kiếm */)); //true
```
