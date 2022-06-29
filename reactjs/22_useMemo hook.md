# useMemo() Hook

- Tránh thực hiện lại một logic không cần thiết

```jsx
import { useState, useMemo, useRef } from "react";

function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  const nameRef = useRef(); // realDOM element

  const handleSubmit = () => {
    setProducts([
      ...products,
      {
        name,
        price: +price, // parseInt(price)
      },
    ]);
    setName("");
    setPrice("");

    nameRef.current.focus(); // focus input
  };

  const total = useMemo(() => {
    const result = products.reduce((result, prod) => {
      console.log("Tinh toan lai");
      return result + prod.price;
    }, 0);

    return result;
  }, [products]);

  return (
    <div>
      <input
        ref={nameRef}
        value={name}
        placeHolder="Enter name..."
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        value={price}
        placeHolder="Enter price..."
        onChange={(e) => sePrice(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Add</button>
      <br />
      Total: {total}
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```
