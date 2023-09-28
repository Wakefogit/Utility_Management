import React, { lazy, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { themeChange } from "theme-change";
import checkAuth from "./app/auth";
import initializeApp from "./app/init";
import VerifyOtp from "./features/user/VerifyOtp";

import ChangePassword from "./features/user/ChangePassword";

// Importing pages
const Layout = lazy(() => import("./containers/Layout"));

const Login = lazy(() => import("./pages/Login"));

const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));

const Register = lazy(() => import("./pages/Register"));

const UserCreation = lazy(() => import("./pages/User"));
const Analytics = lazy(() => import("./pages/protected/Analytics"));
const Power = lazy(() => import("./pages/Power"));
const PrivateNavigates = lazy(() =>
  import("./components/Navigates/PrivateNavigates")
);

function App() {
  useEffect(() => {
    // 👆 daisy UI themes initialization
    themeChange(false);

    // Add a 'beforeunload' event listener to perform cleanup when the tab is closed
    // const handleBeforeUnload = (event) => {
    //   // Perform cleanup actions here (e.g., remove token, log out)
    //   // Example: Remove the token from local storage
    //   localStorage.removeItem("authToken");
    // };

    // window.addEventListener("beforeunload", handleBeforeUnload);

    // return () => {
    //   // Remove the 'beforeunload' event listener when the component unmounts
    //   window.removeEventListener("beforeunload", handleBeforeUnload);
    // };
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/app/create-user" element={<UserCreation />} />

          <Route path="/forget-password" element={<ForgotPassword />} />

          <Route path="/verify-otp" element={<VerifyOtp />} />

          <Route path="/changepassword" element={<ChangePassword />} />

          <Route path="/register" element={<Register />} />
          <Route path="/layout" element={<Layout />} />
          <Route path="/Power" element={<Power />} />

          {/* Place new routes over this */}
          <Route
            path="/app/*"
            element={
              <PrivateNavigates>
                <Layout />
              </PrivateNavigates>
            }
          />

          <Route path="*" element={<Navigate to={"/login"} replace />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
