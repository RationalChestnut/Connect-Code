import React from "react";

import { GrFlagFill } from "react-icons/gr";
import { AiFillCalendar } from "react-icons/ai";
import { AiOutlineGlobal } from "react-icons/ai";
import { BsFillTagsFill } from "react-icons/bs";

import styles from "./Hackathon.module.css";

export const Hackathon = (props) => {
  const {
    title,
    company,
    image,
    startDate,
    endDate,
    status,
    daysLeft,
    prizeAmount,
    numParticipants,
    numPeopleWhoNeedTeams,
    tags,
  } = props.data;
  return (
    <div className={styles.hackathon}>
      <div className={styles.hackathonImage}>
        <img src={image} alt={title} className={styles.hackImage} />
      </div>
      <div className={styles.hackathonContent}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.infoRow}>
          <div className={styles.daysLeft}>
            <div className={styles.dot}></div>
            <p>{daysLeft} days left</p>
          </div>
          <div className={styles.status}>
            <span className={styles.globe}>
              <AiOutlineGlobal />
            </span>{" "}
            <p className={styles.textStatus}>{status}</p>
          </div>
        </div>
        <div className={styles.infoRow}>
          <p className={styles.amount}>
            <b>${prizeAmount}</b> in prizes
          </p>
          <p className={styles.participants}>
            <b>{numParticipants}</b> participants
          </p>
        </div>
        <div className={styles.infoRow}>
          <p>
            <b>{numPeopleWhoNeedTeams}</b> people who need teams
          </p>
        </div>
      </div>
      <div className={styles.hackathonInfo}>
        <div className={styles.hackathonInfoRow}>
          <GrFlagFill size={"20px"} display={"inline"} />
          <p className={styles.company}>{company}</p>
        </div>
        <div className={styles.hackathonInfoRow}>
          <AiFillCalendar size={"20px"} />
          <p className={styles.date}>{`${startDate} - ${endDate}`}</p>
        </div>
        <div className={`${styles.hackathonInfoRow} ${styles.tagsContainer}`}>
          <div className={styles.tags}>
            <BsFillTagsFill size={"20px"} />
            {tags.map((tag, index) => {
              return (
                <div key={index} className={styles.tag}>
                  {tag}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
