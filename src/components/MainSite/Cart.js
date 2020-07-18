import React from "react";
import { Link } from "react-router-dom";
import GreenButton from "../GreenButton";
import headerStyles from "../../scss/header.module.scss";
import { teas } from "./Teas";

const Cart = ({ listItem, changeList, sum, setSum, cartStatus }) => {
  const deleteItem = (e) => {
    const itemToDelete = e.target.getAttribute("name");
    const cost = e.target.getAttribute("cost");
    changeList(listItem.filter((item) => item.name !== itemToDelete));
    setSum((prevSum) => prevSum - cost);
  };

  return (
    <div
      className={headerStyles.cart}
      style={
        cartStatus
          ? { transform: "translateY(0)" }
          : { transform: "translateY(-120vh)" }
      }
    >
      <h1 style={{ textAlign: "center" }}>Shopping Cart</h1>
      {sum > 0 ? (
        <>
          <div className={headerStyles.items}>
            {listItem.map((item, name) => (
              <div key={name} className={headerStyles.item}>
                <div>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={require(`../../images/${item.image}.jpg`)}
                    alt={item.image}
                  />
                </div>
                <div className={headerStyles.middleDiv}>
                  <div>
                    <p>{item.name}</p>
                  </div>

                  <span>
                    <button className={headerStyles.operationButton}>-</button>
                    <p>{item.count}</p>
                    <button className={headerStyles.operationButton}>+</button>
                  </span>
                </div>
                <div className={headerStyles.thirdDiv}>
                  <p>{item.price}$</p>
                  <button
                    className={headerStyles.deleteButton}
                    name={item.name}
                    cost={item.price}
                    onClick={deleteItem}
                  >
                    X
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className={headerStyles.bottomCart}>
            <p className={headerStyles.price}>Sum:{sum}$</p>
            <div>
              <Link to="/tea-shop/cart">
                <GreenButton>Go to cart</GreenButton>
              </Link>
              <Link to="/tea-shop/checkout">
                <GreenButton>Checkout</GreenButton>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <h1 style={{ padding: "2em", textAlign: "center" }}>
          Your cart is empty
        </h1>
      )}
    </div>
  );
};
export default Cart;
