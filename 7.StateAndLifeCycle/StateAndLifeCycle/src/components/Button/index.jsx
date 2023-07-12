import { useState } from "react";

export default function Button() {
  const [number, setNumber] = useState(0);
  const handleDecrease = () => {
    setNumber(number + 1)
  }

  const handleIncrease = () => {
    setNumber(number - 1)
  }
  return (
    <div style={{ textAlign: "center", padding: 30 }}>
      <button onClick={handleDecrease}>Decrease</button>
      <span style={{ padding: 10 }}>{number}</span>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}
