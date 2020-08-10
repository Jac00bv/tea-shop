import React, { useEffect } from "react";
import offerStyles from "./offer.module.scss";

const Offer = ({ tea, listItem, changeList, purchase, sum, setSum }) => {
  const name = tea.name;
  const description = tea.description;
  const price = tea.price;

  //sessionStorage for storage items in the cart during the session
  useEffect(() => {
    sessionStorage.setItem("itemsInTheCart", JSON.stringify(listItem));
  }, [listItem]);
  useEffect(() => {
    sessionStorage.setItem("sumInTheCart", JSON.stringify(sum));
  }, [sum]);

  //adding item to the cart

  const addItem = (e) => {
    e.target.disabled = true;
    e.target.style.background = "black";
    e.target.innerHTML = "In the cart";
    purchase();
    changeList([
      ...listItem,
      {
        id: listItem.length,
        image: tea.id,
        count: 1,
        name,
        price,
      },
    ]);
    setSum((prevSum) => prevSum + price);
  };

  return (
    <div>
      <div className={offerStyles.offer}>
        <div className={offerStyles.offerTitle}>
          <h1>{name}</h1>

          <img
            src={require(`../../../../images/${tea.id}.jpg`)}
            alt={tea.name}
          />
        </div>
        <div className={offerStyles.offerText}>
          <p>{description}</p>
          <h2>{price}$</h2>
        </div>
        <button className={offerStyles.offerButton} onClick={addItem}>
          Add to cart
        </button>
      </div>
    </div>
  );
};
export default Offer;
