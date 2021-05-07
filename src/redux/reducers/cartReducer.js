import {
  CLEAR_CART,
  ADD_ITEM,
  REMOVE_ITEM,
  UPDATE_ITEM,
  CLEAR_RESERVE,
} from "../types";

import { addItem, updateReserveDay, removeItem } from "../utils/cart.util";

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
        cartItems: removeItem(state.cartItems, action.payload),
      };
    case CLEAR_RESERVE:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case UPDATE_ITEM:
      return {
        ...state,
        cartItems: updateReserveDay(
          state.cartItems,
          action.payload,
          action.payload.day
        ),
      };

    default:
      return state;
  }
}
