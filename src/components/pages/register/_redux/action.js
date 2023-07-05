import { httpLogin } from '../../../../utils/axios'
import {
  REGISTER_FAILED,
  REGISTER_REQUEST,
  REGISTER_SUCCESS
} from './type'

export const registerUser =
  (email, password, name, gender, birthDate, address) =>
  async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST })

    const payload = {
      name,
      email,
      password,
      role: 'user',
      gender,
      birthDate,
      address
    }

    await httpLogin
      .post('/register', payload)
      .then(({ data }) => {
        // console.log({ data })
        localStorage.setItem('Token', data.accessToken)
        localStorage.setItem('Role', data.user.role)
        localStorage.setItem('UserID', data.user.id)
        dispatch({ type: REGISTER_SUCCESS, payload: data })
        alert('Success Register')
      })
      .catch((err) => {
        dispatch({ type: REGISTER_FAILED, payload: err })
        alert(err)
      })
  }
