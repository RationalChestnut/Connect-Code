import React, { useEffect } from "react";
import { BsPersonFill } from "react-icons/bs";
import styles from "./Profile.module.css";

const Profile = (props) => {
  const { image, name, languages, skills, yearsOfExperience, lookingFor } =
    props;

  return (
    <div className={styles.profileContainer} style={props.style}>
      <div style={props.style}>
        {image && image !== "" ? (
          <img
            src={image}
            alt={name}
            className={styles.profileImage}
            style={props.styleImage}
          />
        ) : (
          <BsPersonFill className={styles.profileImage} />
        )}
        <p className={styles.name}>{name}</p>
        <div className={styles.basicInfo}>
          <p>
            Languages:{" "}
            {languages.slice(0, Math.min(languages.length, 3)).join(", ")}
            {languages.length > 4 && "..."}
          </p>
          <p>Years of Experience: {yearsOfExperience}</p>
          <p>
            Skills: {skills.slice(0, Math.min(skills.length, 3)).join(", ")}
            {skills.length > 4 && "..."}
          </p>
          <p>
            Looking For:{" "}
            {lookingFor.slice(0, Math.min(lookingFor.length, 3)).join(", ")}
            {lookingFor.length > 4 && "..."}
          </p>
        </div>
        <button className={styles.reachOut}>Reach Out</button>
      </div>
    </div>
  );
};

export default Profile;
