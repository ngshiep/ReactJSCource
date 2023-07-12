import { useState } from "react";

export default function Calculator() {
  const [upNumber, setUpNumber] = useState(0);
  const [bottomNumber, setBottomNumber] = useState(0);
  const [result, setResult] = useState(0);

  const handleNumberChange = (e) => {
    const number = parseInt(e.target.value);
    if (isNaN(number)) return;

    if (e.target.name === "upNumber") {
      setUpNumber(number);
    }
    if (e.target.name === "bottomNumber") {
      setBottomNumber(number);
    }
  };

  const handlePlus = () => {
    setResult(upNumber + bottomNumber);
  };
  const handleMinus = () => {
    setResult(upNumber - bottomNumber);
  };
  const handleMultiply = () => {
    setResult(upNumber * bottomNumber);
  };
  const handleDivision = () => {
    setResult(upNumber / bottomNumber);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "start",
        width: "200px",
      }}
    >
      <input
        name="upNumber"
        type="text"
        style={{ display: "block" }}
        value={upNumber}
        onChange={handleNumberChange}
      ></input>
      <input
        name="bottomNumber"
        type="text"
        style={{ display: "block", marginTop: '5px' }}
        value={bottomNumber}
        onChange={handleNumberChange}
      ></input>
      <span style={{ marginTop: '5px' }}>Result: {result}</span>
      <div style={{  marginTop: '5px' }}>
        <button onClick={handlePlus}>+</button>
        <button onClick={handleMinus}>-</button>
        <button onClick={handleMultiply}>x</button>
        <button onClick={handleDivision}>/</button>
      </div>
    </div>
  );
}
