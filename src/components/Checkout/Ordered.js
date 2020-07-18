import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import GreenButton from "../GreenButton";

const Ordered = () => {
  return (
    <>
      <Header />
      <div
        style={{
          textAlign: "center",
          paddingBottom: "10em",
          paddingTop: "20em",
        }}
      >
        <h1>Your order has been confirmed!</h1>
        <Link to="/tea-shop">
          <GreenButton>Go to the main page</GreenButton>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Ordered;
