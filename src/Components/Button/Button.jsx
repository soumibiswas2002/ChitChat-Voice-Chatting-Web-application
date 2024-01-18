import React from "react";
import styles from "./Button.module.css";
import { FaLongArrowAltRight } from "react-icons/fa";
const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      <span>{text}</span>
      <FaLongArrowAltRight />
    </button>
  );
};
export default Button;
