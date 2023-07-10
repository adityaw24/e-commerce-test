import { url } from "../../../../utils";
import { httpProduct } from "../../../../utils/axios";
import {
  CHECKOUT_FAILED,
  CHECKOUT_REQUEST,
  CHECKOUT_SUCCESS,
  SUBMIT_ORDER_FAILED,
  SUBMIT_ORDER_REQUEST,
  SUBMIT_ORDER_SUCCESS,
} from "./type";

export const getCheckoutData = (id) => async (dispatch) => {
  dispatch({ type: CHECKOUT_REQUEST });

  await httpProduct
    .get(`/checkout/${id}`)
    .then(({ data }) => {
      dispatch({ type: CHECKOUT_SUCCESS, payload: data });
    })
    .catch((err) => {
      dispatch({ type: CHECKOUT_FAILED, payload: err });
      alert(err);
    });
};

export const submitOrderProduct =
  (idProduct, idUser, idCheckout, shippingAddress) => async (dispatch) => {
    dispatch({ type: SUBMIT_ORDER_REQUEST });

    const jsonData = {
      idCheckout,
      idProduct,
      idUser,
      shippingAddress,
    };

    await httpProduct
      .post(`/orders`, jsonData)
      .then(({ data }) => {
        dispatch({ type: SUBMIT_ORDER_SUCCESS, payload: data });
        alert("Success Submit Order");
        window.location.assign(url.home.path);
      })
      .catch((err) => {
        dispatch({ type: SUBMIT_ORDER_FAILED, payload: err });
        alert(err);
      });
  };
