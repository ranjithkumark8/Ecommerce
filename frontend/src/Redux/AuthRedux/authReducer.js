import {
  LOGOUT,
  POST_SIGNUP_DETAILS_FAILURE,
  POST_SIGNUP_DETAILS_REQUEST,
  POST_SIGNUP_DETAILS_SUCCESS,
  SIGNIN_DETAILS_FAILURE,
  SIGNIN_DETAILS_REQUEST,
  SIGNIN_DETAILS_SUCCESS,
} from "./actionTypes";

const initialData = {
  isLoggedIn: false,
  isLoading: false,
  isError: false,
  token: "",
  userDetails: {},
  errorMessage: "",
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
        // console.log("error");
        return {
          ...state,
          isError: true,
          errorMessage: payload.message,
        };
      } else {
        // console.log("error false");
        return {
          ...state,
          isLoading: false,
          token: payload.token,
          isLoggedIn: true,
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
    case SIGNIN_DETAILS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case SIGNIN_DETAILS_SUCCESS: {
      if (payload.status === "Failed") {
        // console.log("error");
        return {
          ...state,
          isError: true,
          errorMessage: payload.message,
        };
      } else {
        // console.log("error false");
        return {
          ...state,
          isLoading: false,
          token: payload.token,
          isLoggedIn: true,
        };
      }
    }
    case SIGNIN_DETAILS_FAILURE: {
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        isLoggedIn: false,
        token: "",
      };
    }
    default:
      return state;
  }
};
