import React, { useEffect, useState } from "react";
import styles from "./Keyboard.module.css";

const Keyboard = (props) => {
  const { liftExpression } = props;

  const [expressionObject, setExpressionObject] = useState({
    firstExpression: "0",
    operator: "",
    lastExpression: "",
    result: "",
  });

  useEffect(() => {
    liftExpression(expressionObject.firstExpression);
  }, [expressionObject.firstExpression, liftExpression]);

  const buttonHandler = (event) => {
    if (expressionObject.operator === "") {
      switch (event.target.id) {
        case "zero":
          if (expressionObject.firstExpression !== "0") {
            setExpressionObject((prevValue) => {
              return {
                ...prevValue,
                firstExpression: prevValue.firstExpression + "0",
              };
            });
          }
          break;
        case "one":
          setExpressionObject((prevValue) => {
            return {
              ...prevValue,
              firstExpression: prevValue.firstExpression + "1",
            };
          });
          break;
        case "two":
          setExpressionObject((prevValue) => {
            return {
              ...prevValue,
              firstExpression: prevValue.firstExpression + "2",
            };
          });
          break;
      }
    }

    switch (event.target.id) {
      case "clear":
        setExpressionObject({
          firstExpression: "0",
          operator: "",
          lastExpression: "",
          result: "",
        });
        break;
      default:
        break;
    }
  };

  return (
    <div className={styles.keyboard}>
      <div className={styles["item-a"]} id="clear" onClick={buttonHandler}>
        A/C
      </div>
      <div className={styles["item-b"]} id="divide" onClick={buttonHandler}>
        /
      </div>
      <div className={styles["item-b"]} id="multiply" onClick={buttonHandler}>
        X
      </div>
      <div className={styles["item-b"]} id="seven" onClick={buttonHandler}>
        7
      </div>
      <div className={styles["item-b"]} id="eight" onClick={buttonHandler}>
        8
      </div>
      <div className={styles["item-b"]} id="nine" onClick={buttonHandler}>
        9
      </div>
      <div className={styles["item-b"]} id="subtract" onClick={buttonHandler}>
        -
      </div>
      <div className={styles["item-b"]} id="four" onClick={buttonHandler}>
        4
      </div>
      <div className={styles["item-b"]} id="five" onClick={buttonHandler}>
        5
      </div>
      <div className={styles["item-b"]} id="six" onClick={buttonHandler}>
        6
      </div>
      <div className={styles["item-b"]} id="add" onClick={buttonHandler}>
        +
      </div>
      <div className={styles["item-b"]} id="one" onClick={buttonHandler}>
        1
      </div>
      <div className={styles["item-b"]} id="two" onClick={buttonHandler}>
        2
      </div>
      <div className={styles["item-b"]} id="three" onClick={buttonHandler}>
        3
      </div>
      <div className={styles["item-d"]} id="equals" onClick={buttonHandler}>
        =
      </div>
      <div className={styles["item-c"]} id="zero" onClick={buttonHandler}>
        0
      </div>
      <div className={styles["item-b"]} id="decimal" onClick={buttonHandler}>
        .
      </div>
    </div>
  );
};

export default Keyboard;
