import { initState } from './state'
import {
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILED,
  REGISTER_SUCCESS
} from './type'

export const loginReducer = (state = initState, action) => {
  const { type, payload } = action
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        login: {
          email: payload.email,
          token: payload.accessToken,
          isLogin: false
        }
      }
    case LOGIN_FAILED:
      return {
        ...state,
        error: payload
      }
    case LOGOUT:
      return {
        ...state,
        login: initState.login
      }
    default:
      return state
  }
}
