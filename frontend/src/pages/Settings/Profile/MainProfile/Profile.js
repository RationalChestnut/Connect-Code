import React from "react";
import styles from "./Profile.module.css";
import { FiEdit } from "react-icons/fi";
import { profiles } from "../../../../data/ProfileData";
import { Link } from "react-router-dom";

import {
  AiOutlineGlobal,
  AiFillGithub,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillCamera,
} from "react-icons/ai";
export const Profile = (props) => {
  const {
    image,
    name,
    description,
    location,
    lanugages,
    age,
    yearsOfExperience,
    skills,
    lookingFor,
    website,
    github,
    twitter,
    instagram,
  } = props;
  return (
    <div className={styles.profileContainer}>
      <div className={styles.bigIntro}>
        <div className={styles.editContainer}>
          <Link to={"/edit-profile"}>
            <FiEdit className={styles.editButton} />
          </Link>
        </div>
        <div className={styles.imageContainer}>
          <img
            src={profiles[1].image}
            alt={profiles[1].name}
            className={styles.profileImage}
          />
        </div>
        <div className={styles.nameContainer}>
          <p className={styles.nameContainer}>Tom Kowski</p>
        </div>
        <div className={styles.descriptionContainer}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
      </div>
      <div className={styles.littleIntroContainer}>
        <div className={styles.topLittleContainer}>
          <div className={`${styles.row}`} style={{ paddingTop: "0px" }}>
            <p>
              <b>Location:</b> San Fransisco Bay Area
            </p>
          </div>
          <div className={styles.row}>
            <p>
              <b>Lanugages:</b> English, Serbian
            </p>
          </div>
          <div className={styles.row}>
            <p>
              <b>Age:</b> 26
            </p>
          </div>
          <div className={styles.row}>
            <p>
              <b>Years of Experience:</b> 2
            </p>
          </div>
          <div className={styles.row}>
            <p>
              <b>Skills:</b> {profiles[1].skills.join(", ")}
            </p>
          </div>
          <div className={styles.row}>
            <p>
              <b>Seeking:</b> {profiles[1].lookingFor.join(", ")}
            </p>
          </div>
        </div>
        <div className={styles.bottomLittleContainer}>
          <div className={styles.socialRow}>
            <div className={styles.front}>
              <div className={styles.iconContainer}>
                <AiOutlineGlobal className={styles.socialIcon} />
              </div>
              <p className={styles.title}>Website</p>
            </div>
            <p>
              <a className={styles.personalWebsite} href="www.davidpaccha.io">
                www.davidpaccha.io
              </a>
            </p>
          </div>
          <div className={styles.socialRow}>
            <div className={styles.front}>
              <div className={styles.iconContainer}>
                <AiFillGithub className={styles.socialIcon} />
              </div>
              <p className={styles.title}>Github</p>
            </div>
            <p>@daveydu</p>
          </div>
          <div className={styles.socialRow}>
            <div className={styles.front}>
              <div className={styles.iconContainer}>
                <AiOutlineTwitter
                  className={`${styles.socialIcon} ${styles.twitter}`}
                />
              </div>
              <p className={styles.title}>Twitter</p>
            </div>
            <p>@daviddd</p>
          </div>
          <div className={styles.socialRow}>
            <div className={styles.front}>
              <div className={styles.iconContainer}>
                <AiOutlineInstagram
                  className={`${styles.socialIcon} ${styles.insta}`}
                />
              </div>
              <p className={styles.title}>Instagram</p>
            </div>
            <p>@davipacc</p>
          </div>
        </div>
      </div>
    </div>
  );
};
