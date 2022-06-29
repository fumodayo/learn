# [HTML DOM (Document Object Model)](https://www.w3schools.com/js/js_htmldom.asp)

![HTML DOM](https://www.w3schools.com/js/pic_htmltree.gif)

## DOM có 3 thành phần:

1. Element:

```Javascript
    <header></header>
    <div class="element"> Element </div>
    <a href="#">Ohayo</a>
    ...
```

2. Attribute:

```Javascript
    href="#"
    class="element"
    ...
```

3. Text

```Javascript
    Element
    Ohayo
    ...
```

## Get element methods

1. Element: id, class, tag, CSS selector, HTML collection

```Javascript
    // 1. id (getElementById)
    <h1 id="heading">Heading</h1>
    var headingNode = document.getElementById("heading");
    console.log({
        element: headingNode; // h1#heading
    });
    console.log(document.getElementById("heading2")); // null

    // 2. class (getElementsByClassName)
    <h1 class="heading">Heading</h1>
    <h1 class="heading">Heading</h1>
    <h1 class="heading">Heading</h1>
    var headingNodes = document.getElementsByClassName("heading");
    console.log(headingNodes);
    /*output
        0: h1.heading
        1: h1.heading
        2: h1.heading
    */

    // 3. tagName (getElementsByTagName)
    <h1 class="heading"></h1>
    <h1 class="heading"></h1>
    <h1 class="heading"></h1>
    var headingNodes = document.getElementsByTagName("h1");
    console.log(headingNodes);
    /*output
        0: h1.heading
        1: h1.heading
        2: h1.heading
    */

    // 4. CSS Selector (querySelector, querySelectorAll)
    <h1 class="heading"></h1>
    <div class="box">
        <h1 class="heading-2"></h1>
        <h1 class="heading-2"></h1>
        <h1 class="heading-2"></h1>
        <h1 id="heading-3"></h1>
    </div>
    document.querySelector("h1");
    var headingNodes = document.querySelectorAll(".heading-2");
    console.log(headingNode[1]);
    document.querySelector(".box .heading-2");
    document.querySelector(".box .heading-2:nth-child(2)");
    document.querySelector("#heading-3");

    // 5. HTML collection (anchors, image, form, ...)
    <form id="form-1"></form>
    <form id="form-2"></form>
    <form id="myForm"></form>
    console.log(document.forms[1]); // form#form-2
    console.log(document.forms["form-2"]); // form#form-2
    console.log(document.forms.myForm); // form#myForm

    // 6. document.write
    <script> document.write('Hello');</script> // Hello
    // Ghi đè hết document nếu tải xong DOM
```

2. Attribute:

```Javascript
    // DOM attribute
    <h1></h1>
    var headingElement = document.querySelector("h1");

    headingElement.title = 'title-1'; 
    // <h1 title="title-1">Heading</h1>

    headingElement.className = 'class-1'; 
    // <h1 title="title" class="class-1">Heading</h1>

    headingElement.id = 'id-1';
    // <h1 id="id-1" title="title" class="class-1">Heading</h1>

    headingElement.setAttribute('data', 'item'); 
    // <h1 data="item" title="title" class="class">Heading</h1>

    console.log(headingElement.getAttribute('data')); // item
    
    console.log(headingElement.class); // class-1
```

3. Text:

```Javascript
    // innerText

```
