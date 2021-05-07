import React from "react";
import { Link } from "react-router-dom";

import CartList from "../../components/CartList/CartList.component";
import "./cart.page.css";

const Cart = () => (
  <div className="cart">
    <div className="title">Your Car Reservation</div>
    <CartList />
    <div className="to-checkout">
      <Link to="/checkout">
        <button>Checkout</button>
      </Link>
    </div>
  </div>
);

export default Cart;
