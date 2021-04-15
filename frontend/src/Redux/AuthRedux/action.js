import axios from "axios";
import {
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

export const Logout = () => {
  return {
    type: LOGOUT,
  };
};

export const postSignUpDetails = (payload) => (dispatch) => {
  dispatch(postSignUpDetailsRequest());
  return axios
    .post("http://localhost:2345/signup", payload)
    .then((res) => {
      console.log(res.data);
      return dispatch(postSignUpDetailsSuccess(res.data));
    })
    .catch((error) => dispatch(POST_SIGNUP_DETAILS_FAILURE(error)));
};

// ranjithkumar@gmail.com

export const signInDetails = (payload) => (dispatch) => {
  dispatch(signInDetailsRequest());
  return axios
    .post("http://localhost:2345/signin", payload)
    .then((res) => {
      console.log(res.data);
      return dispatch(signInDetailsSuccess(res.data));
    })
    .catch((error) => dispatch(SIGNIN_DETAILS_FAILURE(error)));
};
