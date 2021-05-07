import React, { Component } from "react";
import { connect } from "react-redux";

import "./CartItem.component.css";

import {
  removeItem,
  addItem,
  clearReserve,
} from "../../redux/actions/cartAction";

export class CartItem extends Component {
  removeReserve() {
    let { clearReserve, addItem, removeItem, ...item } = this.props;
    clearReserve(item);
  }

  actionCase = (action) => {
    let { clearReserve, addItem, removeItem, ...item } = this.props;
    switch (action) {
      case "add":
        addItem(item);
        break;
      case "remove":
        removeItem(item);
        break;
      case "clear":
        clearReserve(item);
        break;
      default:
        console.log("case error");
    }
  };

  render() {
    const {
      brand,
      model,
      model_year,
      price_per_day,
      image_url,
      reserve_day,
    } = this.props;
    return (
      <div className="cart-item">
        <div className="thumbnail detail">
          <img src={`../images/${image_url}`} alt="" />
        </div>
        <div className="vehicle detail">
          {model_year} {brand} {model}
        </div>
        <div className="price detail">${price_per_day}</div>
        <div className="day detail">
          <button
            onClick={() => this.actionCase("remove")}
            className="reserve-icon"
          >
            <i className="icon ion-md-arrow-dropleft"></i>
          </button>
          <p>{reserve_day}</p>
          <button
            onClick={() => this.actionCase("add")}
            className="reserve-icon"
          >
            <i className="icon ion-md-arrow-dropright"></i>
          </button>
        </div>
        <div className="actions detail">
          <button onClick={() => this.actionCase("clear")}>Remove</button>
        </div>
      </div>
    );
  }
}

const mapActionToProps = {
  removeItem,
  addItem,
  clearReserve,
};

export default connect(null, mapActionToProps)(CartItem);
