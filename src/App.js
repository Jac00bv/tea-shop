import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "./components/MainSite/MainPage";
import CartSite from "./components/CartSite/CartSite";
import Checkout from "./components/Checkout/Checkout";

const App = () => {
  // const [listItem, changeList] = useState([]);
  // const [sum, setSum] = useState(0);

  return (
    <Router>
      <Route path="/" exact component={MainPage} />
      <Route path="/cart" component={CartSite} />
      <Route path="/checkout" component={Checkout} />
    </Router>
  );
};

export default App;
