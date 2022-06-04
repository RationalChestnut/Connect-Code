import React from "react";
import styles from "./ChatDisplay.module.css";
import { profiles } from "../../../data/ProfileData";
export const ChatDisplay = () => {
  return (
    <div className={styles.chatDisplayContainer}>
      <div className={styles.profileImageContainer}>
        <img className={styles.profileImage} src={profiles[0].image} />
      </div>
      <div className={styles.personInfo}>
        <p className={styles.personName}>Mason Machovi</p>
        <p className={styles.message}>When are you coming home?</p>
      </div>
      <div className={styles.messagingInfo}>
        <p className={styles.messageTime}>11:28</p>
        <div className={styles.numMessages}>2</div>
      </div>
    </div>
  );
};
