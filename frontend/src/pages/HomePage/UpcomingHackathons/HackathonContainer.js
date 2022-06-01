import React from "react";
import { Hackathon } from "../../../components/Hackathon/Hackathon";
import styles from "./HackathonContainer.module.css";
import { data } from "../../../data/HackathonData.js";
import { Link } from "react-router-dom";
export const HackathonContainer = () => {
  return (
    <section className={styles.hackathonContainer}>
      <p className={styles.heading}>Find Upcoming Hackathons</p>
      <div className={styles.hackathons}>
        {data.map((hackathon, index) => {
          return (
            <Link to="/hackathons" key={index} className={styles.link}>
              <Hackathon data={hackathon} />
            </Link>
          );
        })}
      </div>
    </section>
  );
};
