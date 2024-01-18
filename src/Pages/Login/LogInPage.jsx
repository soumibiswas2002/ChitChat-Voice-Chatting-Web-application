import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { base_url } from "../../app/base_url";

const LogInPage = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.length < 10) return;
    const appendPhone = "+91" + email;
    axios
      .post(`${base_url}signUp/login/`, {
        phoneNumber: appendPhone,
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("userId",res.data.data.id);
        localStorage.setItem("token", res.data.token);
        navigate("/userProfile");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="App">
      <div className="auth-form-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="name"
            placeholder="Enter Your Phone Number"
            id="email"
            name="email"
          />
          <button type="submit">Log in</button>
        </form>
        <button
          className="link-btn"
          onClick={() => {
            navigate("/register");
          }}
        >
          Don&apos;t have an account? Register here.{" "}
        </button>
      </div>
    </div>
  );
};
export default LogInPage;
