import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './utils/redux/store.js'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
)

// const Root = () => {
//   const LoginPage = lazy(() =>
//     import('../src/components/pages/login')
//   )
//   return (
//     <React.StrictMode>
//       <Provider store={store}>
//         <PersistGate persistor={persistor}>
//           {getToken ? <App /> : <LoginPage />}
//         </PersistGate>
//       </Provider>
//     </React.StrictMode>
//   )
// }

// ReactDOM.createRoot(document.getElementById('root')).render(<Root />)
