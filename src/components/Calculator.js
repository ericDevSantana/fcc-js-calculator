import React, { useState } from "react";
import Display from "./Display";
import styles from "./Calculator.module.css";

const isNumber = new RegExp("^[0-9]$");

const Calculator = (props) => {
  const [firstExpression, setFirstExpression] = useState("0");
  const [operator, setOperator] = useState("");
  const [secondExpression, setSecondExpression] = useState("");
  const [result, setResult] = useState("");

  const buttonHandler = (event) => {
    //Check if the event is a number
    if (isNumber.test(event.target.value)) {
      if (operator === "") {
        if (firstExpression === "0") {
          setFirstExpression("");
        }
        setFirstExpression((prevValue) => {
          return prevValue + event.target.value;
        });
      } else {
        setSecondExpression((prevValue) => {
          return prevValue + event.target.value;
        });
      }
      //Check if first and second expression already has . in it
    } else if (event.target.value === ".") {
      if (operator === "") {
        if (firstExpression.includes(".")) {
          return;
        } else {
          setFirstExpression((prevValue) => {
            return prevValue + ".";
          });
        }
      } else {
        if (secondExpression.includes(".")) {
          return;
        } else {
          setSecondExpression((prevValue) => {
            return prevValue + ".";
          });
        }
      }
      //Check if the event is a operator
    } else if (
      event.target.value.includes("+") ||
      event.target.value.includes("/") ||
      event.target.value.includes("*") ||
      event.target.value.includes("-")
    ) {
      if (operator !== "" && secondExpression !== "") {
        //resolve already
        setFirstExpression(
          String(eval(firstExpression + operator + secondExpression))
        );
        setSecondExpression("");
        setOperator(event.target.value);
      } else {
        setOperator(event.target.value);
      }
    }
    //Check if the event is Clear All
    else if (event.target.value === "ac") {
      setFirstExpression("0");
      setSecondExpression("");
      setOperator("");
      setResult("");
    }
    //Check if the event is Equals
    else if (event.target.value === "=") {
      if (
        firstExpression !== "" &&
        operator !== "" &&
        secondExpression !== ""
      ) {
        // setResult(eval(firstExpression + operator + secondExpression));
        setFirstExpression(
          String(eval(firstExpression + operator + secondExpression))
        );
      } else if (firstExpression !== "" && secondExpression === "") {
        // setResult(eval(firstExpression));
        setFirstExpression(String(eval(firstExpression)));
      }
      setSecondExpression("");
      setOperator("");
    }
  };

  return (
    <div className={styles.calculator}>
      <Display value={firstExpression + operator + secondExpression} />
      <div className={styles.keyboard}>
        <button
          className={styles["item-a"]}
          id="clear"
          value={"ac"}
          onClick={buttonHandler}
        >
          A/C
        </button>
        <button
          className={styles["item-b"]}
          id="divide"
          value="/"
          onClick={buttonHandler}
        >
          /
        </button>
        <button
          className={styles["item-b"]}
          id="multiply"
          value="*"
          onClick={buttonHandler}
        >
          X
        </button>
        <button
          className={styles["item-b"]}
          id="seven"
          value="7"
          onClick={buttonHandler}
        >
          7
        </button>
        <button
          className={styles["item-b"]}
          id="eight"
          value="8"
          onClick={buttonHandler}
        >
          8
        </button>
        <button
          className={styles["item-b"]}
          id="nine"
          value="9"
          onClick={buttonHandler}
        >
          9
        </button>
        <button
          className={styles["item-b"]}
          id="subtract"
          value="-"
          onClick={buttonHandler}
        >
          -
        </button>
        <button
          className={styles["item-b"]}
          id="four"
          value="4"
          onClick={buttonHandler}
        >
          4
        </button>
        <button
          className={styles["item-b"]}
          id="five"
          value="5"
          onClick={buttonHandler}
        >
          5
        </button>
        <button
          className={styles["item-b"]}
          id="six"
          value="6"
          onClick={buttonHandler}
        >
          6
        </button>
        <button
          className={styles["item-b"]}
          id="add"
          value="+"
          onClick={buttonHandler}
        >
          +
        </button>
        <button
          className={styles["item-b"]}
          id="one"
          value="1"
          onClick={buttonHandler}
        >
          1
        </button>
        <button
          className={styles["item-b"]}
          id="two"
          value="2"
          onClick={buttonHandler}
        >
          2
        </button>
        <button
          className={styles["item-b"]}
          id="three"
          value="3"
          onClick={buttonHandler}
        >
          3
        </button>
        <button
          className={styles["item-d"]}
          id="equals"
          value="="
          onClick={buttonHandler}
        >
          =
        </button>
        <button
          className={styles["item-c"]}
          id="zero"
          value="0"
          onClick={buttonHandler}
        >
          0
        </button>
        <button
          className={styles["item-b"]}
          id="decimal"
          value="."
          onClick={buttonHandler}
        >
          .
        </button>
      </div>
    </div>
  );
};

export default Calculator;
