import React from "react";
import offerStyles from "../../scss/offer.module.scss";

const Offer = ({ tea, listItem, changeList, purchase, sum, setSum }) => {
  const name = tea.name;
  const description = tea.description;
  const price = tea.price;
  const check = () => {
    purchase();
    let index = listItem.findIndex((item) => {
      return item.name === name;
    });
    index !== -1 ? addExistingItem(index) : addItem();
  };

  const addItem = () => {
    changeList([
      ...listItem,
      {
        id: listItem.length,
        count: 1,
        name: name,
        price: price,
      },
    ]);
    setSum((prevSum) => prevSum + price);
  };
  const addExistingItem = (index) => {
    let newArr = [...listItem];
    newArr[index].count = newArr[index].count + 1;
    newArr[index].price = newArr[index].price + price;
    changeList(newArr);
    setSum((prevSum) => prevSum + price);
  };

  return (
    <div>
      <div className={offerStyles.offer}>
        <div className={offerStyles.offerTitle}>
          <h1>{name}</h1>
          <img src={require(`../../images/${tea.id}.jpg`)} alt={tea.name} />
        </div>
        <div className={offerStyles.offerText}>
          <p>{description}</p>
          <h2>{price}$</h2>
        </div>
        <button className={offerStyles.offerButton} onClick={check}>
          Add to cart
        </button>
      </div>
    </div>
  );
};
export default Offer;
