import React, { Component } from "react";
import { connect } from "react-redux";

import CartItem from "../CartItem/CartItem.component";
import "./CartList.component.css";

export class CartList extends Component {
  render() {
    const { cartItems } = this.props.cart;

    return (
      <div className="cart-container">
        <div className="header">
          <div className="thumbnail text">Thumbnail</div>
          <div className="vehicle text">Vehicle</div>
          <div className="price text">Price Per Day</div>
          <div className="day text">Rental Days</div>
          <div className="action text">Actions</div>
        </div>
        {cartItems.map(({ id, ...otherProps }) => (
          <CartItem key={id} id={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(CartList);
