import { initState } from '../../../pages/login/_redux/state'
import { LOGOUT } from './type'

export const loginReducer = (state = initState, action) => {
  const { type } = action
  switch (type) {
    case LOGOUT:
      return {
        ...state,
        login: initState.login
      }
    default:
      return state
  }
}
