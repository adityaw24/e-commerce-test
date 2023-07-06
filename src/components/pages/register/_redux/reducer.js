import { initState } from '../../login/_redux/state'
import { LOGOUT, REGISTER_FAILED, REGISTER_SUCCESS } from './type'

export const registerReducer = (state = initState, action) => {
  const { type, payload } = action
  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        login: {
          email: payload.email,
          token: payload.accessToken,
          role: payload.role,
          id: payload.id,
          isLogin: false
        }
      }
    case REGISTER_FAILED:
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
