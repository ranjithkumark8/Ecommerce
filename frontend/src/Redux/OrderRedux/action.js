import axios from "axios";
import {
  CHECKOUT_FAILURE,
  CHECKOUt_REQUEST,
  CHECKOUT_SUCCESS,
  DELETE_USERORDER_FAILURE,
  DELETE_USERORDER_MANY_FAILURE,
  DELETE_USERORDER_MANY_REQUEST,
  DELETE_USERORDER_MANY_SUCCESS,
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

export const checkOutRequest = () => {
  return {
    type: CHECKOUt_REQUEST,
  };
};

export const checkOutSuccess = (payload) => {
  return {
    type: CHECKOUT_SUCCESS,
    payload,
  };
};

export const checkOutFailure = (err) => {
  return {
    type: CHECKOUT_FAILURE,
  };
};

export const deleteManyOrderRequest = () => {
  return {
    type: DELETE_USERORDER_MANY_REQUEST,
  };
};

export const deleteManyOrderSuccess = () => {
  return {
    type: DELETE_USERORDER_MANY_SUCCESS,
  };
};

export const deleteManyOrderFailure = () => {
  return {
    type: DELETE_USERORDER_MANY_FAILURE,
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

// function deleteUserOrders(token) {
//   axios.delete("http://localhost:2345/order/userOrders", {
//     headers:{Authorization: `Bearer ${token}`}
//   }).then((res) => )
// }

export const checkOutOrderGet = (token) => (dispatch) => {
  // console.log(token, "request made");
  dispatch(checkOutRequest());
  return axios
    .get("https://ecart763.herokuapp.com/checkOut", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      // console.log(res.data, "previous order");
      dispatch(checkOutSuccess(res.data));
    })
    .catch((err) => dispatch(checkOutFailure(err)));
};

export const checkoutOrder = (token, body) => (dispatch) => {
  return axios
    .post("https://ecart763.herokuapp.com/checkOut", body, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      dispatch(checkOutOrderGet(token));
    })
    .catch((err) => dispatch(checkOutFailure(err)));
};

export const deleteManyOrder = (token, body) => (dispatch) => {
  // console.log(token, "delete many token");
  dispatch(deleteManyOrderRequest());
  return axios
    .delete("https://ecart763.herokuapp.com/order/userOrders/delete", {
      headers: { Authorization: `Bearer ${token}` },
      data: { body },
    })
    .then((res) => {
      dispatch(deleteManyOrderSuccess());
      dispatch(getUserOrders(token));
    })
    .catch((err) => dispatch(deleteManyOrderFailure()));
};
