import React, { useState, useEffect } from "react";
import styles from "./EditProfile.module.css";
import { profiles } from "../../../../data/ProfileData";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import axios from "axios";

import {
  AiOutlineGlobal,
  AiFillGithub,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillCamera,
  AiOutlineSave,
} from "react-icons/ai";
export const EditProfile = () => {
  const [nameState, setNameState] = useState(profiles[1].name);
  const [descriptionState, setDescriptionState] = useState("Sup broski");
  const [locationState, setLocationState] = useState("LA");
  const [languagesState, setLanguagesState] = useState([]);
  const [ageState, setAgeState] = useState("");
  const [yearsOfExperienceState, setYearsOfExperienceState] = useState("");
  const [skillsState, setSkillsState] = useState([]);
  const [seekingState, setSeekingState] = useState([]);
  const [websiteState, setWebsiteState] = useState("");
  const [githubState, setGithubState] = useState("");
  const [twitterState, setTwitterState] = useState("");
  const [instagramState, setInstagramState] = useState("");
  const [profilePictureState, setProfilePictureState] = useState("");

  const loadUserProfile = () => {
    axios
      .get(
        `https://ConnectCodeBackend.yxli666.repl.co/user/628bf7cc7d0bbe14b560609a`
      )
      .then((response) => {
        const {
          name,
          age,
          profilePicture,
          description,
          location,
          languages,
          yearsOfExperience,
          skills,
          seeking,
          website,
          github,
          twitter,
          instagram,
        } = response.data.user;
        console.log(name);
        setNameState(name);
        setAgeState(age);
        setProfilePictureState(profilePicture);
        setDescriptionState(description);
        setLocationState(location);
        setYearsOfExperienceState(yearsOfExperience);
        setLanguagesState(languages);
        setSkillsState(skills);
        setSeekingState(seeking);
        setWebsiteState(website);
        setGithubState(github);
        setTwitterState(twitter);
        setInstagramState(instagram);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadUserProfile();
  }, []);

  const saveData = () => {
    const userData = {
      name: nameState,
      age: ageState,
      profilePicture: profilePictureState,
      description: descriptionState,
      location: locationState,
      languages: languagesState,
      yearsOfExperience: yearsOfExperienceState,
      skills: skillsState,
      seeking: seekingState,
      website: websiteState,
      github: githubState,
      twitter: twitterState,
      instagram: instagramState,
    };

    axios
      .post("https://ConnectCodeBackend.yxli666.repl.co/user/edit-profile", {
        userData: userData,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className={styles.profileContainer}>
      <div className={styles.bigIntro}>
        <div className={styles.saveContainer}>
          {/* <Link to={"/profile"}> */}
          <AiOutlineSave className={styles.saveIcon} onClick={saveData} />
          {/* </Link> */}
        </div>

        <div className={styles.imageContainer}>
          <img
            src={profilePictureState}
            alt={nameState}
            className={styles.profileImage}
          />
          <input
            className={styles.fileInput}
            type="file"
            value={profilePictureState}
            onChange={(e) => setProfilePictureState(e.target.value)}
          />
          <div className={styles.imageBackground}>
            <AiFillCamera className={styles.imageBackgroundIcon} />
          </div>
        </div>
        <div className={styles.nameContainer}>
          <input
            className={`${styles.textInput} ${styles.nameInput}`}
            type="text"
            value={nameState}
            maxLength={30}
            onChange={(e) => setNameState(e.target.value)}
          />
        </div>
        <div className={styles.descriptionContainer}>
          <textarea
            name="Description"
            rows="4"
            cols="55"
            maxLength={300}
            value={descriptionState}
            onChange={(e) => setDescriptionState(e.target.value)}
            className={styles.descriptionInput}
          ></textarea>
        </div>
      </div>
      <div className={styles.littleIntroContainer}>
        <div className={styles.topLittleContainer}>
          <div className={`${styles.row}`} style={{ paddingTop: "0px" }}>
            <p className={styles.pLocation}>
              <b>Location:</b>
            </p>
            <input
              className={`${styles.extraInfoText} ${styles.basicInfoInput}`}
              type="text"
              value={locationState}
              onChange={(e) => setLocationState(e.target.value)}
            />
          </div>
          <div className={styles.row}>
            <p className={styles.pLocation}>
              <b>Languages:</b>
            </p>
            <input
              className={`${styles.extraInfoText} ${styles.basicInfoInput}`}
              type="text"
              value={languagesState}
              onChange={(e) => setLanguagesState(e.target.value)}
            />
          </div>
          <div className={styles.row}>
            <p className={styles.pLocation}>
              <b>Age:</b>
            </p>
            <input
              className={`${styles.extraInfoText} ${styles.basicInfoInput}`}
              type="number"
              value={ageState}
              onChange={(e) => setAgeState(e.target.value)}
            />
          </div>
          <div className={styles.row}>
            <p className={styles.pLocation}>
              <b>Years of Experience:</b>
            </p>
            <input
              className={`${styles.extraInfoText} ${styles.basicInfoInput}`}
              type="number"
              value={yearsOfExperienceState}
              onChange={(e) => setYearsOfExperienceState(e.target.value)}
            />
          </div>
          <div className={styles.row}>
            <p className={styles.pLocation}>
              <b>Skills:</b>
            </p>
            <input
              className={`${styles.extraInfoText} ${styles.basicInfoInput}`}
              type="text"
              value={skillsState}
              onChange={(e) => setSkillsState(e.target.value)}
            />
          </div>
          <div className={styles.row}>
            <p className={styles.pLocation}>
              <b>Seeking:</b>
            </p>
            <input
              className={`${styles.extraInfoText} ${styles.basicInfoInput}`}
              type="text"
              value={seekingState}
              onChange={(e) => setSeekingState(e.target.value)}
            />
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
            <input
              type="text"
              className={styles.extraInfoText}
              value={websiteState}
              onChange={(e) => setWebsiteState(e.target.value)}
            />
          </div>
          <div className={styles.socialRow}>
            <div className={styles.front}>
              <div className={styles.iconContainer}>
                <AiFillGithub className={styles.socialIcon} />
              </div>
              <p className={styles.title}>Github</p>
            </div>
            <input
              type="text"
              className={styles.extraInfoText}
              value={githubState}
              onChange={(e) => setGithubState(e.target.value)}
            />
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
            <input
              type="text"
              className={styles.extraInfoText}
              value={twitterState}
              onChange={(e) => setTwitterState(e.target.value)}
            />
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
            <input
              type="text"
              className={styles.extraInfoText}
              value={instagramState}
              onChange={(e) => setInstagramState(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
