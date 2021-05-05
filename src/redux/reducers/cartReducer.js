import { CLEAR_CART, ADD_ITEM, REMOVE_ITEM, UPDATE_ITEM } from "../types";

import { addItem, updateReserveDay } from "../utils/cart.util";

const initialState = {
  cartItems: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItem(state.cartItems, action.payload),
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case UPDATE_ITEM:
      return {
        ...state,
        cartItems: updateReserveDay(state.cartItems, action.payload),
      };

    default:
      return state;
  }
}
