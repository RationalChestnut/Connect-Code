import React from "react";
import "animate.css";

import styles from "./Home.module.css";
import redPuzzlePiece from "../images/puzzle_red.png";
import yellowPuzzlePiece from "../images/puzzle_yellow.png";
import halfPuzzle from "../images/half_puzzle.png";

const Home = () => {
  return (
    <section className={styles.home}>
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
        <button className={styles.actionButton}>Find Others</button>
      </div>
    </section>
  );
};

export default Home;
