import { url } from "../../../../utils";
import { httpProduct } from "../../../../utils/axios";
import { getCheckoutData } from "../../checkout/_redux/action";
import { CHECKOUT_FAILED, CHECKOUT_REQUEST, CHECKOUT_SUCCESS } from "./type";

export const createCheckout =
  (qty, price, idProduct, idUser) => async (dispatch) => {
    dispatch({ type: CHECKOUT_REQUEST });

    const jsonData = {
      idProduct,
      idUser,
      qty,
      price,
    };

    await httpProduct
      .post(`/checkout/`, jsonData)
      .then(({ data }) => {
        dispatch({ type: CHECKOUT_SUCCESS, payload: data });
        alert(`Success Checkout Product`);
        getCheckoutData(data.id);
        window.location.assign(url.checkout.path);
      })
      .catch((err) => {
        dispatch({ type: CHECKOUT_FAILED, payload: err });
        alert(err);
      });
  };
