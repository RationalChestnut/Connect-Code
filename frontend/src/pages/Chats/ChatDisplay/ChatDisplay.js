import React from "react";
import styles from "./ChatDisplay.module.css";
import { profiles } from "../../../data/ProfileData";
export const ChatDisplay = ({ name, image, isSelected }) => {
  return (
    <div
      className={`${styles.chatDisplayContainer} ${
        isSelected && styles.selected
      }`}
    >
      <div className={styles.profileImageContainer}>
        <img className={styles.profileImage} src={image} />
      </div>
      <div className={styles.personInfo}>
        <p className={styles.personName}>{name}</p>
      </div>
      <div className={styles.messagingInfo}></div>
    </div>
  );
};
