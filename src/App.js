
import { useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState("0")

  const handleButton = (value) => {
    if (value === "=") {
      calulateResult();
    }
    else if (value === "c") {
      clearDispaly();
    }
    else if (value === "D") {
      setState(state => state.substring(0, state.length - 1))
    }
    else if(state === "0"){
      setState(value)
    }
    else if(state === "Error"){
      setState(value)
    }
    else {
      setState(state + value)
    }
  }

  const clearDispaly = () => {
    setState("0")
  }

  const calulateResult = () => {
    try {
      const result = eval(state);
      setState(result.toString());
    } catch (error) {
      setState("Error");
    }
  };
  return (
    <div className="calcultor">
      <h1>calcultor</h1>

      <div className="displayValue">{state}</div>

      <div className="buttons">
        <button onClick={() => handleButton("1")}>1</button>
        <button onClick={() => handleButton("2")}>2</button>
        <button onClick={() => handleButton("3")}>3</button>
        <button onClick={() => handleButton("/")} className="symbol">/</button>

        <button onClick={() => handleButton("4")}>4</button>
        <button onClick={() => handleButton("5")}>5</button>
        <button onClick={() => handleButton("6")}>6</button>
        <button onClick={() => handleButton("*")} className="symbol">*</button>

        <button onClick={() => handleButton("7")}>7</button>
        <button onClick={() => handleButton("8")}>8</button>
        <button onClick={() => handleButton("9")}>9</button>
        <button onClick={() => handleButton("-")} className="symbol">-</button>

        <button onClick={() => handleButton("0")}>0</button>
        <button onClick={() => handleButton(".")}>.</button>

        <button onClick={() => handleButton("=")} className="equal">=</button>

        <button onClick={() => handleButton("+")} className="symbol">+</button>

        <button onClick={() => handleButton("c")}>C</button>
        <button onClick={() => handleButton("D")}>D</button>

      </div>



    </div>


  );
}

export default App