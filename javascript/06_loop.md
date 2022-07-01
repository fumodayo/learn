# For

```Javascript
    var myArray = [
        'JS',
        'Java',
        'PHP',
        'C#'
    ];

    var arraylength = myArray.length;

    for(var i = 0; i < arraylength - 1 /* 4 */ ; i++){
        console.log(myArray[i]);
    }
```

## For / in loop (lấy index)

```Javascript
    var myInfo = {
        name: 'Son Thai',
        age: 22,
        address: 'Da Nang'
    };

    for (var key in myInfo){
        console.log(key); // name age address
        console.log(myInfo[key]); // Son Thai 22 Da Nang
    }

    var languages = [
        'Javascript',
        'PHP',
        'Java'
    ];

    for (var key in languages){
        console.log(key); // 0 1 2
        console.log(languages[key]); // Javascript PHP Java
    }

    var myString = 'Java';

    for (var key in myString){
        console.log(key); // 1 2 3 4
        console.log(myString[key]); // J a v a
    }
```

```Javascript
    var languages = [
        'Javascript',
        'PHP'
    ];

    Array.prototype.map2 = function(callback){
        for(var i in this){
            console.log('index: ', i);
        }
    };

    Array.prototype.testMethod1 = 1;

    languages.map2(function(language){

    });
    //output:
    // index: 0
    // index: 1
    // index: map2
    // index: testMethod1
```

_Lưu ý: For / in không chỉ lặp qua `elements` ở trong mảng mà còn lặp trong thuộc tính `prototype`_

## For / of loop (Lấy giá trị trừ object)

```Javascript
    var languages = [
        'Javascript',
        'PHP',
        'Java'
    ];

    for(var value of languages){
        console.log(value); // Javascript PHP Java
    }

    var myString = 'Java';

    for (var value of myString){
        console.log(value); // J a v a
    }

    var myInfo = {
        name: 'Son Thai',
        age: 22,
        address: 'Da Nang'
    };

    console.log(Object.keys(myInfo)); // ['name', 'age', 'address']

    for(var value of Object.keys(myInfo)){
        console.log(myInfo[value]); // Son Thai 22 Da Nang
    }

    console.log(Object.values(myInfo)); // ['Son Thai', '22', 'Da Nang']

    for(var value of Object.values(myInfo)){
        console.log([value]); // Son Thai 22 Da Nang
    }
```

## While loop

```Javascript
    var myArray = [
        'JS',
        'Java',
        'PHP',
        'C#'
    ];

    var i = 0;

    var arrayLength = myArray.length;

    while( i < arrayLength){
        console.log(myArray[i]);
        i++;
    }
```

## Do /while loop

```Javascript
    var i = 0;
    var isSuccess = false;
    do{
        i++;

        console.log('Lan thu so' + i);

        //Thành công
        if(true){
            isSuccess = true;
        }
        /* --> do while se thoát ra // Lan thu so 1 */

        // Thất bại
        if(false){
            isSuccess = false;
        }
        /* --> do while se thoát ra // Lan thu so 1   Lan thu so 2  Lan thu so 3 Lan thu so 4*/

    } while (!isSuccess && i <= 3); //Kiểm tra nếu nó thất bại quá 3 lần sẽ out ra
```

## Break & Continue in loop

```Javascript
    for(var i = 0; i < 10; i++){
        if(i > 5) {
            break;
        }
        console.log(i); // 1 2 3 4 5

        if( i % 2 !== 0) {
            continue;
        }
        console.log(i); // 0 2 4 6 8
    }
```

## Nested loop - Vòng lặp lồng nhau

```Javascript
    var myArray = [
        [1,2],
        [3,4],
        [5,6]
    ];

    for(var i = 0; i < myArray.length; i++){
        console.log(myArray[i]); // [1,2] [3,4] [5,6]
        for(var j = 0; j < myArray[i].length; j++){
            console.log(myArray[i][j]); // 1 2 3 4 5 6
        }
    }

```

## Mở rộng: Đệ quy - Functional programing

```Javascript
    var array = ['a', 'b', 'c', 'a', 'b', 'c', 'a', 'b', 'c'];

    console.log(new Set(array)); // {'a', 'b', 'c'}

    console.log([...(new Set(array))]); // ['a', 'b', 'c']
```

Lưu ý trước khi sử dụng đệ quy:

1. Xác định điểm dừng
2. Logic handle => Tạo ra điểm dừng

```Javascript
    function countDown(num){
        if(num > 0){
            console.log(num); // 3 2 1
            countDown(num - 1);
        }
        return num;
    }

    countDown(3);
```

```Javascript
    function loop(start, end, callback){
        if(start < end){
            callback(start);
            loop(start + 1, end, callback);
        }
    }

    var array = ['Javascript', 'PHP', 'Java'];

    loop(0, array.length, function(index){
        console.log(array[index]);
    })
```

```Javascript
    /*  3! = 3 * 2 * 1
        2! = 2 * 1
    */

   // Loop
   function giaiThua(number){
       var output = 1;
       for(var i = number; i > 0; i--){
           output = output * i;
       }
       return output;
   }

   //De quy
   function giaiThua(number){
       if(number > 0){
           return number /* 6 */ * giaiThua(number - 1) /* 1 x 2 x 3 x 4 x 5*/;
       }
       return 1;
   }

   console.log(giaiThua(6)); // 720

```
