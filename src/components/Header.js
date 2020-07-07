import React from "react";
// eslint-disable-next-line
import headerStyles from "../scss/header.module.scss";
import logo from "../images/icon2.png";
import { FaShoppingCart } from "react-icons/fa";

const Header = ({ cartStatus, toggle }) => {
  return (
    <header>
      {" "}
      <div>
        <h1>Tea Shop</h1>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <button onClick={() => toggle(!cartStatus)}>
          <FaShoppingCart color="green" size="4em" type="icon" />
        </button>
      </div>
    </header>
  );
};

export default Header;
