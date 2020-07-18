import React, { useState, useContext, useEffect } from "react";
import { CartContext } from "../App";
// eslint-disable-next-line
import headerStyles from "../scss/header.module.scss";
import logo from "../images/icon.png";
import { FaShoppingCart } from "react-icons/fa";
import Cart from "./MainSite/Cart";
import { Link } from "react-router-dom";

const Header = () => {
  const [cartStatus, toggle] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(true);
  const contextValue = useContext(CartContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.pageYOffset > 0
        ? setScrollPosition(false)
        : setScrollPosition(true);
    });
  }, []);

  return (
    <div className={headerStyles.outerHeder}>
      <header
        style={
          scrollPosition
            ? { backgroundColor: "white" }
            : { backgroundColor: "rgb(223, 236, 224)" }
        }
      >
        <div></div>
        <div>
          <Link to="/tea-shop">
            <img src={logo} alt="logo" className={headerStyles.logo} />
          </Link>
        </div>
        <div>
          <div type="button" onClick={() => toggle(!cartStatus)}>
            <FaShoppingCart
              className={headerStyles.iconShop}
              color={
                scrollPosition ? "rgb(100, 100, 100)" : "rgb(100, 100, 100)"
              }
              size="2em"
              type="icon"
            />
            <p
              className={headerStyles.counter}
              style={
                contextValue.listItem.length > 0
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              {contextValue.listItem.length}
            </p>
          </div>
        </div>
      </header>
      <Cart
        listItem={contextValue.listItem}
        changeList={contextValue.changeList}
        sum={contextValue.sum}
        setSum={contextValue.setSum}
        cartStatus={cartStatus}
      />
    </div>
  );
};

export default Header;
