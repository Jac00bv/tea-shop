import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../App";

const ShoppingBasket = () => {
  const contextValue = useContext(CartContext);
  return (
    <div>
      {contextValue.listItem.map((item, i) => (
        <div key={i} className="">
          <p>{item.count}</p>
          <p>{item.name}</p>
          <p>Price:{item.price}$</p>
        </div>
      ))}
      <h1>{contextValue.sum}</h1>
      <Link to="/checkout">
        <button>Go to checkout!</button>
      </Link>
    </div>
  );
};

export default ShoppingBasket;
