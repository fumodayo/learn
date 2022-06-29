# Kiểu số - number

Trong Javascript có 2 loại số:

1. Các số thông thường trong Javascript được lưu trữ dưới dạng 64 bit IEEE-754 (còn được gọi là các số phẩy động). Trong hầu hết các trường hợp khi làm việc với Javascript là chúng ta sử dụng loại số này.
2. Số BigInt là loại số sử dụng để biểu thị số nguyên có độ dài tùy ý.

## Cách khai báo

Cách thông thường khi ta khai báo một số. Ví dụ là: <code>1000000</code> (một triệu)

```Javascript
    var million = 1000000;
```

Cũng là khai báo số <code>1000000</code> (một triệu) nhưng có cách viết khác. Bạn có thể thêm chữ e vào sau số 1 và chỉ định số số không phía sau chữ e như sau:

```Javascript
    var million = 1e6; // tương tự: 1000000

    // hoặc

    var billion = 2e9; // tương tự: 2000000000
```

## Đối tượng Number

Đối tượng Number trong Javascript là đối tượng giúp chúng ta định nghĩa số và làm việc với số. Chúng ta thường sử dụng các phương thức sau của đối tượng Number khi làm việc với số trong Javascript:

| **Phương thức**               | **Vai trò**                                                                                 |
| ----------------------------- | ------------------------------------------------------------------------------------------- |
| `Number.isFinite()`           | Xác định xem giá trị đã cho có phải là số hữu hạn hay không. Trả về boolean                 |
| `Number.isInteger()`          | Xác định xem giá trị đã cho có phải là số nguyên hay không. Trả về boolean                  |
| `Number.parseFloat()`         | Chuyển đổi chuỗi đã cho thành một số dấu phẩy động                                          |
| `Number.parseInt()`           | Chuyển đổi chuỗi đã cho thành một số nguyên                                                 |
| `Number.prototype.toFixed()`  | Chuyển đổi và trả về chuỗi đại diện cho số đã cho, có số chữ số chính xác sau dấu thập phân |
| `Number.prototype.toString()` | Chuyển đổi và trả về số đã cho dưới dạng chuỗi                                              |

- Ví dụ:

```Javascript
    Number.isFinite(3 / 0); // false
    Number.isFinite(25 / 5); //true
    Number.isFinite(0 / 0); //false

    Number.isInteger(999999999); //true
    Number.isInteger(1.2); //false
    Number.isInteger(Math.PI); //false

    Number.parseFloat('10'); //10
    Number.parseFloat('10.00'); //10
    Number.parseFloat('248,91'); //248
    Number.parseFloat('671.32'); //671.32
    Number.parseFloat('10 31 7'); //10
    Number.parseFloat(' 89 '); //89
    Number.parseFloat('22 is my age'); //22

    Number.parseInt('10') // 10
    Number.parseInt('10.00') // 10
    Number.parseInt('189.91') // 189
    Number.parseInt('189,91') // 189
    Number.parseInt('10 31 7') // 10
    Number.parseInt(' 89 '); //89
    Number.parseInt('22 is my age'); //22

    var numberObject = 1234.56789;

    numberObject.toFixed(); // '1234'
    numberObject.toFixed(1); // '1234.5'
    numberObject.toFixed(6); // '1234.567890'

    (11).toString(); // '11'
    (22).toString(); // '22'
    (11.89).toString(); // '11.89'
```

**Lưu ý: Trong Javascript `NaN` cũng là kiểu `number` dễ gây ra lỗi logic**

- Ví dụ:

```Javascript
    console.log(typeof NaN); // number
    console.log(isNumber(NaN)); // true
    console.log(isNumber(100 / 'abc'))//true
```

Để giải quyết vấn đề này ta có thể sử dụng:

```Javascript
    function isNumber(value){
        return typeof value === 'number' && !isNaN(value);
    }

    console.log(isNumber(999)); // true
    console.log(isNumber('abc')); // false
    console.log(isNumber('100')); // false

    console.log(isNumber(NaN)); // false
    console.log(isNumber(100 / 'abc')); // false
```
