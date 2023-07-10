import { LOGOUT } from "../../../components/organism/header/_redux/type";
import {
  LOGIN_FAILED,
  LOGIN_SUCCESS,
} from "../../../components/pages/login/_redux/type";
import {
  EDIT_PROFILE_FAILED,
  EDIT_PROFILE_SUCCESS,
} from "../../../components/pages/profile/_redux/type";
import {
  REGISTER_FAILED,
  REGISTER_SUCCESS,
} from "../../../components/pages/register/_redux/type";
import { userState } from "../state";
import {
  GET_USER_BY_ID_FAILED,
  GET_USER_BY_ID_SUCCESS,
} from "../type/userType";

export const userReducer = (state = userState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USER_BY_ID_SUCCESS:
      return {
        ...state,
        userData: payload,
      };
    case GET_USER_BY_ID_FAILED:
      return {
        error: payload,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        login: {
          email: payload.email,
          token: payload.accessToken,
          role: payload.role,
          id: payload.id,
          isLogin: true,
        },
      };
    case REGISTER_FAILED:
      return {
        ...state,
        error: payload,
      };
    case LOGOUT:
      return {
        ...state,
        login: userState.login,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        login: {
          email: payload.email,
          token: payload.accessToken,
          role: payload.role,
          id: payload.id,
          isLogin: true,
        },
      };
    case LOGIN_FAILED:
      return {
        ...state,
        error: payload,
      };
    case EDIT_PROFILE_SUCCESS:
      return {
        ...state,
        login: {
          ...state.login,
          email: payload.email,
        },
      };
    case EDIT_PROFILE_FAILED:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
