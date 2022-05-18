import React from "react";
import { Hackathon } from "./Hackathon";
import styles from "./HackathonContainer.module.css";
import { data } from "./HackathonData.js";
export const HackathonContainer = () => {
  return (
    <section className={styles.hackathonContainer}>
      <p className={styles.heading}>Find Upcoming Hackathons</p>
      <div className={styles.hackathons}>
        {data.map((hackathon) => {
          return <Hackathon data={hackathon} />;
        })}
      </div>
    </section>
  );
};
