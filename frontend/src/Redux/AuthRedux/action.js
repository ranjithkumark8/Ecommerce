import axios from "axios";
import { getUserOrderSuccess } from "../OrderRedux/action";
import {
  GET_USER_DETAILS_FAILURE,
  GET_USER_DETAILS_REQUEST,
  GET_USER_DETAILS_SUCCESS,
  LOGOUT,
  POST_SIGNUP_DETAILS_FAILURE,
  POST_SIGNUP_DETAILS_REQUEST,
  POST_SIGNUP_DETAILS_SUCCESS,
  SIGNIN_DETAILS_FAILURE,
  SIGNIN_DETAILS_REQUEST,
  SIGNIN_DETAILS_SUCCESS,
} from "./actionTypes";

// Posting SignUp Details

export const postSignUpDetailsRequest = () => {
  return {
    type: POST_SIGNUP_DETAILS_REQUEST,
  };
};

export const postSignUpDetailsSuccess = (payload) => {
  return {
    type: POST_SIGNUP_DETAILS_SUCCESS,
    payload,
  };
};

export const postSignUpDetailsFailure = (error) => {
  return {
    type: POST_SIGNUP_DETAILS_FAILURE,
    error,
  };
};

export const signInDetailsRequest = () => {
  return {
    type: SIGNIN_DETAILS_REQUEST,
  };
};

export const signInDetailsSuccess = (payload) => {
  return {
    type: SIGNIN_DETAILS_SUCCESS,
    payload,
  };
};

export const signInDetailsFailure = (error) => {
  return {
    type: SIGNIN_DETAILS_FAILURE,
    error,
  };
};

export const getUserDetailsRequest = () => {
  return {
    type: GET_USER_DETAILS_REQUEST,
  };
};

export const getUserDetailsSuccess = (payload) => {
  return {
    type: GET_USER_DETAILS_SUCCESS,
    payload,
  };
};

export const getUserDetailsFailure = (err) => {
  return {
    type: GET_USER_DETAILS_FAILURE,
    err,
  };
};
export const Logout = () => {
  return {
    type: LOGOUT,
  };
};

export const postSignUpDetails = (payload) => (dispatch) => {
  dispatch(postSignUpDetailsRequest());
  return axios
    .post("https://ecart763.herokuapp.com/signup", payload)
    .then((res) => {
      // console.log(res.data);
      return dispatch(postSignUpDetailsSuccess(res.data));
    })
    .catch((error) => dispatch(postSignUpDetailsFailure(error)));
};

// ranjithkumar@gmail.com

export const signInDetails = (payload) => (dispatch) => {
  dispatch(signInDetailsRequest());
  // console.log("asfj");
  return axios
    .post("https://ecart763.herokuapp.com/signin", payload)
    .then((res) => {
      // console.log(res.data);
      return dispatch(signInDetailsSuccess(res.data));
    })
    .catch((error) => {
      // console.log(error);
      dispatch(signInDetailsFailure(error));
    });
};

export const logOutReset = (payload) => (dispatch) => {
  dispatch(Logout());
  let data = { data: [] };
  dispatch(getUserOrderSuccess(data));
};

export const getUserDetails = (token) => (dispatch) => {
  dispatch(getUserDetailsRequest());
  return axios
    .get("https://ecart763.herokuapp.com/signin", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => dispatch(getUserDetailsSuccess(res.data.data)))
    .catch((err) => dispatch(getUserDetailsFailure(err)));
};
