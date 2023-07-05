import {
  GET_USER_BY_ID_FAILED,
  GET_USER_BY_ID_SUCCESS
} from '../type/userType'

const initState = {
  userData: {},
  error: ''
}

export const userReducer = (state = initState, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_USER_BY_ID_SUCCESS:
      return {
        ...state,
        userDate: payload
      }
    case GET_USER_BY_ID_FAILED:
      return {
        error: payload
      }
    default:
      return state
  }
}
