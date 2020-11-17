import React, { useState } from "react";

function Cart(props) {
  const [count, setcount] = useState(0);
  function increase() {
    setcount(count + 1);
    props.maintainProduct(1);
  }
  function decrease() {
    setcount(count === 0 ? 0 : count - 1);
    props.maintainProduct(count===0?0:-1);
  }

  return (
    <div className="cartStyle">
      <p
        align="center"
        value={count}
        style={{
          backgroundColor: count > 0 ? "blue" : "yellow",
          color: count > 0 ? "white" : "black"
        }}
      >
        {count === 0 ? "Zero" : count}
      </p>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button
        className="deleteButton"
        onClick={() => {
          props.deleteIteam(props.ID,count);
        }}
      >
        Delete
      </button>
    </div>
  );
}
export default Cart;
