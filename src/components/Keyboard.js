import React from "react";
import styles from "./Keyboard.module.css";

const Keyboard = (props) => {
  return (
    <div className={styles.keyboard}>
      <div className={styles["item-a"]} id="clear">
        A/C
      </div>
      <div className={styles["item-b"]} id="divide">
        /
      </div>
      <div className={styles["item-b"]} id="multiply">
        X
      </div>
      <div className={styles["item-b"]} id="seven">
        7
      </div>
      <div className={styles["item-b"]} id="eight">
        8
      </div>
      <div className={styles["item-b"]} id="nine">
        9
      </div>
      <div className={styles["item-b"]} id="subtract">
        -
      </div>
      <div className={styles["item-b"]} id="four">
        4
      </div>
      <div className={styles["item-b"]} id="five">
        5
      </div>
      <div className={styles["item-b"]} id="six">
        6
      </div>
      <div className={styles["item-b"]} id="add">
        +
      </div>
      <div className={styles["item-b"]} id="one">
        1
      </div>
      <div className={styles["item-b"]} id="two">
        2
      </div>
      <div className={styles["item-b"]} id="three">
        3
      </div>
      <div className={styles["item-d"]} id="equals">
        =
      </div>
      <div className={styles["item-c"]} id="zero">
        0
      </div>
      <div className={styles["item-b"]} id="decimal">
        .
      </div>
    </div>
  );
};

export default Keyboard;
