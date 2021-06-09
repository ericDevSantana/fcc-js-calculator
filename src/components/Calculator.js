import React, { useCallback, useState } from "react";
import Keyboard from "./Keyboard";
import Display from "./Display";
import styles from "./Calculator.module.css";

const Calculator = (props) => {
  const [expression, setExpression] = useState({
    firstExpression: "0",
    operator: "",
    lastExpression: "",
    result: "",
  });

  const expressionHandler = useCallback((expressionObject) => {
    setExpression({
      firstExpression: expressionObject.firstExpression,
      operator: "",
      lastExpression: "",
      result: "",
    });
  }, []);

  return (
    <div className={styles.calculator}>
      <Display value={expression} />
      <Keyboard liftExpression={expressionHandler} />
    </div>
  );
};

export default Calculator;
