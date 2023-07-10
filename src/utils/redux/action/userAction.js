import { httpLogin } from "../../axios";
import {
  GET_USER_BY_ID_FAILED,
  GET_USER_BY_ID_SUCCESS,
} from "../type/userType";

export const getUserDataByID = (id) => async (dispatch) => {
  await httpLogin
    .get(`/users/${id}`)
    .then(({ data }) => {
      dispatch({ type: GET_USER_BY_ID_SUCCESS, payload: data });
    })
    .catch((error) => {
      dispatch({ type: GET_USER_BY_ID_FAILED, payload: error });
    });
};
