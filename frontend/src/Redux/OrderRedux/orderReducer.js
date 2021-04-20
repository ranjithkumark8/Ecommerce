import {
  GET_USERORDER_FAILURE,
  GET_USERORDER_REQUEST,
  GET_USERORDER_SUCCESS,
  POST_ORDER_FAILURE,
  POST_ORDER_REQUEST,
  POST_ORDER_SUCCESS,
} from "./actionTypes";

const initialData = {
  isLoading: false,
  isError: false,
  ordersData: [],
  orderedProductId: [],
};

export const orderReducer = (state = initialData, { type, payload }) => {
  switch (type) {
    case POST_ORDER_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case POST_ORDER_SUCCESS: {
      return {
        ...state,
        isError: false,
        isLoading: false,
      };
    }
    case POST_ORDER_FAILURE: {
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    }
    case GET_USERORDER_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_USERORDER_SUCCESS: {
      console.log(payload.data);
      return {
        ...state,
        isLoading: false,
        ordersData: payload.data,
        orderedProductId: payload.data.map((item) => item.productId),
      };
    }
    case GET_USERORDER_FAILURE: {
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
