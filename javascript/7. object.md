# JavaScript Object

- Ví dụ:

```Javascript
    var favKey = 'favKey';

    var myInfo = {
        name: 'Son Thai',
        age: 22,
        address: 'Da Nang, Viet Nam',
        [favKey]: 'Sushi',
        getName: function(){
            return this.name;
        }
    };

    // Cách để truyền vào object
    myInfo.email = 'sonthai@fullstack.edu.vn'; // Cách 1
    myInfo.['my-email'] = 'sonthai@fullstack.edu.vn'; //Cách 2

    // Cách lấy dữ liệu
    var myKey = 'age';
    console.log(myInfo.name); // Cách 1
    console.log(myInfo.[myKey]); // Cách 2
    console.log(myInfo.[school]); // undefined

    // Cách xóa dữ liệu
    delete myInfo.age;

    console.log(myInfo);
```

_Lưu ý: `Function` --> Phương thức / `Method`_
_`Other` --> Thuộc tính / `property`_

## Object constructor

```Javascript
    // Mô tả thiết kế của một đối tượng
    var User = function(firstName, lastName, avatar){
        this.firstName = firstName;
        this.lastName = lastName;
        this.avatar = avatar;
        this.getName = function(){
            `${this.firstName} + ${this.lastName}`;
        }
    }

    // Đối tượng
    var author = new User('Son', 'Thai', 'avatar');
    var user = new User('Thanh', 'Dat', 'avatar');

    author.title = 'Javascript base';
    user.comment = 'GG';

    console.log(author.getName());
    console.log(user.constructor === User); //true
```

## Object Prototype 
```Javascript
    // Mô tả thiết kế của một đối tượng
    var User = function(firstName, lastName, avatar){
        this.firstName = firstName;
        this.lastName = lastName;
        this.avatar = avatar;
        this.getName = function(){
            `${this.firstName} + ${this.lastName}`;
        }
    }

    // Thêm thuộc tính vào User nhưng 
    // Đối tượng author, user không thể thay đổi được trong new User(...)
    User.prototype.className = 'JS';
    User.prototype.getClassName = function(){
        return this.className;
    }

    // Đối tượng
    var author = new User('Son', 'Thai', 'avatar');
    var user = new User('Thanh', 'Dat', 'avatar');

    author.title = 'Javascript base';
    user.comment = 'GG';

    console.log(author.className); // className có trong phần __proto__:
    console.log(user.getClassName()); 
```

## Math Object 
```Javascript
    console.log(Math.PI); // 3.1415...

    // Làm tròn số
    console.log(Math.round(1.3)); // 1
    console.log(Math.round(1.5)); // 2
    console.log(Math.round(1.8)); // 2

    // Làm tròn trên ( số > 0)
    console.log(Math.cell(4.0000001)); // 5
    console.log(Math.cell(4.0000000)); // 4
    
    // Làm tròn dưới
    console.log(Math.floor(4.99999)); // 4
    console.log(Math.floor(4.1)); // 4

    // Giá trị tuyệt đối
    console.log(Math.abs(4)); //4
    console.log(Math.abs(-4)); //4

    // Random số ngẫu nghiên ( số < 1 )
    console.log(Math.random()); // 0.21213

    // Random từ 0 - 100
    console.log(Math.floor(Math.random() * 100));

    // Tìm số nhỏ nhất
    console.log(Math.min(-100, 1, 2, 191, -200)); // -200

    // Tìm số lớn nhất
    console.log(Math.min(-100, 1, 2, 191, -200)); // 191
```


## Date Object - Mozilla

```Javascript
    var date = Date();
    console.log(typeof date); // string

    var data = new Date();

    var year = date.getFullYear(); // 2022
    var month = date.getMonth(); // 0 - 11
    var day = date.getDate(); // 1 - 31
```
