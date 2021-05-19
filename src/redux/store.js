import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import shopReducer from "./reducers/shopReducer";
import cartReducer from "./reducers/cartReducer";
import userReducer from "./reducers/userReducer";

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
  shop: shopReducer,
  cart: cartReducer,
  user: userReducer,
});

const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(...middleware)
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
