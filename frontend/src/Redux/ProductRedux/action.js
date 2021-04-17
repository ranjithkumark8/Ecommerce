import axios from "axios";
import {
  MEN_DATA_FAILURE,
  MEN_DATA_REQUEST,
  MEN_DATA_SUCCESS,
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
} from "./actionTypes";

export const MensDataRequest = () => {
  return {
    type: MEN_DATA_REQUEST,
  };
};

export const MensDataSuccess = (payload) => {
  return {
    type: MEN_DATA_SUCCESS,
    payload,
  };
};

export const MensDataFailure = (error) => {
  return {
    type: MEN_DATA_FAILURE,
    error,
  };
};

export const productRequest = () => {
  return {
    type: PRODUCT_REQUEST,
  };
};

export const productSuccess = (payload) => {
  return {
    type: PRODUCT_SUCCESS,
    payload,
  };
};

export const productFailure = (error) => {
  return {
    type: PRODUCT_FAILURE,
    error,
  };
};

export const MenData = (category) => (dispatch) => {
  dispatch(MensDataRequest());
  return axios
    .get(`http://localhost:2345/products/${category}`)
    .then((res) => {
      // console.log(res.data);
      dispatch(MensDataSuccess(res.data));
    })
    .catch((err) => dispatch(MensDataFailure(err)));
};

export const productData = (id) => (dispatch) => {
  console.log(id);
  dispatch(productRequest());
  return axios
    .get(`http://localhost:2345/products/${id}`)
    .then((res) => {
      // console.log(res.data);
      dispatch(productSuccess(res.data)).then((res) => {
        return { response: true };
      });
    })
    .catch((err) => dispatch(productFailure(err)));
};
