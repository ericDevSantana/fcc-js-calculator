import React from "react";
import styles from "./Display.module.css";

const Display = (props) => {
  return (
    <div className={styles.display} id="display">
      {props.value.firstExpression}
    </div>
  );
};

export default Display;
