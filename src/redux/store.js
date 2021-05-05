import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import shopReducer from "./reducers/shopReducer";
import cartReducer from "./reducers/cartReducer";

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
  shop: shopReducer,
  cart: cartReducer,
});

const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
