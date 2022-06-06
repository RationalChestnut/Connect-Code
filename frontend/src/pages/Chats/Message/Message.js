import React from "react";
import styles from "./Message.module.css";
import { profiles } from "../../../data/ProfileData";

export const Message = ({ text, time, person }) => {
  return (
    <div
      className={`${styles.messageContainer} ${styles.messageContainerByMe}`}
    >
      <div className={styles.profilePictureContainer}>
        <img
          src={profiles[0].image}
          alt="Person"
          className={styles.profilePicture}
        />
      </div>
      <div className={`${styles.message} ${styles.sentByMe}`}>
        <p>{text}</p>
      </div>
      <p className={styles.time}>{time}</p>
    </div>
  );
};
