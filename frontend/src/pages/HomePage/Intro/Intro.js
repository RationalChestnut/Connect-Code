import React from "react";
import styles from "./Intro.module.css";
import redPuzzlePiece from "../../../images/puzzle_red.png";
import yellowPuzzlePiece from "../../../images/puzzle_yellow.png";
import halfPuzzle from "../../../images/half_puzzle.png";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <section className={styles.intro}>
      <div className={styles.puzzlePieces}>
        <img
          src={redPuzzlePiece}
          className={styles.redPuzzlePiece}
          alt="Big Red Puzzle Piece"
        />
        <img
          src={yellowPuzzlePiece}
          className={styles.yellowPuzzlePiece}
          alt="Big Red Puzzle Piece"
        />
        <img
          src={halfPuzzle}
          alt="Two halves of a puzzle piece"
          className={styles.halfPuzzle}
        />
      </div>
      <div className={styles.actionText}>
        <h1 className={styles.callToAction}>Connect, Code</h1>
        <p className={styles.pitch}>
          Connect with others and start building today
        </p>
        <Link to="/signup" className={styles.findOthersLink}>
          <button className={styles.actionButton}>Sign Up Now</button>
        </Link>
      </div>
    </section>
  );
};

export default Intro;
