import {
  POST_SIGNUP_DETAILS_FAILURE,
  POST_SIGNUP_DETAILS_REQUEST,
  POST_SIGNUP_DETAILS_SUCCESS,
} from "./actionTypes";

const initialData = {
  isLoggedIn: false,
  isLoading: false,
  isError: false,
  token: "",
  userDetails: {},
};

export const authReducer = (state = initialData, { type, payload }) => {
  switch (type) {
    case POST_SIGNUP_DETAILS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case POST_SIGNUP_DETAILS_SUCCESS: {
      if (payload.status === "Failed") {
        console.log("error");
        return {
          ...state,
          isError: true,
        };
      } else {
        console.log("error false");
        return {
          ...state,
          isLoading: false,
          token: payload.token,
        };
      }
    }
    case POST_SIGNUP_DETAILS_FAILURE: {
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};
