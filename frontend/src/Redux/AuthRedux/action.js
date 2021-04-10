import axios from "axios";
import {
  POST_SIGNUP_DETAILS_FAILURE,
  POST_SIGNUP_DETAILS_REQUEST,
  POST_SIGNUP_DETAILS_SUCCESS,
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
