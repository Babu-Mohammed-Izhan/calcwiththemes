import React from "react";
import "./App.css";

function App() {
  const [value, setValue] = React.useState("");
  const [operator, setOperator] = React.useState("");

  const addNumber = (num: string): void => {
    setValue("");
    setValue(value + num);
  };

  const handleDelete = (): void => {
    setValue("0");
    setOperator("");
  };

  const handleOperator = (str: string): void => {
    setOperator(str);
    setValue(value + str);
  };

  const handleDecimal = () => {
    setValue(value + ".");
  };

  return (
    <div className="App">
      <div className="title-button">
        <h4 className="title">calc</h4>
        <div className="theme-switch">
          <p className="theme">THEME</p>
        </div>
      </div>
      <div className="number">{value}</div>
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
            <button className="calc" onClick={() => handleOperator("*")}>
              x
            </button>
          </div>
          <div className="row-submit">
            <button className="calc">RESET</button>
            <button className="calc">=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
