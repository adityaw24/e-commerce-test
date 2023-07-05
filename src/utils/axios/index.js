import axios from 'axios'
import config from '../../../config.json'
import { authToken } from '../config/authConfig'

export const httpLogin = axios.create({
  baseURL: `${config.LOGIN_URL}/`,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    Authorization: authToken
  }
})
