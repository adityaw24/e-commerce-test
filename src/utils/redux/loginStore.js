import storage from 'redux-persist/lib/storage'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore
} from 'redux-persist'
import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension'
import * as loginAction from '../../components/pages/login/_redux/action'
import thunk from 'redux-thunk'
import { loginReducer } from '../../components/pages/login/_redux/reducer'

const persistConfig = {
  key: 'root',
  storage
}

const reducers = combineReducers({
  login: loginReducer
})

const persistedReducer = persistReducer(persistConfig, reducers)

// const composeEnhancers = composeWithDevTools({
//   loginAction,
//   trace: true,
//   traceLimit: 25
// })

export const storeLogin = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER
        ]
      }
    })
})

// export const store = createStore(
//   persistedReducer,
//   composeEnhancers(applyMiddleware(thunk))
// ) // Put "logger" if you want to log Redux

export const persistorLogin = persistStore(storeLogin)
