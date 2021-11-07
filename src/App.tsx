import React from "react";
import "./App.css";

function App() {
  const [value1, setValue1] = React.useState("");
  const [value2, setValue2] = React.useState("");
  const [operator, setOperator] = React.useState("");

  const addNumber = (num: string): void => {
    if (operator !== "") {
      setValue2(value2 + num);
    } else {
      setValue1(value1 + num);
    }
  };

  const handleDelete = (): void => {
    if (operator !== "") {
      setValue2("");
    } else {
      setValue1("");
    }
  };

  const handleReset = (): void => {
    setValue1("");
    setValue2("");
    setOperator("");
  };

  const handleOperator = (str: string): void => {
    setOperator(str);
  };

  const handleDecimal = (): void => {
    setValue1(value1 + ".");
  };

  const handleCalc = (): void => {
    let result: number;
    switch (operator) {
      case "+":
        result = Number(value1) + Number(value2);
        setValue1(result.toString());
        break;
      case "-":
        result = Number(value1) - Number(value2);
        setValue1(result.toString());
        break;
      case "x":
        result = Number(value1) * Number(value2);
        setValue1(result.toString());
        break;
      default:
        console.log("Error in the program");
    }
    setValue2("");
    setOperator("");
  };

  return (
    <div className="App">
      <div className="calc-wrapper">
        <div className="title-button">
          <h4 className="title">calc</h4>
          <div className="theme-switch">
            <p className="theme">THEME</p>
          </div>
        </div>
        <div className="number">{value1 + operator + value2}</div>
        <div className="calc-buttons-wrapper">
          <div className="calc-buttons">
            <div className="row">
              <button className="calc" onClick={() => addNumber("7")}>
                7
              </button>
              <button className="calc" onClick={() => addNumber("8")}>
                8
              </button>
              <button className="calc" onClick={() => addNumber("9")}>
                9
              </button>
              <button className="calc del" onClick={() => handleDelete()}>
                DEL
              </button>
            </div>
            <div className="row">
              <button className="calc" onClick={() => addNumber("4")}>
                4
              </button>
              <button className="calc" onClick={() => addNumber("5")}>
                5
              </button>
              <button className="calc" onClick={() => addNumber("6")}>
                6
              </button>
              <button className="calc" onClick={() => handleOperator("+")}>
                +
              </button>
            </div>
            <div className="row">
              <button className="calc" onClick={() => addNumber("1")}>
                1
              </button>
              <button className="calc" onClick={() => addNumber("2")}>
                2
              </button>
              <button className="calc" onClick={() => addNumber("3")}>
                3
              </button>
              <button className="calc" onClick={() => handleOperator("-")}>
                -
              </button>
            </div>
            <div className="row">
              <button className="calc" onClick={() => handleDecimal()}>
                .
              </button>
              <button className="calc" onClick={() => addNumber("0")}>
                0
              </button>
              <button className="calc" onClick={() => handleOperator("/")}>
                /
              </button>
              <button className="calc" onClick={() => handleOperator("x")}>
                x
              </button>
            </div>
            <div className="row-submit">
              <button className="calc" onClick={() => handleReset()}>
                RESET
              </button>
              <button className="calc" onClick={() => handleCalc()}>
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
