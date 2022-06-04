import React from "react";
import styles from "./MessagingInterface.module.css";
import { IoCall } from "react-icons/io5";
import { FaVideo } from "react-icons/fa";
import { AiOutlinePaperClip } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";

export const MessagingInterface = () => {
  return (
    <div className={styles.messagingInterfaceContainer}>
      <div className={styles.banner}>
        <div className={styles.personInfo}>Mason Machovi</div>
        <div className={styles.messageForms}>
          <div className={styles.iconContainer}>
            <IoCall className={styles.icon} />
          </div>
          <div className={styles.iconContainer}>
            <FaVideo className={styles.icon} />
          </div>
        </div>
      </div>
      <div className={styles.messagingInterface}>
        <div className={styles.messages}>Sup</div>
        <div className={styles.newMessage}>
          <input
            type="text"
            placeholder="Type a message"
            className={styles.newMessageInput}
          />
          <div className={styles.iconsContainer}>
            <AiOutlinePaperClip className={styles.messageIcon} />
            <BsEmojiSmile className={styles.messageIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};
