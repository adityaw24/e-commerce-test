import { initState } from './state'
import { PRODUCT_DETAIL_FAILED, PRODUCT_DETAIL_SUCCESS, PRODUCT_FAILED, PRODUCT_SUCCESS, UPDATE_PRODUCT_FAILED, UPDATE_PRODUCT_SUCCESS } from './type'

export const productReducer = (state = initState, action) => {
  const { type, payload } = action
  switch (type) {
    case PRODUCT_SUCCESS:
      return {
        ...state,
        product: payload,
      }
    case PRODUCT_FAILED:
      return {
        ...state,
        error: payload
      }
    case UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        productDetail: payload,
      }
    case UPDATE_PRODUCT_FAILED:
      return {
        ...state,
        error: payload
      }
    case PRODUCT_DETAIL_SUCCESS:
      return {
        ...state,
        productDetail: payload,
      }
    case PRODUCT_DETAIL_FAILED:
      return {
        ...state,
        error: payload
      }
    default:
      return state
  }
}
