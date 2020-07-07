import React from "react";
import Header from "../Header";
import ShoppingBasket from "./ShoppingBasket";

const CartSite = () => {
  return (
    <>
      <Header />
      <h1 style={{ textAlign: "center", color: "blue", padding: "1em" }}>
        Cart
      </h1>
      <ShoppingBasket />
    </>
  );
};

export default CartSite;
