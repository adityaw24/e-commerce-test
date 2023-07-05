import { httpLogin } from '../../../../utils/axios'
import { LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS } from './type'

export const loginRequest = (email, password) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST })

  const payload = {
    email,
    password
  }

  await httpLogin
    .post('/login', payload)
    .then(({ data }) => {
      console.log({ data })
      localStorage.setItem('Token', data.accessToken)
      dispatch({ type: LOGIN_SUCCESS, payload: data })
    })
    .catch((err) => {
      dispatch({ type: LOGIN_FAILED, payload: err })
      console.log(err)
      alert(err)
    })
}
