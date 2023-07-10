import { url } from "../../../../utils";
import { LOGOUT } from "./type";

export const logoutRequest = () => async (dispatch) => {
  localStorage.clear();
  await dispatch({ type: LOGOUT });
  await alert("Success Logout");
  await window.location.assign(url.home.path);
};
