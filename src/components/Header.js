import React from "react";
// eslint-disable-next-line
import headerStyles from "../scss/header.module.scss";
import logo from "../images/icon2.png";

const Header = () => {
  return (
    <header>
      <h1>Tea Shop</h1>
      <img src={logo} alt="logo" />
    </header>
  );
};

export default Header;
