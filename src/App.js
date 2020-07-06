import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "./components/MainSite/MainPage";
import CartSite from "./components/CartSite/CartSite";
import Checkout from "./components/Checkout/Checkout";
export const CartContext = React.createContext();
const App = () => {
  const [listItem, changeList] = useState([]);
  const [sum, setSum] = useState(0);
  return (
    <Router>
      <CartContext.Provider value={{ listItem, changeList, sum, setSum }}>
        <Route path="/" exact component={MainPage} />
        <Route path="/cart" component={CartSite} />
        <Route path="/checkout" component={Checkout} />
      </CartContext.Provider>
    </Router>
  );
};

export default App;
