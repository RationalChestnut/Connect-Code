import React from "react";
import styles from "./Error.module.css";

export const Error = ({ text, type }) => {
  return (
    <div
      className={`${styles.errorContainer} ${
        type === "success"
          ? styles.green
          : type === "warning"
          ? styles.yellow
          : styles.red
      }`}
    >
      {text}
    </div>
  );
};
