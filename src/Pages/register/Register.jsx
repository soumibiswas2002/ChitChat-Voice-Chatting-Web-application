import React, { useState } from "react";
// import "../Login/Login.css"
import "../register/Register.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { base_url } from "../../app/base_url";

const Register = () => {
  const [phone, setphone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone.length < 10) return;
    const appendPhone = "+91" + phone;
    axios
      .post(`${base_url}signUp/phone/`, {
        phoneNumber: appendPhone,
      })
      .then((res) => {
        console.log(res);
        navigate("/otppage", {
          state: {
            data: res.data,
          },
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="App">
      <div className="auth-form-container">
        <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Phone Number</label>
          <input
            value={phone}
            name="Phone Number"
            id="name"
            placeholder="Enter Your Phone Number"
            onChange={(e) => {
              setphone(e.target.value);
            }}
          />

          <button type="submit">Register</button>
        </form>
        <button
          className="link-btn"
          onClick={() => {
            navigate("/login");
          }}
        >
          Already have an account? Login here.{" "}
        </button>
      </div>
    </div>
  );
};

export default Register;
