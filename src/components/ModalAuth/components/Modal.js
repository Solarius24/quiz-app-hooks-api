import React from "react";
import ReactDOM from "react-dom";
import { Container } from "react-bootstrap";
import AuthProvider from "../contexts/AuthContext";
import SignUp from "./SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
import image from "./image.jpg";

export default function Modal() {
  return ReactDOM.createPortal(
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        margin: "0",
        width: "100vw",
        backgroundSize: "100% 100%",
      }}
    >
      <Container
        className="d-flex align-items-center justify-content-center "
        style={{
          minHeight: "100vh",
        }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          {/* <BrowserRouter> */}
          <AuthProvider>
            <Routes>
              <Route element={<PrivateRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/dashboard/update=profile" element={<UpdateProfile />} />
              </Route>
              <Route path="/dashboard/signup" element={<SignUp />} />
              <Route path="/dashboard/login" element={<Login />} />
              <Route path="/dashboard/forgot-password" element={<ForgotPassword />} />
            </Routes>
          </AuthProvider>
          {/* </BrowserRouter> */}
        </div>
      </Container>
    </div>,
    document.getElementById("portal")
  );
}
