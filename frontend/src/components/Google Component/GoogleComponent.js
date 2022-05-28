import React from "react";
import styles from "./GoogleComponent.module.css";
import googleLogo from "../../images/GoogleImage.png";
export const GoogleComponent = (props) => {
  return (
    <div className={styles.googleComponent}>
      <img src={googleLogo} alt="Google Logo" className={styles.googleLogo} />
      <p className={styles.text}>{props.text}</p>
    </div>
  );
};
