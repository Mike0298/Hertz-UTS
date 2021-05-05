import React, { Component } from "react";
import "./Shop.component.css";

import { connect } from "react-redux";
import { getShop } from "../../redux/actions/shopAction";

import ItemCart from "../ItemCard/ItemCard.component";

export class Shop extends Component {
  componentDidMount() {
    this.props.getShop();
  }

  render() {
    const { shop, loading } = this.props.shop;

    let shopLoaded = !loading ? (
      <div className="items">
        {shop.cars.map(({ id, ...otherProps }) => (
          <ItemCart key={id} id={id} {...otherProps} />
        ))}
      </div>
    ) : (
      // <div className="bruh">bruh</div>
      <div className="loading">loading</div>
    );

    return shopLoaded;
  }
}

const mapStateToProps = (state) => ({
  shop: state.shop,
});

const mapActionToProps = {
  getShop,
};

export default connect(mapStateToProps, mapActionToProps)(Shop);
