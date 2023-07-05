import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import App from './App'
import { persistorLogin, storeLogin } from './utils/redux/loginStore'

const RootLogin = () => {
  return (
    // <Provider store={storeLogin}>
    //   <PersistGate loading={null} persistor={persistorLogin}>
    <App />
    //   </PersistGate>
    // </Provider>
  )
}

export default RootLogin
