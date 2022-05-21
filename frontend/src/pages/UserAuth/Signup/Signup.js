import React from "react";
import { Link } from "react-router-dom";

import styles from "./Signup.module.css";
import NavLogo from "../../../components/navbar/NavLogo.js";
import redPuzzlePiece from "../../../images/puzzle_red.png";
import yellowPuzzlePiece from "../../../images/puzzle_yellow.png";
import { AiOutlineQuestionCircle } from "react-icons/ai";
export const Signup = () => {
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
      <form className={styles.formContainer}>
        <div className={styles.formInputGroup}>
          <label htmlFor="name" className={styles.formLabel}>
            Name
          </label>
          <input
            type="text"
            name="name"
            className={styles.formInput}
            required={true}
          />
        </div>
        <div
          className={`${styles.formInputGroup} ${styles.questionQuestionContainer}`}
        >
          <label
            htmlFor="age"
            className={`${styles.formLabel} ${styles.questionContainer}`}
          >
            Age
            <div className={styles.questionAge}>
              <AiOutlineQuestionCircle size={"15px"} />
            </div>
            <div className={styles.questionExplanation}>
              <p>
                Your age will determine which partners we recommend to you so
                please stay honest!
              </p>
            </div>
          </label>
          <input
            type="text"
            name="age"
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
            className={styles.formInput}
            required={true}
          />
        </div>
        <button type="submit" className={styles.loginButton}>
          Signup
        </button>
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
