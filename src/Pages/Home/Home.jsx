import React from "react";
import styles from "./Home.module.css";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../Components/Card/Card";
import Button from "../../Components/Button/Button";

const Home = () => {
  const signInLinkStyle = {
    color: "#0077ff",
    fontWeight: "bold",
    textDecoration: "none",
    marginLeft: "10px",
  };
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate("/register")
  }

  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to Chit-Chat">
        <p className={styles.text}>
          This is a video and audio calling react app made by our team
        </p>
        <div>
          <Button onClick={handleNavigate} text="Let's Go" />
        </div>
      </Card>
    </div>
  );
};

export default Home;
