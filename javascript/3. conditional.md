# Conditional (Ternary) Operator

## If - Else

```Javascript
    var number = 2;

    if(number === 2){
        console.log('so 2');
    }else if(number > 0){
        console.log('so duong');
    }else if(number = 3){
        console.log('so 3');
    }
    else{
        console.log('khong hop le');
    }// so 2

    // Khi ta dùng if - if else - else nếu gặp trường hớp đúng
    // Sẽ console.log mà không cần kiểm tra thêm
```

## Switch

```Javascript
    var date = 2;
    switch(date){
        case 2: // so sánh bằng toán tử ===
        case 3:
            console.log('Thu 2,3');
            break;
        case 4:
            console.log('Thu 4');
            break;
        case 5:
            console.log('Thu 5');
            break;
        default:
            console.log('Khong xac dinh');
        // Thu 2,3
    }
```

_Lưu ý: Biết trước giá trị thì dùng Switch case và số case > 3_

## Toán tử 3 ngôi - Ternary operator

```Javascript
   var list = {
       name: 'CSGO',
       coin : 150
   }

   // Nếu dùng If - Else
   if(list.coin > 0){
       console.log(`Gia : ${list.coin} $`);
   }else{
       console.log('Free!');
   }

   // Nếu dùng ternary operator
   var result = list.coin > 0 ? `Gia : ${list.coin} $` : 'Free!';
   
```
