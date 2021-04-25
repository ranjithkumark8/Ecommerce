import { combineReducers } from "redux";
import { authReducer } from "./AuthRedux/authReducer";
import { orderReducer } from "./OrderRedux/orderReducer";
import { productReducer } from "./ProductRedux/productReducer";

export const rootReducer = combineReducers({
  authReducer: authReducer,
  productReducer: productReducer,
  orderReducer: orderReducer,
});
