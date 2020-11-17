import React, { useState } from "react";
import Header from "./Header";
import Cart from "./cart";
function App() {
  const [cartIteam, setIteam] = useState([
    { id: 0 },
    { id: 1 },
    { id: 2 },
    { id: 3 }
  ]);
  const [totalproduct, setProduct] = useState(0);

  function maintainProduct(value) {
    console.log("call " + totalproduct);
    setProduct((prevValue) => {
      return prevValue === 0 && value < 0 ? prevValue : prevValue + value;
    });
  }

  function deleteIteam(id, value) {
    setIteam((prevValue) => {
      return prevValue.filter((Item, index) => {
        return index !== id;
      });
    });
    setProduct((prevValue) => {
      return prevValue - value;
    });
  }
  return (
    <div>
      <Header totalProduct={totalproduct} />
      {cartIteam.map((prevValue, index) => {
        return (
          <Cart
            key={prevValue.id}
            ID={index}
            maintainProduct={maintainProduct}
            deleteIteam={deleteIteam}
          />
        );
      })}
    </div>
  );
}

export default App;
