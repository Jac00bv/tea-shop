import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../App";
import shoppingStyles from "./shoppingBasket.module.scss";
const ShoppingBasket = () => {
  const contextValue = useContext(CartContext);
  return (
    <div className={shoppingStyles.basketOuter}>
      <div className={shoppingStyles.basket}>
        {contextValue.listItem.map((item, i) => (
          <div key={i} className={shoppingStyles.item}>
            <div>
              <img
                style={{ width: "80%", height: "80%" }}
                src={require(`../../../images/${item.image}.jpg`)}
                alt={item.image}
              />
              <p className={shoppingStyles.quantity}>{item.count}</p>
            </div>
            <div>
              {" "}
              <p>{item.name}</p>
            </div>

            <div>
              <p>{item.price}$</p>
            </div>
          </div>
        ))}
        <h1>{contextValue.sum}$</h1>
        <Link to="/checkout">
          <button>Go to checkout!</button>
        </Link>
      </div>
    </div>
  );
};

export default ShoppingBasket;
