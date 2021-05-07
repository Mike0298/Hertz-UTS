import React, { Component } from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/actions/cartAction";

import "./ItemCard.component.css";

export class ItemCard extends Component {
  reserve() {
    let { addItem, ...item } = this.props;
    if (item.availability) {
      addItem(item);
      alert("Car added to cart");
    } else alert("Sorry, the car is not available now. Please try other cars");
  }

  render() {
    const {
      category,
      availability,
      brand,
      model,
      model_year,
      mileage,
      fuel_type,
      seats,
      price_per_day,
      description,
      image_url,
    } = this.props;

    return (
      <div className="item">
        <div className="image">
          <img src={`../images/${image_url}`} alt={brand} />
        </div>
        <div className="text">
          <div className="name">
            {brand} {model} {model_year}
          </div>
          <div className="details">
            <p>
              <span>Type:</span> {category}
            </p>
            <p>
              <span>Mileage:</span> {mileage}
            </p>
            <p>
              <span>Fuel Type:</span> {fuel_type}
            </p>
            <p>
              <span>Seats:</span> {seats}
            </p>
            <p>
              <span>Price Per Day:</span> ${price_per_day}
            </p>
            <p>
              <span>Availability:</span> {availability ? "Yes" : "No"}
            </p>
          </div>
          <div className="desc">
            <span>Description:</span> {description}
          </div>
        </div>
        <div className="button">
          <button onClick={() => this.reserve()}>Reserve</button>
        </div>
      </div>
    );
  }
}

const mapActionToProps = {
  addItem,
};

export default connect(null, mapActionToProps)(ItemCard);
