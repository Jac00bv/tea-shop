import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import GreenButton from "../GreenButton";

const Ordered = () => {
  return (
    <>
      <Header />
      <div style={{ textAlign: "center", padding: "4em", paddingTop: "200px" }}>
        <h1>Your order has been confirmed!</h1>
        <Link to="/">
          <GreenButton>Go to the main page</GreenButton>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Ordered;
