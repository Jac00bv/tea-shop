import React, { useContext } from "react";
import Offer from "./Offer";
import Cart from "./Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import offersStyles from "../../scss/offers.module.scss";
import { CartContext } from "../../App";

const { teas } = require("./Teas");

const Offers = () => {
  const contextValue = useContext(CartContext);
  console.log(contextValue);
  const purchase = () => toast.success("You added item to the cart!");
  return (
    <div>
      <section className={offersStyles.offersSection}>
        {teas.map((tea, i) => (
          <div key={i}>
            <Offer
              tea={tea}
              listItem={contextValue.listItem}
              changeList={contextValue.changeList}
              purchase={purchase}
              sum={contextValue.sum}
              setSum={contextValue.setSum}
            />
          </div>
        ))}
        <ToastContainer autoClose={2000} />
      </section>
      <Cart listItem={contextValue.listItem} sum={contextValue.sum} />
    </div>
  );
};
export default Offers;
