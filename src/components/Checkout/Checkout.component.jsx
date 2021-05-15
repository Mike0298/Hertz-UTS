import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { clearCart } from "../../redux/actions/cartAction";
import { setUser, setTotal } from "../../redux/actions/userAction";

import { isEmail } from "../../utils/validator";
import "./Checkout.component.css";

export class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      postcode: "",
      payment: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (isEmail(this.state.email)) {
      let user = this.state;
      this.props.setTotal(this.calculateTotal());
      this.props.setUser(user);
      this.props.clearCart();
      this.props.history.push("/complete");
    } else {
      alert("Wrong email format");
    }
  };

  calculateTotal() {
    let total = 0;
    let { cartItems } = this.props.cart;

    cartItems.map(
      ({ price_per_day, reserve_day }) => (total += price_per_day * reserve_day)
    );
    return total;
  }

  render() {
    let { cartItems } = this.props.cart;

    if (cartItems.length === 0) {
      return (
        <div>
          {alert(
            "No car has been reserved, you will be redirected to homepage"
          )}
          <Redirect to="/" />
        </div>
      );
    }
    return (
      <div className="checkout-container">
        <div className="checkout-header">Check Out</div>
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <div className="form-detail">
              <input
                type="text"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
                required
              />
              <label>First Name</label>
            </div>
            <div className="form-detail">
              <input
                type="text"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
                required
              />
              <label>Last Name</label>
            </div>
            <div className="form-detail">
              <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
              <label>Email</label>
            </div>
            <div className="form-detail">
              <input
                type="text"
                name="address1"
                value={this.state.address1}
                onChange={this.handleChange}
                required
              />
              <label>Address Line 1</label>
            </div>
            <div className="form-detail">
              <input
                type="text"
                name="address2"
                value={this.state.address2}
                onChange={this.handleChange}
                required
              />
              <label>Address Line 2</label>
            </div>
            <div className="form-detail">
              <input
                type="text"
                name="city"
                value={this.state.city}
                onChange={this.handleChange}
                required
              />
              <label>City</label>
            </div>
            <div className="form-detail">
              <input
                type="text"
                name="state"
                value={this.state.state}
                onChange={this.handleChange}
                required
              />
              <label>State</label>
            </div>
            <div className="form-detail">
              <input
                type="text"
                name="postcode"
                value={this.state.postcode}
                onChange={this.handleChange}
                required
              />
              <label>Postcode</label>
            </div>
            <div className="form-detail">
              <input
                type="text"
                name="payment"
                value={this.state.payment}
                onChange={this.handleChange}
                required
              />
              <label>Payment</label>
            </div>
            <div className="total-price">
              You are required to pay ${this.calculateTotal()}
            </div>
            <div className="buttons">
              <div className="submit-btn">
                <button
                  onClick={() => this.props.history.push("/")}
                  type="button"
                >
                  Continue Browsing
                </button>
                <button type="submit">Booking</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapActionToProps = {
  clearCart,
  setUser,
  setTotal,
};

export default withRouter(connect(mapStateToProps, mapActionToProps)(Checkout));
