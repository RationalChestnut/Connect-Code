import React, { useState, useEffect } from "react";
import styles from "./FloatingMessage.module.css";
import { Error } from "../errors/Error";
export const FloatingMessage = ({ message, type }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 2500);
  }, []);

  return (
    <div className={styles.container}>
      {show && (
        <div className={styles.messageContainer}>
          <p className={styles.text}>{message}</p>
        </div>
      )}
    </div>
  );
};
