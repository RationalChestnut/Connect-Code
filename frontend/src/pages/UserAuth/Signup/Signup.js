import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Signup.module.css";
import NavLogo from "../../../components/navbar/NavLogo.js";
import redPuzzlePiece from "../../../images/puzzle_red.png";
import yellowPuzzlePiece from "../../../images/puzzle_yellow.png";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BsCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router";
import { auth } from "../../../firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { GoogleComponent } from "../../../components/Google Component/GoogleComponent";
import { signInWithGoogle } from "../../../firebase-config";
import axios from "axios";

export const Signup = (props) => {
  const [nameState, setNameState] = useState("");
  const [emailState, setEmailState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const [confirmPasswordState, setConfirmPasswordState] = useState("");

  const register = async (e) => {
    e.preventDefault();
    try {
      // Save user in auth
      const user = await createUserWithEmailAndPassword(
        auth,
        emailState,
        passwordState
      );
      props.setUserId(user.user.uid);
      createUserAccount(user.user.uid);
    } catch (e) {
      console.log(e.message);
      //Errors include
      //Invalid register, password or email do not work
    }
  };

  const registerGoogleAccount = () => {
    signInWithGoogle()
      .then((user) => {
        // Store User Data
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
      })
      .then((res) => {
        console.log("Creating user account worked");
      })
      .catch((e) => console.log(e));
  };

  const createUserAccount = (id) => {
    axios
      .post("https://ConnectCodeBackend.yxli666.repl.co/user/create-new-user", {
        userId: id,
        name: nameState,
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
        Join the
        <span className={styles.red}> Connect</span>
        <span className={styles.yellow}>Code </span>
        Community!
      </h1>
      <form className={styles.formContainer} onSubmit={register}>
        <div className={styles.formInputGroup}>
          <label htmlFor="name" className={styles.formLabel}>
            Name
          </label>
          <input
            type="text"
            name="name"
            value={nameState}
            onChange={(e) => setNameState(e.target.value)}
            className={styles.formInput}
            required={true}
          />
        </div>
        <div className={styles.formInputGroup}>
          <label htmlFor="email" className={styles.formLabel}>
            Email
          </label>
          <input
            type="email"
            name="email"
            value={emailState}
            onChange={(e) => setEmailState(e.target.value)}
            className={styles.formInput}
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
            minLength={6}
            maxLength={16}
            value={passwordState}
            onChange={(e) => setPasswordState(e.target.value)}
            className={styles.formInput}
            required={true}
          />
        </div>
        <div className={styles.formInputGroup}>
          <label htmlFor="passwordConfirm" className={styles.formLabel}>
            Confirm password
          </label>
          <input
            type="password"
            name="passwordConfirm"
            value={confirmPasswordState}
            onChange={(e) => setConfirmPasswordState(e.target.value)}
            className={styles.formInput}
            required={true}
          />
        </div>
        <button type="submit" className={styles.loginButton}>
          Signup
        </button>
        <div className={styles.row}>
          <div onClick={registerGoogleAccount}>
            <GoogleComponent text="Sign Up With Google" />
          </div>
        </div>

        <small className={styles.tipText}>
          Already have an account?{" "}
          <Link to={"/login"} className={styles.linkToOtherPage}>
            Login!
          </Link>
        </small>
      </form>
    </div>
  );
};
