import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export const SignupButton = (props) => {
  return (
    <div className={styles.signupButtonContainer} onClick={props.onClick}>
      <Link to="/signup" className={styles.signupText}>
        <button className={styles.signupButton}>
          <p>{props.text}</p>
        </button>
      </Link>
    </div>
  );
};

export default SignupButton;
