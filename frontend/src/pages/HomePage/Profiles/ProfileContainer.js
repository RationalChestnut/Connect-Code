import React from "react";
import styles from "./ProfileContainer.module.css";
import { profiles } from "../../../data/ProfileData";
import Profile from "../../../components/Profile/Profile";
import { Link } from "react-router-dom";
const ProfileContainer = () => {
  return (
    <section className={styles.profile}>
      <h1 className={styles.adText}>Find Others Your Skill Level</h1>
      <div className={`${styles.profileContainer} ${styles.profilesContainer}`}>
        {profiles.map((person, index) => {
          return (
            <Link to="/find-others" key={index} className={styles.link}>
              <Profile
                image={person.image}
                name={person.name}
                languages={person.languages}
                github={person.github}
                yearsOfExperience={person.yearsOfExperience}
                skills={person.skills}
                lookingFor={person.lookingFor}
                project={person.projectInMind}
                styleImage={{ objectFit: "cover" }}
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default ProfileContainer;
