import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "./components/MainSite/MainPage";
import CartSite from "./components/CartSite/CartSite";
import Checkout from "./components/Checkout/Checkout";
import Ordered from "./components/Checkout/Ordered";

export const CartContext = React.createContext();

const App = () => {
  const [listItem, changeList] = useState(
    JSON.parse(sessionStorage.getItem("itemsInTheCart")) || []
  );
  const [sum, setSum] = useState(
    JSON.parse(sessionStorage.getItem("sumInTheCart")) || 0
  );

  return (
    <Router>
      <CartContext.Provider value={{ listItem, changeList, sum, setSum }}>
        <Route path="/" exact component={MainPage} />
        <Route path="/cart" component={CartSite} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/ordered" component={Ordered} />
      </CartContext.Provider>
    </Router>
  );
};

export default App;
