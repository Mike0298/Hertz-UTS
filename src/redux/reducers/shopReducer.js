/* eslint-disable import/no-anonymous-default-export */
import { SET_SHOP, LOADING_SHOP } from "../types";

const initialState = {
  loading: false,
  shop: {},
};

export default function (state = initialState, action) {
  switch (action.types) {
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
