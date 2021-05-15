import React, { Component } from "react";
import { connect } from "react-redux";

import { withRouter, Redirect } from "react-router-dom";

import "./Booked.component.css";

export class Booked extends Component {
  handleClick = () => {
    this.props.history.push("/");
  };

  render() {
    const { user, total } = this.props.user;
    const {
      firstName,
      lastName,
      email,
      address1,
      address2,
      city,
      state,
      postcode,
      payment,
    } = user;

    if (total === 0) {
      return (
        <div>
          {alert("You haven't checkout yet")}
          <Redirect to="/" />
        </div>
      );
    }

    return (
      <div className="booked-container">
        <div className="booked-header">Thank you for you booking</div>
        <div className="booked-sub">Your Booking Detail</div>
        <div className="booked-details">
          <div className="name detail">
            <p>Name:</p>
            <p>
              {firstName} {lastName}
            </p>
          </div>
          <div className="email detail">
            <p>Email:</p>
            <p>{email}</p>
          </div>
          <div className="address1 detail">
            <p>Address 1:</p>
            <p>{address1}</p>
          </div>
          <div className="address2 detail">
            <p>Address 2:</p>
            <p>{address2}</p>
          </div>
          <div className="city detail">
            <p>City:</p>
            <p>{city}</p>
          </div>
          <div className="state detail">
            <p>State:</p>
            <p>{state}</p>
          </div>
          <div className="postcode detail">
            <p>Postcode:</p>
            <p>{postcode}</p>
          </div>
          <div className="payment detail">
            <p>Payment:</p>
            <p>{payment}</p>
          </div>
        </div>
        <div className="total">You will be billed ${total}</div>
        <div className="booked-btn">
          <button onClick={() => this.handleClick()}>New Booking</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default withRouter(connect(mapStateToProps)(Booked));
