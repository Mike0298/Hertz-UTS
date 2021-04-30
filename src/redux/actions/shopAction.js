import { SET_SHOP, LOADING_SHOP } from "../types";
import axios from "axios";

export const getShop = () => (dispatch) => {
  dispatch({ type: LOADING_SHOP });
  axios
    .get("./cars.json")
    .then((res) => {
      let shop = res.data;
      let data = {};
      data.shop = shop;
      dispatch({
        type: SET_SHOP,
        payload: data,
      });
    })
    .catch((e) => {
      console.log(e);
    });
};
