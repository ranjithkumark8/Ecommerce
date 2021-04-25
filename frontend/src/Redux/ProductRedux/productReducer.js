import {
  category_DATA_FAILURE,
  category_DATA_REQUEST,
  category_DATA_SUCCESS,
  MEN_DATA_FAILURE,
  MEN_DATA_REQUEST,
  MEN_DATA_SUCCESS,
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
} from "./actionTypes";

const initialData = {
  isLoading: false,
  isError: false,
  mensData: [],
  productData: [],
  categoryData: [],
};

export const productReducer = (state = initialData, { type, payload }) => {
  switch (type) {
    case MEN_DATA_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case MEN_DATA_SUCCESS: {
      return {
        ...state,
        mensData: payload,
      };
    }
    case MEN_DATA_FAILURE: {
      return {
        ...state,
        isError: true,
      };
    }
    case PRODUCT_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case PRODUCT_SUCCESS: {
      return {
        ...state,
        productData: payload,
        isLoading: false,
      };
    }
    case PRODUCT_FAILURE: {
      return {
        ...state,
        isError: true,
      };
    }
    case category_DATA_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case category_DATA_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        categoryData: payload,
        isError: false,
      };
    }
    case category_DATA_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    default:
      return state;
  }
};
