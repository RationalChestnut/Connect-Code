import React from "react";
import "animate.css";

import styles from "./Home.module.css";
import Intro from "./Intro/Intro";
import ProfileContainer from "./Profiles/ProfileContainer";
import { HackathonContainer } from "./UpcomingHackathons/HackathonContainer";
const Home = () => {
  return (
    <section className={styles.home}>
      <Intro />
      <div className={styles.intro}>
        <ProfileContainer />
      </div>
      <HackathonContainer />
    </section>
  );
};

export default Home;
