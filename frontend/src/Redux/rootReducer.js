import { combineReducers } from "redux";
import { authReducer } from "./AuthRedux/authReducer";

export const rootReducer = combineReducers({
  authReducer: authReducer,
});
