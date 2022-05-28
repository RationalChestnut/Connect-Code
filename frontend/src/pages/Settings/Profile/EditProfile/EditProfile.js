import React, { useState, useEffect } from "react";
import styles from "./EditProfile.module.css";
import Loading from "../../../../components/Loading/Loading";
import { Link } from "react-router-dom";
import axios from "axios";
import { storage } from "../../../../firebase-config";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { ImCancelCircle } from "react-icons/im";
import { useNavigate } from "react-router";
import { ImageCropper } from "./ImageCropper/ImageCropper";

import {
  AiOutlineGlobal,
  AiFillGithub,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillCamera,
  AiOutlineSave,
} from "react-icons/ai";
export const EditProfile = ({ userId }) => {
  const [nameState, setNameState] = useState("");
  const [descriptionState, setDescriptionState] = useState("");
  const [locationState, setLocationState] = useState("");
  const [languagesState, setLanguagesState] = useState("");
  const [ageState, setAgeState] = useState("");
  const [yearsOfExperienceState, setYearsOfExperienceState] = useState("");
  const [skillsState, setSkillsState] = useState("");
  const [seekingState, setSeekingState] = useState("");
  const [websiteState, setWebsiteState] = useState("");
  const [githubState, setGithubState] = useState("");
  const [twitterState, setTwitterState] = useState("");
  const [instagramState, setInstagramState] = useState("");
  const [profilePictureState, setProfilePictureState] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [openCrop, setOpenCrop] = useState(false);

  const userImageRef = ref(storage, `images/${userId}`);
  const navigate = useNavigate();

  const uploadImageFile = () => {
    setIsLoading(true);
    if (profilePictureState == null || profilePictureState === "") {
      setIsLoading(false);

      navigate(`/profile/${userId}`);
      return;
    }
    const imageRef = ref(storage, `images/${userId}/${userId}`); //For our sake use user id
    uploadBytes(imageRef, profilePictureState)
      .then(() => {
        setIsLoading(false);
        navigate(`/profile/${userId}`);
      })
      .catch((e) => {
        console.log("There was an erro" + e);
        setIsLoading(false);
        navigate(`/profile/${userId}`);
      });
  };

  const getImageFile = () => {
    setIsLoading(true);
    listAll(userImageRef)
      .then((res) => {
        const item = res.items[0];
        getDownloadURL(item).then((url) => {
          setProfilePicture(url);
        });
        setIsLoading(false);
      })
      .catch((e) => {
        console.log("Get image file error" + e);
        setIsLoading(false);
      });
  };

  const loadUserProfile = () => {
    // setIsLoading(true);
    axios
      .get(`https://ConnectCodeBackend.yxli666.repl.co/user/${userId}`)
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
        getImageFile();
        setNameState(name);
        setAgeState(age);
        setDescriptionState(description);
        setLocationState(location);
        setYearsOfExperienceState(yearsOfExperience);
        setLanguagesState(languages.join(", "));
        setSkillsState(skills.join(", "));
        setSeekingState(seeking.join(", "));
        setWebsiteState(website);
        setGithubState(github);
        setTwitterState(twitter);
        setInstagramState(instagram);

        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    loadUserProfile();
  }, [userId]);

  const saveData = () => {
    setIsLoading(true);

    const userData = {
      userId: userId,
      name: nameState,
      age: ageState,
      profilePicture: profilePictureState,
      description: descriptionState,
      location: locationState,
      languages: languagesState.split(",").map((language) => language.trim()),
      yearsOfExperience: yearsOfExperienceState,
      skills: skillsState.split(",").map((skill) => skill.trim()),
      seeking: seekingState.split(",").map((seeking) => seeking.trim()),
      website: websiteState,
      github: githubState,
      twitter: twitterState,
      instagram: instagramState,
    };
    axios
      .post(
        "https://ConnectCodeBackend.yxli666.repl.co/user/edit-profile",
        userData
      )
      .then((res) => {
        setIsLoading(false);
        uploadImageFile();
      })
      .catch((e) => {
        console.log(e);
        setIsLoading(false);
      });
  };

  return (
    <div>
      {openCrop ? (
        <ImageCropper
          setEndPictureUpload={setProfilePictureState}
          setProfilePicture={setProfilePicture}
          openCrop={openCrop}
          setOpenCrop={setOpenCrop}
        />
      ) : (
        <></>
      )}

      <div className={styles.profileContainer}>
        <Loading isLoading={isLoading} />
        <div className={styles.bigIntro}>
          <div className={styles.saveContainer}>
            <div className={styles.iconsContainer}>
              <Link to={`/profile/${userId}`}>
                <ImCancelCircle className={styles.cancelIcon} />
              </Link>
              <AiOutlineSave className={styles.saveIcon} onClick={saveData} />
            </div>
          </div>

          <div
            className={styles.imageContainer}
            onClick={() => setOpenCrop(true)}
          >
            <img
              src={profilePicture}
              alt={nameState}
              className={styles.profileImage}
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
    </div>
  );
};
