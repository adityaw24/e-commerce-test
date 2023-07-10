import { url } from "../../../../utils";
import { httpLogin } from "../../../../utils/axios";
import { LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS } from "./type";

export const loginRequest = (email, password) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  const payload = {
    email,
    password,
  };

  await httpLogin
    .post("/login", payload)
    .then(({ data }) => {
      localStorage.setItem("Token", data.accessToken);
      localStorage.setItem("Role", data.user.role);
      localStorage.setItem("UserID", data.user.id);
      dispatch({ type: LOGIN_SUCCESS, payload: data });
      alert("Success Login");
      window.location.assign(url.home.path);
    })
    .catch((err) => {
      dispatch({ type: LOGIN_FAILED, payload: err });
      alert(err);
    });
};
