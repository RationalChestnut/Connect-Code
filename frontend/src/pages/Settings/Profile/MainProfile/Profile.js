import React, { useEffect, useState } from "react";
import styles from "./Profile.module.css";
import { FiEdit } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import {
  AiOutlineGlobal,
  AiFillGithub,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import { storage } from "../../../../firebase-config";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import Loading from "../../../../components/Loading/Loading";

export const Profile = ({ userId }) => {
  const [nameState, setNameState] = useState("");
  const [ageState, setAgeState] = useState(0);
  const [profilePictureState, setProfilePictureState] = useState("");
  const [descriptionState, setDescriptionState] = useState("");
  const [locationState, setLocationState] = useState("");
  const [languagesState, setLanguagesState] = useState([]);
  const [yearsOfExperienceState, setYearsOfExperienceState] = useState(0);
  const [skillsState, setSkillsState] = useState([]);
  const [seekingState, setSeekingState] = useState([]);
  const [websiteState, setWebsiteState] = useState("");
  const [githubState, setGithubState] = useState("");
  const [twitterState, setTwitterState] = useState("");
  const [instagramState, setInstagramState] = useState("");
  const { id } = useParams();
  const userImageRef = ref(storage, `images/${userId}`);
  const [isLoading, setIsLoading] = useState(false);

  const retrieveProfileData = () => {
    getImageFile();

    axios
      .get(`https://ConnectCodeBackend.yxli666.repl.co/user/${id}`)
      .then((response) => {
        const {
          name,
          age,
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
        } = response.data;
        setNameState(name);
        setAgeState(age);
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

  const getImageFile = () => {
    console.log("Getting Image");
    setIsLoading(true);
    listAll(userImageRef)
      .then((res) => {
        const item = res.items[0];
        getDownloadURL(item).then((url) => {
          console.log("Setting Image File to State");
          setProfilePictureState(url);
        });
        setIsLoading(false);
      })
      .catch((e) => {
        console.log("Error getting image");
        console.log(e);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    retrieveProfileData();
  }, [userId]);

  return (
    <div className={styles.profileContainer}>
      <Loading isLoading={isLoading} />
      <div className={styles.bigIntro}>
        <div className={styles.editContainer}>
          <Link to={"/edit-profile"}>
            <FiEdit className={styles.editButton} />
          </Link>
        </div>
        <div className={styles.imageContainer}>
          <img
            src={profilePictureState}
            alt={nameState}
            className={styles.profileImage}
          />
        </div>
        <div className={styles.nameContainer}>
          <p className={styles.nameContainer}>{nameState}</p>
        </div>
        <div className={styles.descriptionContainer}>
          <p>
            {descriptionState !== null && descriptionState !== ""
              ? descriptionState
              : "N/A"}
          </p>
        </div>
      </div>
      <div className={styles.littleIntroContainer}>
        <div className={styles.topLittleContainer}>
          <div className={`${styles.row}`} style={{ paddingTop: "0px" }}>
            <p>
              <b>Location:</b>{" "}
              {locationState !== null && locationState !== ""
                ? locationState
                : "N/A"}
            </p>
          </div>
          <div className={styles.row}>
            <p>
              <b>Lanugages:</b>{" "}
              {languagesState !== null && languagesState.length > 0
                ? languagesState.join(", ")
                : "N/A"}
            </p>
          </div>
          <div className={styles.row}>
            <p>
              <b>Age:</b>{" "}
              {ageState !== 0 && ageState !== null ? ageState : "N/A"}
            </p>
          </div>
          <div className={styles.row}>
            <p>
              <b>Years of Experience:</b>{" "}
              {yearsOfExperienceState !== null && yearsOfExperienceState !== 0
                ? yearsOfExperienceState
                : "N/A"}
            </p>
          </div>
          <div className={styles.row}>
            <p>
              <b>Skills:</b>{" "}
              {skillsState && skillsState.length > 0
                ? skillsState.join(", ")
                : "N/A"}
            </p>
          </div>
          <div className={styles.row}>
            <p>
              <b>Seeking:</b>{" "}
              {seekingState && seekingState.length > 0
                ? seekingState.join(", ")
                : "N/A"}
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
              <a
                className={styles.personalWebsite}
                target="_blank"
                href="www.davidpaccha.io"
              >
                {websiteState !== null && websiteState !== ""
                  ? websiteState
                  : "N/A"}
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
            <p>
              {githubState !== null && githubState !== "" ? githubState : "N/A"}
            </p>
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
            <p>
              {twitterState !== null && twitterState !== ""
                ? twitterState
                : "N/A"}
            </p>
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
            <p>
              {instagramState !== null && instagramState !== ""
                ? instagramState
                : "N/A"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
