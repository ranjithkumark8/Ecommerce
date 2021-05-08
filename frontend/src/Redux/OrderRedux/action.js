import axios from "axios";
import {
  DELETE_USERORDER_FAILURE,
  DELETE_USERORDER_REQUEST,
  DELETE_USERORDER_SUCCESS,
  GET_USERORDER_FAILURE,
  GET_USERORDER_REQUEST,
  GET_USERORDER_SUCCESS,
  POST_ORDER_FAILURE,
  POST_ORDER_REQUEST,
  POST_ORDER_SUCCESS,
} from "./actionTypes";

export const postOrderRequest = () => {
  return {
    type: POST_ORDER_REQUEST,
  };
};

export const postOrderSuccess = (payload) => {
  return {
    type: POST_ORDER_SUCCESS,
    payload,
  };
};

export const postOrderFailure = (error) => {
  return {
    type: POST_ORDER_FAILURE,
    payload: error,
  };
};

export const getUserOrderRequest = () => {
  return {
    type: GET_USERORDER_REQUEST,
  };
};

export const getUserOrderSuccess = (payload) => {
  // console.log(payload);
  return {
    type: GET_USERORDER_SUCCESS,
    payload,
  };
};

export const getUserOrderFailure = (error) => {
  return {
    type: GET_USERORDER_FAILURE,
    payload: error,
  };
};

export const deleteOrderRequest = () => {
  return {
    type: DELETE_USERORDER_REQUEST,
  };
};

export const deleteOrderSuccess = () => {
  return {
    type: DELETE_USERORDER_SUCCESS,
  };
};

export const deleteOrderFailure = () => {
  return {
    type: DELETE_USERORDER_FAILURE,
  };
};

export const postOrders = (body) => (dispatch) => {
  dispatch(postOrderRequest());
  let token = body.token;
  return axios
    .post("https://ecart763.herokuapp.com/order", body, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      // console.log(res);
      dispatch(postOrderSuccess(res.data));
      dispatch(getUserOrders(token));
    })
    .catch((err) => dispatch(postOrderFailure(err)));
};

export const getUserOrders = (token) => (dispatch) => {
  // console.log(token);
  if (!token) return null;
  dispatch(getUserOrderRequest());
  return axios
    .get("https://ecart763.herokuapp.com/order/userOrders", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      // console.log(res.data);
      dispatch(getUserOrderSuccess(res.data));
    })
    .catch((err) => dispatch(getUserOrderFailure(err)));
};

export const deleteOrder = (token, id) => (dispatch) => {
  dispatch(deleteOrderRequest());
  return axios
    .delete(`https://ecart763.herokuapp.com/order/${id}`)
    .then((res) => {
      // console.log(res);
      dispatch(deleteOrderSuccess());
      dispatch(getUserOrders(token));
    })
    .catch((err) => dispatch(deleteOrderFailure()));
};
