import { CLEAR_CART, ADD_ITEM, REMOVE_ITEM, UPDATE_ITEM } from "../types";

export const clearCart = () => (dispatch) => {
  dispatch({ type: CLEAR_CART });
};

export const addItem = (item) => (dispatch) => {
  dispatch({ type: ADD_ITEM, payload: item });
};

export const removeItem = (item) => (dispatch) => {
  dispatch({ type: REMOVE_ITEM, payload: item });
};

export const updateItem = (item) => (dispatch) => {
  dispatch({ type: UPDATE_ITEM, payload: item });
};
