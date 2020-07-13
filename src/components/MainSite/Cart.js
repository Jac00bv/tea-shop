import React from "react";
import { Link } from "react-router-dom";
import headerStyles from "../../scss/header.module.scss";

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
      style={cartStatus ? { display: "block" } : { display: "none" }}
    >
      <h1>Shopping Cart</h1>
      {sum > 0 ? (
        <>
          {listItem.map((item, name) => (
            <div key={name} className={headerStyles.item}>
              <p>{item.count}</p>
              <p>{item.name}</p>
              <p>Price:{item.price}$</p>
              <button
                className={headerStyles.deleteButton}
                name={item.name}
                cost={item.price}
                onClick={deleteItem}
              >
                X
              </button>
            </div>
          ))}
          <p className={headerStyles.price}>Sum:{sum}$</p>
          <Link to="/cart">
            <button className={headerStyles.forwardButton}>Go to cart</button>
          </Link>
          <Link to="/checkout">
            <button className={headerStyles.forwardButton}>Checkout</button>
          </Link>
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
