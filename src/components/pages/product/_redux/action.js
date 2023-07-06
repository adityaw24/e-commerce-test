import { httpProduct } from '../../../../utils/axios'
import { UPDATE_PRODUCT_FAILED } from './type'

export const createCheckout = (qty, price, idProduct, idUser) => async (dispatch) => {
  // dispatch({ type: UPDATE_PRODUCT_REQUEST })

  const jsonData = {
    idProduct,
    idUser,
    qty,
    price,
  }

  await httpProduct
    .post(`/checkout/`, jsonData)
    .then(() => {
      // dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: data })
      alert(`Success Checkout Product`)
    })
    .catch((err) => {
      dispatch({ type: UPDATE_PRODUCT_FAILED, payload: err })
      alert(err)
    })
}