import axios from "axios";
import {
  category_DATA_FAILURE,
  category_DATA_REQUEST,
  category_DATA_SUCCESS,
  FILTER_DATA_FAILURE,
  FILTER_DATA_REQUEST,
  FILTER_DATA_SUCCESS,
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

export const categoryDataRequest = () => {
  return {
    type: category_DATA_REQUEST,
  };
};

export const categoryDataSuccess = (payload) => {
  return {
    type: category_DATA_SUCCESS,
    payload,
  };
};

export const categoryDataFailure = (error) => {
  return {
    type: category_DATA_FAILURE,
    payload: error,
  };
};

export const filterDataRequest = () => {
  return {
    type: FILTER_DATA_REQUEST,
  };
};

export const filterDataSuccess = (payload) => {
  return {
    type: FILTER_DATA_SUCCESS,
    payload,
  };
};

export const filterDataFailure = (err) => {
  return {
    type: FILTER_DATA_FAILURE,
    payload: err,
  };
};

export const MenData = (category) => (dispatch) => {
  dispatch(MensDataRequest());
  return axios
    .get(`https://ecart763.herokuapp.com/products/${category}`)
    .then((res) => {
      // console.log(res.data);
      dispatch(MensDataSuccess(res.data.data));
    })
    .catch((err) => dispatch(MensDataFailure(err)));
};

export const productData = (id) => (dispatch) => {
  // console.log(id);
  dispatch(productRequest());
  return axios
    .get(`https://ecart763.herokuapp.com/products/${id}`)
    .then((res) => {
      // console.log(res.data);
      dispatch(productSuccess(res.data.data)).then((res) => {
        return { response: true };
      });
    })
    .catch((err) => dispatch(productFailure(err)));
};

export const categoryData = () => (dispatch) => {
  // console.log("sjfd");
  dispatch(categoryDataRequest());
  return axios
    .get("https://ecart763.herokuapp.com/tag")
    .then((res) => {
      // console.log(res.data.data);
      dispatch(categoryDataSuccess(res.data.data));
    })
    .catch((err) => categoryDataFailure(err));
};

export const filterData = (tagId, categoryId) => (dispatch) => {
  // console.log(tagId, categoryId);
  dispatch(filterDataRequest());
  return axios
    .get(
      `https://ecart763.herokuapp.com/products/filter/${tagId}/category/${categoryId}`
    )
    .then((res) => {
      // console.log(res.data);
      dispatch(filterDataSuccess(res.data.data));
    })
    .catch((err) => dispatch(filterDataFailure(err)));
};
