import React from "react";
// eslint-disable-next-line
import headerStyles from "../scss/header.module.scss";
import logo from "../images/icon.png";
import { FaShoppingCart } from "react-icons/fa";

const Header = ({ cartStatus, toggle }) => {
  return (
    <header>
      <div></div>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <div type="button" onClick={() => toggle(!cartStatus)}>
          <FaShoppingCart color="rgb(255, 255, 255)" size="2em" type="icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
