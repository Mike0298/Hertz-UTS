/* eslint-disable import/no-anonymous-default-export */
import { SET_SHOP, LOADING_SHOP } from "../types";

const initialState = {
  loading: true,
  shop: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_SHOP:
      return {
        loading: false,
        ...action.payload,
      };
    case LOADING_SHOP:
      return {
        loading: true,
        shop: {},
      };
    default:
      return state;
  }
}
