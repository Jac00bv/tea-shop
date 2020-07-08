import React, { useContext, useState } from "react";
import Offer from "./Offer";
import Cart from "./Cart";
import Search from "./Search";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import offersStyles from "../../scss/offers.module.scss";
import { CartContext } from "../../App";

const { teas } = require("./Teas");

const Offers = ({ cartStatus }) => {
  const contextValue = useContext(CartContext);
  const purchase = () => toast.success("You added item to the cart!");

  //searching
  const [searchedItem, setSearch] = useState("");

  const searchFor = (value) => {
    let search = value.toLowerCase();
    setSearch(search);
  };
  const filteredTeas = teas.filter((tea) => {
    return tea.id.indexOf(searchedItem.toLowerCase().trim()) !== -1;
  });
  return (
    <div>
      <Search searchedItem={searchedItem} searchFor={searchFor} />
      <section className={offersStyles.offersSection}>
        {filteredTeas.map((tea, i) => (
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
      <Cart
        listItem={contextValue.listItem}
        sum={contextValue.sum}
        cartStatus={cartStatus}
      />
      {filteredTeas.length === 0 ? (
        <div
          style={{ textAlign: "center", padding: "5em", marginBottom: "10em" }}
        >
          <h1>Not in store :(</h1>
        </div>
      ) : null}
    </div>
  );
};
export default Offers;
