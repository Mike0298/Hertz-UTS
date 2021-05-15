import {
  CLEAR_USER,
  SET_USER,
  SET_USER_TOTAL,
  CLEAR_USER_TOTAL,
} from "../types";

const initialState = {
  user: {},
  total: 0,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case CLEAR_USER:
      return {
        ...state,
        user: {},
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case SET_USER_TOTAL:
      return {
        ...state,
        total: action.payload,
      };
    case CLEAR_USER_TOTAL:
      return {
        ...state,
        total: 0,
      };
    default:
      return state;
  }
}
