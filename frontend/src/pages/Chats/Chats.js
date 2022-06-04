import React from "react";
import styles from "./Chats.module.css";
import { ChatDisplay } from "./ChatDisplay/ChatDisplay";
import { MessagingInterface } from "./MessagingInterface/MessagingInterface";
import { BiCommentEdit } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

export const Chats = () => {
  return (
    <div className={styles.chatsPage}>
      <div className={styles.findChats}>
        <div className={styles.upperContainer}>
          <h2 className={styles.messagesTitle}>Messages</h2>
          <BiCommentEdit className={styles.addChat} />
        </div>
        <div className={styles.searchBar}>
          <AiOutlineSearch className={styles.searchIcon} />
          <input type="text" placeholder="Search" className={styles.search} />
        </div>
        <div className={styles.chatDisplayContainer}>
          <ChatDisplay />
          <ChatDisplay />
          <ChatDisplay />
        </div>
      </div>
      <div className={styles.messagingInterface}>
        <MessagingInterface />
      </div>
    </div>
  );
};
