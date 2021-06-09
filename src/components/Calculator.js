import React, { useCallback, useEffect, useState } from "react";
import Display from "./Display";
import styles from "./Calculator.module.css";

const Calculator = (props) => {
  const [display, setDisplay] = useState("0");
  const [firstExpression, setFirstExpression] = useState("0");
  const [operator, setOperator] = useState("");
  const [secondExpression, setSecondExpression] = useState("");

  const expressionHandler = (event) => {};

  useEffect((expressionHandler) => {
    expressionHandler = (event) => {
      if (firstExpression === "0") {
        setFirstExpression("");
      }
      switch (event.target.id) {
        case "clear":
          setFirstExpression("0");
          setOperator("");
          setSecondExpression("");
          setDisplay("0");
          break;
        case "equals":
          break;
        case "add":
          setOperator("+");
          break;
        case "subtract":
          setOperator("-");
          break;
        case "multiply":
          setOperator("*");
          break;
        case "divide":
          setOperator("/");
          break;
        case "decimal":
          break;
        case "zero":
          if (operator === "") {
            setFirstExpression((prevValue) => {
              return prevValue + "0";
            });
          } else {
            setSecondExpression((prevValue) => {
              return prevValue + "0";
            });
          }
          break;
        case "one":
          if (operator === "") {
            setFirstExpression((prevValue) => {
              return prevValue + "1";
            });
          } else {
            setSecondExpression((prevValue) => {
              return prevValue + "1";
            });
          }
          break;
        case "two":
          if (operator === "") {
            setFirstExpression((prevValue) => {
              return prevValue + "2";
            });
          } else {
            setSecondExpression((prevValue) => {
              return prevValue + "2";
            });
          }
          break;
        case "three":
          if (operator === "") {
            setFirstExpression((prevValue) => {
              return prevValue + "3";
            });
          } else {
            setSecondExpression((prevValue) => {
              return prevValue + "3";
            });
          }
          break;
        case "four":
          if (operator === "") {
            setFirstExpression((prevValue) => {
              return prevValue + "4";
            });
          } else {
            setSecondExpression((prevValue) => {
              return prevValue + "4";
            });
          }
          break;
        case "five":
          if (operator === "") {
            setFirstExpression((prevValue) => {
              return prevValue + "5";
            });
          } else {
            setSecondExpression((prevValue) => {
              return prevValue + "5";
            });
          }
          break;
        case "six":
          if (operator === "") {
            setFirstExpression((prevValue) => {
              return prevValue + "6";
            });
          } else {
            setSecondExpression((prevValue) => {
              return prevValue + "6";
            });
          }
          break;
        case "seven":
          if (operator === "") {
            setFirstExpression((prevValue) => {
              return prevValue + "7";
            });
          } else {
            setSecondExpression((prevValue) => {
              return prevValue + "7";
            });
          }
          break;
        case "eight":
          if (operator === "") {
            setFirstExpression((prevValue) => {
              return prevValue + "8";
            });
          } else {
            setSecondExpression((prevValue) => {
              return prevValue + "8";
            });
          }
          break;
        case "nine":
          if (operator === "") {
            setFirstExpression((prevValue) => {
              return prevValue + "9";
            });
          } else {
            setSecondExpression((prevValue) => {
              return prevValue + "9";
            });
          }
          break;
        default:
          break;
      }
    };
    setDisplay(firstExpression);
  });

  return (
    <div className={styles.calculator}>
      <Display value={display} />
      <div className={styles.keyboard}>
        <div
          className={styles["item-a"]}
          id="clear"
          onClick={expressionHandler}
        >
          A/C
        </div>
        <div
          className={styles["item-b"]}
          id="divide"
          onClick={expressionHandler}
        >
          /
        </div>
        <div
          className={styles["item-b"]}
          id="multiply"
          onClick={expressionHandler}
        >
          X
        </div>
        <div
          className={styles["item-b"]}
          id="seven"
          onClick={expressionHandler}
        >
          7
        </div>
        <div
          className={styles["item-b"]}
          id="eight"
          onClick={expressionHandler}
        >
          8
        </div>
        <div className={styles["item-b"]} id="nine" onClick={expressionHandler}>
          9
        </div>
        <div
          className={styles["item-b"]}
          id="subtract"
          onClick={expressionHandler}
        >
          -
        </div>
        <div className={styles["item-b"]} id="four" onClick={expressionHandler}>
          4
        </div>
        <div className={styles["item-b"]} id="five" onClick={expressionHandler}>
          5
        </div>
        <div className={styles["item-b"]} id="six" onClick={expressionHandler}>
          6
        </div>
        <div className={styles["item-b"]} id="add" onClick={expressionHandler}>
          +
        </div>
        <div className={styles["item-b"]} id="one" onClick={expressionHandler}>
          1
        </div>
        <div className={styles["item-b"]} id="two" onClick={expressionHandler}>
          2
        </div>
        <div
          className={styles["item-b"]}
          id="three"
          onClick={expressionHandler}
        >
          3
        </div>
        <div
          className={styles["item-d"]}
          id="equals"
          onClick={expressionHandler}
        >
          =
        </div>
        <div className={styles["item-c"]} id="zero" onClick={expressionHandler}>
          0
        </div>
        <div
          className={styles["item-b"]}
          id="decimal"
          onClick={expressionHandler}
        >
          .
        </div>
      </div>
    </div>
  );
};

export default Calculator;
