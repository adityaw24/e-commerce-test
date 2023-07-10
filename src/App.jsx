/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import "./App.css";
// import { Register } from './components/pages/register'
import "react-datepicker/dist/react-datepicker.css";
import { getRole, getToken, getUserID, role, url } from "./utils";
import { Route, Routes } from "react-router-dom";
import {
  CheckoutPage,
  Login,
  MasterProduct,
  NotFound,
  ProductPage,
  ProfilePage,
  Register,
} from "./components/pages";
import { Layout } from "./components/organism";
import { useDispatch } from "react-redux";
import { getUserDataByID } from "./utils/redux/action/userAction";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchUserData = async () => {
      getUserID && (await dispatch(getUserDataByID(Number(getUserID))));
    };

    fetchUserData();
  }, [getUserID]);

  const routerAfterLogin = [
    {
      path: url.profile.path,
      element: (
        <Layout>
          <ProfilePage />
        </Layout>
      ),
    },
    {
      path: url.checkout.path,
      element: (
        <Layout>
          <CheckoutPage />
        </Layout>
      ),
    },
  ];

  const routerBeforeLogin = [
    {
      path: url.home.path,
      element: (
        <Layout>
          <ProductPage />
        </Layout>
      ),
    },
    {
      path: url.register.path,
      element: (
        <Layout>
          <Register />
        </Layout>
      ),
    },
    {
      path: url.login.path,
      element: (
        <Layout>
          <Login />
        </Layout>
      ),
    },
  ];

  const routerAdmin = [
    {
      path: url.masterDataProduct.path,
      element: (
        <Layout>
          <MasterProduct />
        </Layout>
      ),
    },
  ];

  return (
    <Routes>
      {/* <Layout> */}
      {routerBeforeLogin.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
      {getToken &&
        routerAfterLogin.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      {getToken &&
        getRole === role.admin &&
        routerAdmin.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      <Route
        path={"*"}
        element={
          <Layout>
            <NotFound />
          </Layout>
        }
        exact
      />
      {/* </Layout> */}
    </Routes>
  );
};

export default App;
