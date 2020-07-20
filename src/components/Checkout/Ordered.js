import React from "react";
import { Link } from "react-router-dom";

import Layout from "../Layout/Layout";
import GreenButton from "../GreenButton/GreenButton";

const Ordered = () => {
  return (
    <>
      <Layout>
        <div
          style={{
            textAlign: "center",
            paddingBottom: "10em",
            paddingTop: "20em",
          }}
        >
          <h1>Your order has been confirmed!</h1>
          <Link to="/">
            <GreenButton>Go to the main page</GreenButton>
          </Link>
        </div>
      </Layout>
    </>
  );
};

export default Ordered;
