import { httpProduct } from '../../../../utils/axios'
import { PRODUCT_DETAIL_FAILED, PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS, PRODUCT_FAILED, PRODUCT_REQUEST, PRODUCT_SUCCESS, UPDATE_PRODUCT_FAILED, UPDATE_PRODUCT_REQUEST, UPDATE_PRODUCT_SUCCESS } from './type'

export const getProduct = () => async (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST })

  await httpProduct
    .get('/product')
    .then(({ data }) => {
      console.log('get data :', data)
      dispatch({ type: PRODUCT_SUCCESS, payload: data })
    })
    .catch((err) => {
      dispatch({ type: PRODUCT_FAILED, payload: err })
      console.log(err)
      alert(err)
    })
}

export const getDetailProduct = (id) => async (dispatch) => {
  dispatch({ type: PRODUCT_DETAIL_REQUEST })

  await httpProduct
    .get(`/product/${id}`)
    .then(({ data }) => {
      console.log(data)
      dispatch({ type: PRODUCT_DETAIL_SUCCESS, payload: data })
    })
    .catch((err) => {
      dispatch({ type: PRODUCT_DETAIL_FAILED, payload: err })
      console.log(err)
      alert(err)
    })
}

export const createProduct = (code, productName, description, qty, price) => async (dispatch) => {
  dispatch({ type: UPDATE_PRODUCT_REQUEST })

  const jsonData = {
    code,
    productName,
    description,
    qty,
    price,
  }

  await httpProduct
    .post(`/product/`, jsonData)
    .then(({ data }) => {
      console.log('success create :', data)
      dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: data })
    })
    .catch((err) => {
      dispatch({ type: UPDATE_PRODUCT_FAILED, payload: err })
      console.log(err)
      alert(err)
    })
}

export const updateProduct = (id, code, productName, description, qty, price) => async (dispatch) => {
  dispatch({ type: UPDATE_PRODUCT_REQUEST })

  const jsonData = {
    code,
    productName,
    description,
    qty,
    price,
  }

  await httpProduct
    .put(`/product/${id}`, jsonData)
    .then(({ data }) => {
      console.log('success update :', data)
      dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: data })
    })
    .catch((err) => {
      dispatch({ type: UPDATE_PRODUCT_FAILED, payload: err })
      console.log(err)
      alert(err)
    })
}

export const deleteProduct = (id) => async (dispatch) => {
  // dispatch({ type: UPDATE_PRODUCT_REQUEST })

  await httpProduct
    .delete(`/product/${id}`)
    // .then(({ data }) => {
    //   console.log('success update :', data)
    //   dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: data })
    // })
    .catch((err) => {
      dispatch({ type: UPDATE_PRODUCT_FAILED, payload: err })
      console.log(err)
      alert(err)
    })
}
