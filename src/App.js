import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/layout/Layout";
import Forgot from "./pages/auth/Forgot";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Reset from "./pages/auth/Reset";
import Verify from "./pages/auth/Verify";
import ChangePassword from "./pages/changePassword/ChangePassword";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import UserList from "./pages/userList/UserList";
import Contact from "./components/Contact/Contact";
import Shipping from "./pages/Shipping/Shipping";
import {
  getLoginStatus,
  getUser,
  selectIsLoggedIn,
  selectUser,
} from "./redux/features/auth/authSlice";
// import { GoogleOAuthProvider } from "@react-oauth/google";
import LoginWithCode from "./pages/auth/LoginWithCode";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Team from "./pages/Team/Team";
import CreateDelivery from "./pages/order/CreateDelivery";
import OrderList from "./pages/orderList/OrderList";

axios.defaults.withCredentials = true;

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(getLoginStatus());
    if (isLoggedIn && user === null) {
      dispatch(getUser());
    }
  }, [dispatch, user, isLoggedIn]);

  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        {/* <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}></GoogleOAuthProvider> */}
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <Home />
                </Layout>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/loginWithCode/:email" element={<LoginWithCode />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot" element={<Forgot />} />
            <Route path="/resetPassword/:resetToken" element={<Reset />} />
            <Route
              path="/verify/:verificationToken"
              element={
                <Layout>
                  <Verify />
                </Layout>
              }
            />
            <Route
              path="/profile"
              element={
                <Layout>
                  <Profile />
                </Layout>
              }
            />
            <Route
              path="/createOrder"
              element={
                <Layout>
                  <CreateDelivery />
                </Layout>
              }
            />
            <Route
              path="/about"
              element={
                <Layout>
                  <About />
                </Layout>
              }
            />
            <Route
              path="/services"
              element={
                <Layout>
                  <Services />
                </Layout>
              }
            />
            <Route
              path="/team"
              element={
                <Layout>
                  <Team />
                </Layout>
              }
            />
            <Route
              path="/change-password"
              element={
                <Layout>
                  <ChangePassword />
                </Layout>
              }
            />
            <Route
              path="/users"
              element={
                <Layout>
                  <UserList />
                </Layout>
              }
            />
            <Route
              path="/orders"
              element={
                <Layout>
                  <OrderList />
                </Layout>
              }
            />
            <Route
              path="/contact"
              element={
                <Layout>
                  <Contact />
                </Layout>
              }
            />
            <Route
              path="/shipping"
              element={
                <Layout>
                  <Shipping />
                </Layout>
              }
            />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
