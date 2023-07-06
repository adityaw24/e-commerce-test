import { useEffect } from 'react'
import './App.css'
// import { Register } from './components/pages/register'
import 'react-datepicker/dist/react-datepicker.css'
import { getRole, getToken, getUserID, role } from './utils'
import {
  Route,
  Routes} from 'react-router-dom'
import {
  Login,
  MasterProduct,
  NotFound,
  ProductPage,
  Register} from './components/pages'
import { Layout } from './components/organism'
import { useDispatch } from 'react-redux'
import { getUserDataByID } from './utils/redux/action/userAction'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchUserData = async () => {
      getUserID && await dispatch(getUserDataByID(getUserID))
    }

    fetchUserData()
  })

  const routerAfterLogin = [
    {
      path: '/profile',
      element: <Layout>{/* <SettingPage /> */}</Layout>
    }
  ]

  const routerBeforeLogin = [
    {
      path: '/',
      element: (
        <Layout>
          <ProductPage/>
        </Layout>
      )
    },
    {
      path: '/register',
      element: (
        <Layout>
          <Register />
        </Layout>
      )
    },
    {
      path: '/login',
      element: (
        <Layout>
          <Login />
        </Layout>
      )
    }
  ]

  const routerAdmin = [
    {
      path: '/master-data',
      element: (
        <Layout>
          <MasterProduct />
        </Layout>
      )
    }
  ]

  return (
    <Routes>
      {/* <Layout> */}
      {routerBeforeLogin.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={route.element}
        />
      ))}
      {getToken &&
        routerAfterLogin.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
          />
        ))}
      {getToken &&
        getRole === role.admin &&
        routerAdmin.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
          />
        ))}
      <Route
        path={'*'}
        element={
          <Layout>
            <NotFound />
          </Layout>
        }
        exact
      />
      {/* </Layout> */}
    </Routes>
  )
}

export default App
