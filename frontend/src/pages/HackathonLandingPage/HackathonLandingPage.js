import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsFillTagsFill, BsGlobe } from "react-icons/bs";
import { GrFlagFill } from "react-icons/gr";
import { AiFillCalendar } from "react-icons/ai";

import styles from "./HackathonLandingPage.module.css";
import { Team } from "./Team/Team";
export const HackathonLandingPage = ({ userId }) => {
  const [teamName, setTeamName] = useState("");
  const [numberOfMembers, setNumberOfMembers] = useState("");

  const createTeam = () => {};

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.leftBanner}>
          <h1 className={styles.bannerTitle}>SG Game Jam</h1>
          <h2 className={styles.bannerDescription}>
            Create a fun and creative game to stand the chance to win a cash
            prize!
          </h2>
          <a
            href="https://sg-game-jam.devpost.com/?ref_feature=challenge&ref_medium=homepage-recommended-hackathons"
            className={styles.hackathonLink}
            target="_blank"
          >
            Sign up here
          </a>
        </div>
        <div className={styles.rightBanner}>
          <div className={styles.bannerTop}>
            <div className={styles.bannerTimeLeft}>
              <div className={styles.dot}></div>
              <p className={styles.daysLeftText}>7 days left</p>
            </div>
            <div className={styles.bannerDuration}>
              <AiFillCalendar size={"20px"} />
              <p className={styles.bannerDurationText}>5/10/2022 - 5/12/2022</p>
            </div>
          </div>
          <hr className={styles.rule} />
          <div className={styles.bannerInfo}>
            <div className={styles.bannerStatus}>
              <BsGlobe size={"20px"} />
              <p className={styles.location}>Online</p>
            </div>
            <div className={styles.bannerNumbers}>
              <p className={styles.bannerText}>
                <span className={styles.bold}>$1,000</span> in prizes
              </p>
              <p className={styles.bannerText}>
                <span className={styles.bold}>145</span> participants
              </p>
            </div>
          </div>
          <hr className={styles.rule} />
          <div className={styles.bannerBottom}>
            <div className={styles.bannerHost}>
              <GrFlagFill size={"20px"} />
              <p className={styles.host}>Innovation Circuit</p>
            </div>
            <div className={styles.bannerTagsContainer}>
              <BsFillTagsFill size={"20px"} />
              {/* {tags.map((tag, index) => {
                return ( */}
              <div className={styles.tag}>Beginner Friendly</div>
              <div className={styles.tag}>Gaming</div>
              <div className={styles.tag}>Music/Art</div>
              {/* );
              })} */}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.teamsContainer}>
        <div className={styles.teamCreationForm}>
          <h2>Create a New Team</h2>
          <form className={styles.form}>
            <div className={styles.teamFormItem}>
              <input
                type="text"
                className={styles.input}
                placeholder="Team Name"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
              />
            </div>
            <div className={styles.teamFormItem}>
              <input
                type="number"
                className={styles.input}
                placeholder="Max Number of Members"
                value={numberOfMembers}
                onChange={(e) => setNumberOfMembers(e.target.value)}
              />
            </div>
            <button className={styles.createTeam}>Create</button>
          </form>
        </div>
        <div className={styles.teamDisplay}>
          <h2 className={styles.titleTeam}>Join a Team</h2>
          <div className={styles.teams}>
            <Team
              teamName="BWahaha"
              teamMembers={[
                { name: "Brian Mason" },
                { name: "Robert Downing" },
              ]}
            />
            <Team
              teamName="BWahaha"
              teamMembers={[
                { name: "Brian Mason" },
                { name: "Robert Downing" },
              ]}
            />
            <Team
              teamName="BWahaha"
              teamMembers={[
                { name: "Brian Mason" },
                { name: "Robert Downing" },
              ]}
            />
            <Team
              teamName="BWahaha"
              teamMembers={[
                { name: "Brian Mason" },
                { name: "Robert Downing" },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
