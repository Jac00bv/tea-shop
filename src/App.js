import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import MainPage from './components/MainPage';
import CartSite from './components/CartSite';
import Checkout from './components/Checkout';
function App() {
  return (
    <Router>
      <Route path="/" exact component={MainPage} />
      <Route path="/cart"  component={CartSite} />
      <Route path="/checkout"  component={Checkout} />
      
    </Router>

  )
}

export default App;
