import React from "react";
import "./App.css";

function App() {
  const [value, setValue] = React.useState(0);

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
            <button className="calc">7</button>
            <button className="calc">8</button>
            <button className="calc">9</button>
            <button className="calc del">DEL</button>
          </div>
          <div className="row">
            <button className="calc">4</button>
            <button className="calc">5</button>
            <button className="calc">6</button>
            <button className="calc">+</button>
          </div>
          <div className="row">
            <button className="calc">1</button>
            <button className="calc">2</button>
            <button className="calc">3</button>
            <button className="calc">-</button>
          </div>
          <div className="row">
            <button className="calc">.</button>
            <button className="calc">0</button>
            <button className="calc">/</button>
            <button className="calc">x</button>
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
