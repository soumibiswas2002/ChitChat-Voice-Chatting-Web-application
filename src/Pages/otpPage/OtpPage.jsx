import React, { useState } from "react";
import "../Login/Login.css";
import styles from "./Otp.module.css";
import { base_url } from "../../app/base_url";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const OtpPage = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const { state } = useLocation();
  const navigate = useNavigate();
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const SubmitOtp = () => {
    var txt = "";
    for (var i = 0; i < otp.length; i++) txt += otp[i];
    axios
      .post(`${base_url}signUp/check-otp/`, {
        id: state.data.data.id,
        otp: txt,
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("userId", state.data.data.id);
        navigate("/create-profile");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="App">
      <div className="auth-form-container">
        <p>Enter The OTP </p>
        <div className={styles.otpforms}>
          {otp.map((data, index) => {
            return (
              <input
                className={styles.otpfield}
                type="text"
                name="otp"
                maxLength="1"
                key={index}
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()}
              />
            );
          })}
        </div>

        <div className={styles.otpforms}>
          <button
            className="btn btn-secondary mr-2"
            onClick={(e) => setOtp([...otp.map((v) => "")])}
          >
            Clear
          </button>
          <button className="btn btn-primary" onClick={SubmitOtp}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
export default OtpPage;
