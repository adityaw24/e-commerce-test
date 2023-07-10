import {
  CHECKOUT_FAILED,
  CHECKOUT_SUCCESS,
  SUBMIT_ORDER_FAILED,
  SUBMIT_ORDER_SUCCESS,
} from "../../../components/pages/checkout/_redux/type";
import {
  PRODUCT_DETAIL_FAILED,
  PRODUCT_DETAIL_SUCCESS,
  PRODUCT_FAILED,
  PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILED,
  UPDATE_PRODUCT_SUCCESS,
} from "../../../components/pages/masterProduct/_redux/type";
import { productState } from "../state";

export const productReducer = (state = productState, action) => {
  const { type, payload } = action;
  switch (type) {
    case PRODUCT_SUCCESS:
      return {
        ...state,
        product: payload,
      };
    case PRODUCT_FAILED:
      return {
        ...state,
        error: payload,
      };
    case UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        productDetail: payload,
      };
    case UPDATE_PRODUCT_FAILED:
      return {
        ...state,
        error: payload,
      };
    case PRODUCT_DETAIL_SUCCESS:
      return {
        ...state,
        productDetail: payload,
      };
    case PRODUCT_DETAIL_FAILED:
      return {
        ...state,
        error: payload,
      };
    case CHECKOUT_SUCCESS:
      return {
        ...state,
        checkoutProduct: payload,
      };
    case CHECKOUT_FAILED:
      return {
        ...state,
        error: payload,
      };
    case SUBMIT_ORDER_SUCCESS:
      return {
        ...state,
        submitOrder: payload,
      };
    case SUBMIT_ORDER_FAILED:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
