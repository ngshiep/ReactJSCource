import React from "react";
import "./login.css";
import { Field, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { saveDataToLS } from "../../../utils/localStorage";

export default function Login() {
  const navigate = useNavigate();
  const handleLogin = (values) => {
    if (values.email !== "admin@gmail.com" || values.password !== "letmein") {
      alert("Đăng nhập không thành công");
      return;
    }
    navigate("/");
    saveDataToLS("user", JSON.stringify(values));
    console.log("🚀 ~ file: index.jsx:16 ~ handleLogin ~ values:", values);
  };
  return (
    <div className="container">
      <h2 className="login_header">Login</h2>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleLogin}
      >
        {({ isSubmitting, values, handleChange }) => (
          <>
            <div className="login_input_container">
              <label htmlFor="email" className="login_label">
                Email:
              </label>
              <input
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                className="login_input"
                placeholder="Email"
              ></input>
            </div>
            <div className="login_input_container">
              <label htmlFor="password">Password:</label>
              <input
                id="password"
                name="password"
                value={values.password}
                placeholder="Password"
                onChange={handleChange}
                className="login_input"
              ></input>
            </div>
            <div className="login_input_container">
              <button
                type="submit"
                disabled={isSubmitting}
                className="login_button"
                onClick={(e) => handleLogin(values)}
              >
                Login
              </button>
            </div>
          </>
        )}
      </Formik>
    </div>
  );
}
