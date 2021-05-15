import {
  SET_USER,
  CLEAR_USER,
  SET_USER_TOTAL,
  CLEAR_USER_TOTAL,
} from "../types";

export const setUser = (user) => (dispatch) => {
  dispatch({ type: SET_USER, payload: user });
};

export const clearUser = () => (dispatch) => {
  dispatch({ type: CLEAR_USER });
};

export const setTotal = (amount) => (dispatch) => {
  dispatch({ type: SET_USER_TOTAL, payload: amount });
};

export const clearTotal = () => (dispatch) => {
  dispatch({ type: CLEAR_USER_TOTAL });
};
