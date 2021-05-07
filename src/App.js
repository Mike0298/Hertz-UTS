import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.page";
import NavBar from "./components/NavBar/NavBar.component";
import Cart from "./pages/cart/cart.page";
import CheckoutPage from "./pages/checkout/checkout.page";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <div className="content-container">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/checkout" component={CheckoutPage} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
