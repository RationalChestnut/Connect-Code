import React from "react";
import styles from "./Team.module.css";

export const Team = ({ teamName, teamMembers }) => {
  return (
    <div className={styles.teamContainer}>
      <h3 className={styles.teamTitle}>Team {teamName}</h3>
      <div className={styles.teamMemberDisplay}>
        {teamMembers.map((member) => {
          return (
            <div className={styles.member}>
              <p className={styles.memberInfo}>{member.name}</p>
            </div>
          );
        })}
      </div>
      <button className={styles.joinButton}>Join</button>
    </div>
  );
};
