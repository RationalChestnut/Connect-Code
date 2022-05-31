import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsFillTagsFill, BsGlobe } from "react-icons/bs";
import { GrFlagFill } from "react-icons/gr";
import { AiFillCalendar } from "react-icons/ai";
import { useParams } from "react-router";

import styles from "./HackathonLandingPage.module.css";
import { Team } from "./Team/Team";
import axios from "axios";
export const HackathonLandingPage = ({ userId }) => {
  const [hackathon, setHackathon] = useState({});
  const [participants, setParticipants] = useState(0);
  const [teamName, setTeamName] = useState("");
  const [numberOfMembers, setNumberOfMembers] = useState("");
  const [teams, setTeams] = useState([]);
  const { id } = useParams(); //Hackathon id

  const createTeam = (e) => {
    e.preventDefault();
    axios
      .patch(
        `https://ConnectCodeBackend.yxli666.repl.co/hackathons/${id}/teams/create/${userId}`,
        { team: { name: teamName, maxMembers: numberOfMembers } }
      )
      .then((res) => {
        window.location.reload(false);
      })
      .catch((error) => console.log(error));
  };

  const getTeams = () => {
    axios
      .get(
        `https://ConnectCodeBackend.yxli666.repl.co/hackathons/${id}/teams/get-teams`
      )
      .then((res) => {
        setTeams(res.data);
      })
      .catch((e) => console.log(e));
  };

  const getHackathon = () => {
    axios
      .get(`https://ConnectCodeBackend.yxli666.repl.co/hackathons/${id}`)
      .then((res) => {
        setHackathon(res.data.hackathon);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getHackathon();
    getTeams();
  }, []);

  useEffect(() => {
    if (hackathon.teams) {
      let num = 0;
      for (let team of hackathon.teams) {
        num += team.members.length;
      }
      console.log(num);
      setParticipants(num);
    }
  }, [hackathon]);

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.leftBanner}>
          <h1 className={styles.bannerTitle}>{hackathon.title}</h1>
          <h2 className={styles.bannerDescription}>
            A hackathon is a fun and competitive programming competition. It is
            a great way to meet fellow hackers and form close bonds
          </h2>
          <a
            href={hackathon.link}
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
              {new Date(hackathon.startDate).getTime() < Date.now() &&
                new Date(hackathon.endDate).getTime() > Date.now() && (
                  <p className={styles.daysLeftText}>
                    {Number.parseInt(
                      (new Date(hackathon.endDate).getTime() - Date.now()) /
                        (1000 * 3600 * 24)
                    )}{" "}
                    days left
                  </p>
                )}

              {new Date(hackathon.startDate).getTime() > Date.now() && (
                <p>Upcoming</p>
              )}
              {new Date(hackathon.endDate).getTime() < Date.now() && (
                <p>Over</p>
              )}
            </div>
            <div className={styles.bannerDuration}>
              <AiFillCalendar size={"20px"} />
              <p className={styles.bannerDurationText}>
                {new Date(hackathon.startDate).toLocaleDateString()} -{" "}
                {new Date(hackathon.endDate).toLocaleDateString()}
              </p>
            </div>
          </div>
          <hr className={styles.rule} />
          <div className={styles.bannerInfo}>
            <div className={styles.bannerStatus}>
              <BsGlobe size={"20px"} />
              <p className={styles.location}>{hackathon.location}</p>
            </div>
            <div className={styles.bannerNumbers}>
              <p className={styles.bannerText}>
                <span className={styles.bold}>${hackathon.amountInPrizes}</span>{" "}
                in prizes
              </p>
              <p className={styles.bannerText}>
                <span className={styles.bold}>{participants}</span> participants
              </p>
            </div>
          </div>
          <hr className={styles.rule} />
          <div className={styles.bannerBottom}>
            <div className={styles.bannerHost}>
              <GrFlagFill size={"20px"} />
              <p className={styles.host}>{hackathon.host}</p>
            </div>
            <div className={styles.bannerTagsContainer}>
              <BsFillTagsFill size={"20px"} />
              {hackathon.tags &&
                hackathon.tags.map((tag, index) => {
                  return (
                    <div className={styles.tag} key={index}>
                      {tag}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.teamsContainer}>
        <div className={styles.teamCreationForm}>
          <h2>Create a New Team</h2>
          <form className={styles.form} onSubmit={createTeam}>
            <div className={styles.teamFormItem}>
              <input
                type="text"
                className={styles.input}
                placeholder="Team Name"
                value={teamName}
                required
                onChange={(e) => setTeamName(e.target.value)}
              />
            </div>
            <div className={styles.teamFormItem}>
              <input
                type="number"
                className={styles.input}
                placeholder="Max Number of Members"
                value={numberOfMembers}
                required
                onChange={(e) => setNumberOfMembers(e.target.value)}
              />
            </div>
            <button className={styles.createTeam}>Create</button>
          </form>
        </div>
        <div className={styles.teamDisplay}>
          <h2 className={styles.titleTeam}>Join a Team</h2>
          <div className={styles.teams}>
            {teams &&
              teams.map((team, index) => {
                return (
                  <Team
                    key={index}
                    teamName={team.name}
                    teamMembers={team.members}
                    userId={userId}
                    hackathonId={id}
                    teamId={team.id}
                  />
                );
              })}
          </div>
          {!teams && (
            <p className={styles.center}>
              No Teams Created. You can be the first!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
