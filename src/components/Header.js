import React from "react";
// eslint-disable-next-line
import headerStyles from "../scss/header.module.scss";
import logo from "../images/icon2.png";

const Header = () => {
  return (
    <header>
      {" "}
      <div>
        <h1>Tea Shop</h1>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="0 0 24 24"
          fill="black"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-shopping-cart"
        >
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
      </div>
    </header>
  );
};

export default Header;
