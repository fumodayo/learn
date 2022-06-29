# Var, Const, Let xét theo:

- [x] Scope
- [x] Hoisting
- [x] Assignment

## 1.Var

**Var có scope là local giống với function**

- Ví dụ:

```Javascript
{
    function log(){
        var example = 'Javascript';
    }
    log();
    console.log(example); //ReferenceError: example is not defined
}
```

_Biến var có phạm vi trong function_

**Var có hoisting**

- Ví dụ về hoisting:

```Javascript
    var a = 1;
```

thì trình duyệt sẽ đọc theo kiểu:

```Javascript
    var a; a=1;
```

_Hoisting sẽ đưa khai báo lên đầu phạm vi_

```Javascript
    console.log(age); //undefined
    console.log(name); //Uncaught ReferenceError: name is not defined
    var age = 21;
```

- Ví dụ về function declaration

```Javascript
    console.log(sum(6, 9)); //15

    function sum(a, b){
        return a + b;
    }
```

## 2.Const, Let (ES 6 +)

**Const, Let chỉ có thể truy cập trong scope của nó (code block)**
-Ví dụ: 

```Javascript
    {
        const example = 'Javascript';
    }
    console.log(example); //Uncaught ReferenceError: example is not defined
```

```Javascript
    {
        let a = 1;
        {
            let a = 100;
            {
                {
                    console.log(a) //100;
                }
            }
        }
    }
```

_Ưu tiên lấy biến ở phạm vi gần nhất_

**Const không thể sử dụng toán tử gán đến lần thứ 2 trong 1 biến**

- Ví dụ:

```Javascript
    const a = 1;
    a = 100;
    console.log(a); //Uncaught TypeError: Assignment to constant variable.
```

**Const có thể gán thuộc tính của một object**

- Ví dụ:

```Javascript
    const obj ={
        name: 'Javascript'
    };
    obj.name='HTML';
    console.log(a); //HTML
```

- Ví dụ nên dùng let trong trường hợp:

```Javascript
    let isSuccess = false;
    if(...){
        isSuccess = true;
    }
```

_Const thường được dùng khi định nghĩa biến và không gán lại biến đó, let thì ngược lại_

**Hoisting với "let","const"**

- Ví dụ:

```Javascript
    console.log(name);
    let name = 'Nguyan Van A';//ReferenceError: Cannot access 'name' before initialization
```

_Khi khai báo biến với "let","const" khi được hoisted không được tạo giá trị và được đưa vào "Temporal Dead Zone ( Vùng tạm thời không sử dụng được)"_

- Ví dụ tại sao phải dùng hoisting:

```Javascript
    {
        let a = 1;
        {
            let a = 100;
            {
                {
                    console.log(a);//ReferenceError: Cannot access 'a' before initialization;
                    let a = 10;
                }
            }
        }
    }
```

_Để kiểm tra nếu trong phạm vi đã có biến 'a' rồi thì sẽ không truy cập ra khỏi code block để lấy thêm biến a nữa_
