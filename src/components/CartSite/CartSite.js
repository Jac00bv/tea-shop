import React from "react";
import ShoppingBasket from "./ShoppingBasket/ShoppingBasket";
import Layout from "../Layout/Layout";

const CartSite = () => {
  return (
    <Layout>
      <h1 style={{ textAlign: "center", color: "blue", padding: "1em" }}>
        Cart
      </h1>
      <ShoppingBasket />
    </Layout>
  );
};

export default CartSite;
