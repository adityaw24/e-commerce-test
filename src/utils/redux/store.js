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
import { loginReducer } from '../../components/pages/login/_redux/reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import * as loginAction from '../../components/pages/login/_redux/action'
import thunk from 'redux-thunk'
import rootReducer from './reducer'

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// const composeEnhancers = composeWithDevTools({
//   loginAction,
//   trace: true,
//   traceLimit: 25
// })

export const store = configureStore({
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

export const persistor = persistStore(store)
