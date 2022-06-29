# JavaScript string method

- Ví dụ: Ta có một chuỗi

```Javascript
    var myString = 'Hoc JS that de dang!';
```

## 1.Length (Tính độ dài của chuỗi)

- Ví dụ:

```Javascript
    console.log(myString.length); //20
```

## 2. Find index (Tìm vị trí của một kí tự nằm trong một chuỗi)

- Ví dụ:

```Javascript
    var myString = 'Hoc JS that de dang! JS JS';
    console.log(myString.indexOf('JS', 6)); //22
    console.log(myString.lastIndexOf('JS')); //25
```

_Trong <code>indexOf('JS', 6)</code> '6' là vị trí bắt đầu tìm kiếm_

- Ví dụ: Nếu tìm trong chuỗi không có kí tự cần tìm

```Javascript
    console.log(myString.indexOf('Yahallo')); //-1
```

## 3. Cut string (Cắt chuỗi)

- Ví dụ:

```Javascript
    console.log(myString.slice(4,6)); //JS
```

_Trong <code>slice(4, 6)</code> '4' là vị trí bắt đầu cắt, '6' là vị trí kết thúc cắt, cắt ngược thì giá trị sẽ thành âm_

## 4. Replace (Ghi đè)

- Ví dụ:

```Javascript
    var myString = 'Hoc JS that de dang! JS';
    console.log(myString.replace(/JS/g, 'Javascript')); //Hoc Javascript that de dang! Javascript
```

_Trong <code>replace(/JS/g, 'Javascript')</code> '/JS/g' là biểu thức chính quy bởi vì khi dùng 'JS' chỉ thay được chữ 'JS' đầu tiên_

## 5. Covert to Upper/ Lower case (Viết hoa, thường chuỗi)

- Ví dụ:

```Javascript
    console.log(myString.toUpperCase()); //HOC JS THAT DE DANG!
    console.log(myString.toLowerCase()); //hoc js that de dang!
```

## 6. Trim (Thường được dùng để xử lí liệu người dùng)

- Ví dụ:

```Javascript
    var myString = '   Hoc JS that de dang!  ';
    console.log(myString.trim()); //Hoc JS that de dang!
```

## 7. Split (Cắt một <code>string</code> thành một <code>array</code>)

- Ví dụ:

```Javascript
    var myString = 'JS, HTML, SCSS';
    console.log(myString.split(', ')); //["JS","HTML","SCSS"]

    var myString = 'HTML';
    console.log(myString.split('')); //['H','T','M','L']
```

## 8. Includes (Tìm kí tự ở trong `string` trả về `true` và `false`)

- Ví dụ:

```Javascript
    var myString = 'Responsive web design'
    console.log(myString.includes('Responsive'), 1 /* Vị trí bắt đầu tìm kiếm */); //false
```

## 9. Get a character by index

- Ví dụ:

```Javascript
    var myString = 'Javascript';
    console.log(myString.charAt(3)); //s
    console.log(typeof myString.charAt(22)); //string (chuỗi rỗng)

    console.log(myString[3]); //s
    console.log(typeof myString[25]); //undefined
```
