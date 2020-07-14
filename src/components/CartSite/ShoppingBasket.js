import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../App";
import shoppingStyles from "../../scss/CartSite/shoppingBasket.module.scss";
const ShoppingBasket = () => {
  const contextValue = useContext(CartContext);
  return (
    <div className={shoppingStyles.basketOuter}>
      <div className={shoppingStyles.basket}>
        {contextValue.listItem.map((item, i) => (
          <div key={i} className={shoppingStyles.item}>
            <p>{item.count}</p>
            <p>{item.name}</p>
            <p>Price:{item.price}$</p>
          </div>
        ))}
        <h1>{contextValue.sum}$</h1>
        <Link to="/tea-shop/checkout">
          <button>Go to checkout!</button>
        </Link>
      </div>
    </div>
  );
};

export default ShoppingBasket;
