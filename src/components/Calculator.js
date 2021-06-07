import React from "react";
import Keyboard from "./Keyboard";
import Display from "./Display";
import styles from "./Calculator.module.css";

const Calculator = (props) => {
  return (
    <div className={styles.calculator}>
      <Display />
      <Keyboard />
    </div>
  );
};

export default Calculator;
