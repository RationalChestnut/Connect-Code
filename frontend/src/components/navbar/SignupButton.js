import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export const SignupButton = (props) => {
  return (
    <div className={styles.signupButtonContainer} onClick={props.onClick}>
      <button className={styles.signupButton}>
        <Link to="/signup" className={styles.signupText}>
          <p>{props.text}</p>
        </Link>
      </button>
    </div>
  );
};

export default SignupButton;
