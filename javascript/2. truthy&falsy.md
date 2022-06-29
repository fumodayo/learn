# Truthy và Falsy là gì?

## Truthy - to bool is true

Bất cứ giá trị nào trong Javascript khi chuyển đổi sang kiểu dữ liệu <code>boolean</code> mà có giá trị <code>true</code> thì ta gọi giá trị đó là <code>Truthy</code>.

- Ví dụ:

```Javascript
console.log(Boolean(1)) // true
console.log(Boolean(['BMW'])) // true
console.log(Boolean({ name: 'Meo' })) // true

console.log(!!'hi') // true
```

_Trong JavaScript biến '!!' là một cách để convert mọi kiểu dự liệu sang <code>Boolean</code>_

## Falsy - to bool is false

Trong Javascript có 6 giá trị sau được coi là Falsy:

1. <code>false</code>
2. <code>0</code>
3. <code>''</code> or <code>""</code> (chuỗi rỗng)
4. <code>null</code>
5. <code>undefined</code>
6. <code>NaN</code>

Ngoài 6 giá trị đã đề cập tới ở phần Falsy thì toàn bộ các giá trị khác đều là Truthy, kể cả những giá trị sau:

1. <code>'false'</code>
2. <code>'0'</code>
3. <code>' '</code>
4. <code>[]</code> (chuỗi rỗng)
5. <code>{}</code> (object rỗng)
6. <code>function(){}</code> (hàm "rỗng")

## Ngoại lệ duy nhất - document.all

1. <code>document.all</code>chuyển sang boolean sẽ là <code>false</code>
2. <code>document.all</code> khi là toán hạng của toán tử so sánh <code>==</code> hoặc <code>!=</code> sẽ là <code>undefined</code>
3. Khi <code>typeof document.all</code> sẽ trả về <code>"undefined"</code>

_tìm hiểu thêm tại [ECMA](https://stackoverflow.com/questions/10350142/why-is-document-all-falsy) (ECMA là đặc tả chi tiết kỹ thuật mà các ngôn ngữ theo đặc tả này phải tuân theo. Javascript là một ngôn ngữ tuân thủ đặc tả kỹ thuật ECMA.)_

## Truthy - Falsy liên quan đến '&&' và '||'

### Toán tử '&&'

- Ví dụ:

```Javascript
const result = 'A' && 'B' && 'C' && 'D';
console.log(result); //D
```

_Vì 'A','B','C' là <code>true</code> nên sẽ bỏ qua và lấy 'D'_

- Ví dụ:

```Javascript
const result = 'A' && 'B' && null && 'D';
console.log(result); //null
```

_Vì 'A','B' là <code>true</code>nhưng null là <code>false</code> nên sẽ ngay lập tức lấy null_

### Toán tử '||'

- Ví dụ:

```Javascript
const result = 'A' || 'B' || 'C' || 'D';
console.log(result); //A
```

_Vì 'A' là <code>true</code> nên sẽ lấy 'A'_

- Ví dụ:

```Javascript
const result = NaN || null || 'D' || 0;
console.log(result); //null
```

_Vì NaN ,null là <code>false</code>nhưng 'D' là <code>true</code> nên sẽ ngay lập tức lấy 'D'_
