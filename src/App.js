import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0)

  // let color = count > 0 ? "green" :count < 0 ? "red" : "black"
  
  let color;

  if (count > 0) {
    color = "green"
  } else if (count < 0) {
    color = "red"
  } else {
    color = "white"
  }



  const increase = () => {setCount(count + 1)}
  const reset = () => {setCount(0)}
  const decrease = () => {setCount(count - 1)}

  return (
    <div className="container">
      <h1 style={{color: "white"}}>Counter</h1>
      <span style = {{color}} id="value">{count}</span>
      <div>
        <button onClick={decrease} className="btn btn-decrease">Decrease</button>
        <button onClick={reset} className="btn btn-reset">Reset</button>
        <button onClick={increase} className="btn btn-increase">Increase</button>
      </div>
    </div>
  );
}

export default App;
