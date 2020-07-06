import React, { useState } from "react";
import Offer from "./Offer";
import Cart from "./Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import offersStyles from "../../scss/offers.module.scss";

const { teas } = require("./Teas");

const Offers = () => {
  const [listItem, changeList] = useState([]);
  const [sum, setSum] = useState(0);
  const purchase = () => toast.success("You added item to the cart!");
  return (
    <div>
      <section className={offersStyles.offersSection}>
        {teas.map((tea, i) => (
          <div key={i}>
            <Offer
              tea={tea}
              listItem={listItem}
              changeList={changeList}
              purchase={purchase}
              sum={sum}
              setSum={setSum}
            />
          </div>
        ))}
        <ToastContainer />
      </section>
      <Cart listItem={listItem} sum={sum} />
    </div>
  );
};
export default Offers;
