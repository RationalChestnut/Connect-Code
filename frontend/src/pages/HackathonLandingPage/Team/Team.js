import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from "./Team.module.css";
import { Link } from "react-router-dom";
export const Team = ({
  teamName,
  teamMembers,
  userId,
  hackathonId,
  teamId,
}) => {
  const [names, setNames] = useState([]);
  const joinTeam = () => {
    axios
      .patch(
        `https://ConnectCodeBackend.yxli666.repl.co/hackathons/${hackathonId}/teams/${teamId}/join/${userId}`
      )
      .then((res) => {
        window.location.reload(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getMemberInfo = async (uid) => {
    await axios
      .get(`https://ConnectCodeBackend.yxli666.repl.co/user/${uid}`)
      .then((res) => {
        setNames((names) => [
          ...names,
          { name: res.data.name, id: res.data.userId },
        ]);
      });
  };

  useEffect(() => {
    teamMembers.forEach((individualMember) => {
      getMemberInfo(individualMember);
    });
  }, []);

  return (
    <div className={styles.teamContainer}>
      <h3 className={styles.teamTitle}>Team {teamName}</h3>
      <div className={styles.teamMemberDisplay}>
        {names.map((name, index) => {
          return (
            <Link
              to={`/profile/${name.id}`}
              key={index}
              className={styles.link}
            >
              <p className={styles.name}>{name.name}</p>
            </Link>
          );
        })}
      </div>
      <button className={styles.joinButton} onClick={joinTeam}>
        Join
      </button>
    </div>
  );
};
