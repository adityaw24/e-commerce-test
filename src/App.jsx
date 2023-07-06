import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { Register } from './components/pages/register'
import 'react-datepicker/dist/react-datepicker.css'
import { getRole, getToken, getUserID, role } from './utils'
import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter
} from 'react-router-dom'
import {
  Login,
  MasterProduct,
  NotFound,
  Register,
  SettingPage
} from './components/pages'
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
      element: <Layout>{/* <Register /> */}</Layout>
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
    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank" rel="noreferrer">
    //       <img
    //         src={reactLogo}
    //         className="logo react"
    //         alt="React logo"
    //       />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  )
}

export default App
