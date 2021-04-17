import { combineReducers } from "redux";
import { authReducer } from "./AuthRedux/authReducer";
import { productReducer } from "./ProductRedux/productReducer";

export const rootReducer = combineReducers({
  authReducer: authReducer,
  productReducer: productReducer,
});
