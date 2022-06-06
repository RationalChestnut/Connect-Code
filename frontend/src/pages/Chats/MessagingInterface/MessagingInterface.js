import React from "react";
import styles from "./MessagingInterface.module.css";
import { IoCall } from "react-icons/io5";
import { FaVideo } from "react-icons/fa";
import { AiOutlinePaperClip } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
import { Message } from "../Message/Message";

export const MessagingInterface = ({ chatId }) => {
  // const messagesRef = firestore.collection("messages");

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
        <div className={styles.messages}>
          <Message text="Hey daddy" time="4:30" />
          <Message text=";)" time="4:30" />
          <Message text="HEHHEHEE" time="4:31" />
          <Message text="I'm going insane lmao" time="11:51" />
          <Message
            text="AISUYDD UASOY DY USADYY IUPSADY{Y USAYD OUPDYOUA SYO{UADSYO{U DYSOUAY{DYOU"
            time="2am"
          />
        </div>
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
