import React, { useEffect, useState } from "react";
import styles from "./Chats.module.css";
import { ChatDisplay } from "./ChatDisplay/ChatDisplay";
import { MessagingInterface } from "./MessagingInterface/MessagingInterface";
import { AiOutlineSearch } from "react-icons/ai";
import unknownPerson from "../../images/unknownPerson.png";
import axios from "axios";

export const Chats = ({ userId }) => {
  const [chats, setChats] = useState(null);
  const [selectedChatId, setSelectedChatId] = useState(null);

  // Get users chats
  const getMessageGroups = async () => {
    await axios
      .get("https://ConnectCodeBackend.yxli666.repl.co/chats/display-chats", {
        params: { uid: userId, hello: "hello" },
      })
      .then((res) => {
        setChats(res.data);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getMessageGroups();
  }, [userId]);

  return (
    <div className={styles.chatsPage}>
      <div className={styles.findChats}>
        <div className={styles.upperContainer}>
          <h2 className={styles.messagesTitle}>Messages</h2>
        </div>
        <div className={styles.searchBar}>
          <AiOutlineSearch className={styles.searchIcon} />
          <input type="text" placeholder="Search" className={styles.search} />
        </div>
        <div className={styles.chatDisplayContainer}>
          {chats &&
            chats.map((chat, index) => {
              return (
                <div
                  onClick={() => {
                    setSelectedChatId(chat.id);
                  }}
                  key={index}
                >
                  <ChatDisplay
                    name={chat.name}
                    image={chat.image ? unknownPerson : chat.image}
                    isSelected={selectedChatId === chat.id}
                  />
                </div>
              );
            })}
        </div>
      </div>
      <MessagingInterface chatId={selectedChatId} />
    </div>
  );
};
