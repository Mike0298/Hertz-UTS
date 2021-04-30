import React, { Component } from "react";
import "./Shop.component.css";

import { connect } from "react-redux";
import { getShop } from "../../redux/actions/shopAction";

export class Shop extends Component {
  componentDidMount() {
    this.props.getShop();
  }

  render() {
    return <div>Shop</div>;
  }
}

const mapStateToProps = (state) => ({
  shop: state.shop,
});

const mapActionToProps = {
  getShop,
};

export default connect(mapStateToProps, mapActionToProps)(Shop);
