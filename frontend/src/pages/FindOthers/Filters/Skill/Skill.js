import React from "react";
import styles from "./Skill.module.css";

export const Skill = (props) => {
  const { totalSkills, setTotalSkills, skill } = props;
  const deleteSelf = () => {
    let copy = [...totalSkills];
    const index = copy.findIndex((element) => element === skill);
    if (index != -1) {
      copy.splice(index, 1);
      setTotalSkills(copy);
    }
  };
  return (
    <div className={styles.skillContainer}>
      <p>{skill}</p>
      <p onClick={deleteSelf} className={styles.cancel}>
        X
      </p>
    </div>
  );
};
