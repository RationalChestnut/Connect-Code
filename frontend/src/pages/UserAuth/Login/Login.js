import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import NavLogo from "../../../components/navbar/NavLogo.js";
import redPuzzlePiece from "../../../images/puzzle_red.png";
import yellowPuzzlePiece from "../../../images/puzzle_yellow.png";
import { auth } from "../../../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { GoogleComponent } from "../../../components/Google Component/GoogleComponent";
import { signInWithGoogle } from "../../../firebase-config";
import axios from "axios";

export const Login = (props) => {
  const [emailState, setEmailState] = useState("");
  const [passwordState, setPasswordState] = useState("");

  const login = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        emailState,
        passwordState
      );
      props.setUserId(user.user.uid);
      console.log(user);
    } catch (e) {
      console.log(e);
    }
  };

  const googleLogin = () => {
    signInWithGoogle()
      .then((user) => {
        // Store User Data
        console.log(user);
        props.setUserId(user.user.uid);
        createUserAccountWithGoogle(user.user.uid, user.user.displayName);
      })
      .catch((e) => console.log(e));
  };

  const createUserAccountWithGoogle = (id, name) => {
    axios
      .post("https://ConnectCodeBackend.yxli666.repl.co/user/create-new-user", {
        userId: id,
        name: name,
        age: null,
        description: "",
        location: "",
        languages: [],
        yearsOfExperience: null,
        skills: [],
        seeking: [],
        website: "",
        github: "",
        twitter: "",
        instagram: "",
      })
      .then((res) => {
        console.log("Creating user account worked");
      })
      .catch((e) => console.log(e));
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
      <form className={styles.formContainer} onSubmit={login}>
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
        <div onClick={googleLogin}>
          <GoogleComponent text="Login With Google" />
        </div>

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
