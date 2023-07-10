import { httpLogin } from "../../../../utils/axios";
import {
  EDIT_PROFILE_FAILED,
  EDIT_PROFILE_REQUEST,
  EDIT_PROFILE_SUCCESS,
} from "./type";

export const editProfile =
  (email, password, role, name, gender, birthDate, address, id) =>
  async (dispatch) => {
    dispatch({ type: EDIT_PROFILE_REQUEST });

    const jsonData = {
      name,
      password,
      role,
      email,
      gender,
      birthDate,
      address,
    };

    await httpLogin
      .put(`/users/${id}`, jsonData)
      .then(({ data }) => {
        dispatch({ type: EDIT_PROFILE_SUCCESS, payload: data });
        alert("Success Edit Profile");
      })
      .catch((err) => {
        dispatch({ type: EDIT_PROFILE_FAILED, payload: err });
        alert(err);
      });
  };
