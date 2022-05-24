import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "./Login.module.css";
import NavLogo from "../../../components/navbar/NavLogo.js";
import redPuzzlePiece from "../../../images/puzzle_red.png";
import yellowPuzzlePiece from "../../../images/puzzle_yellow.png";

export const Login = (props) => {
  const [emailState, setEmailState] = useState("");
  const [passwordState, setPasswordState] = useState("");

  const handleUserLogin = (e) => {
    e.preventDefault();
    if (
      emailState !== null &&
      emailState !== "" &&
      passwordState !== null &&
      passwordState !== ""
    ) {
      axios
        .post("https://ConnectCodeBackend.yxli666.repl.co/login", {
          email: emailState,
          password: passwordState,
        })
        .then((response) => {
          if (response.status === 200) {
            props.setUser(response.data.user);
            console.log(response.data.user);
          } else if (response.status === 401) {
            console.log(response.data.error);
          } else {
            console.log("An unexpected error occured, please try again later");
          }
        })
        .catch((error) => {
          console.log("There is an error");
          console.log(error);
        });
    } else {
      console.log("Something happened");
    }
  };
  return (
    <div className={styles.loginContainer}>
      <div className={styles.puzzlePieces}>
        <img
          src={redPuzzlePiece}
          className={[styles.redPuzzlePiece, styles.puzzlePiece].join(" ")}
          alt="Small Red Puzzle Piece"
        />
        <img
          src={yellowPuzzlePiece}
          className={[styles.yellowPuzzlePiece, styles.puzzlePiece].join(" ")}
          alt="Small Red Puzzle Piece"
        />
      </div>
      <h1 className={styles.loginText}>
        Log into
        <span className={styles.red}> Connect</span>
        <span className={styles.yellow}>Code</span>
      </h1>
      <form className={styles.formContainer} onSubmit={handleUserLogin}>
        <div className={styles.formInputGroup}>
          <label htmlFor="email" className={styles.formLabel}>
            Email
          </label>
          <input
            type="email"
            name="email"
            className={styles.formInput}
            value={emailState}
            onChange={(e) => setEmailState(e.target.value)}
            required={true}
          />
        </div>
        <div className={styles.formInputGroup}>
          <label htmlFor="password" className={styles.formLabel}>
            Password
          </label>
          <input
            type="password"
            name="password"
            className={styles.formInput}
            value={passwordState}
            onChange={(e) => setPasswordState(e.target.value)}
            required={true}
          />
        </div>
        <button type="submit" className={styles.loginButton}>
          Login
        </button>
        <small className={styles.tipText}>
          Don't have an account?{" "}
          <Link to={"/signup"} className={styles.linkToOtherPage}>
            Sign Up!
          </Link>
        </small>
      </form>
    </div>
  );
};
