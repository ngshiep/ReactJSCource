import { useState } from "react";

const cars = ["toyota", "camry", "mec", "honda"];
const colors = ["black", "pink", "white", "yellow"];
export default function CarSelectionComponent() {
  const [car, setCar] = useState("toyota");
  const [color, setColor] = useState("black");
  return (
    <div>
      <h1>Select your car</h1>
      <div>
        <span style={{ marginRight: "10px" }}>Select a car</span>
        <select onChange={(e) => setCar(e.target.value)} value={car}>
          {cars.map((car) => (
            <option key={car}>{car}</option>
          ))}
        </select>
      </div>

      <div>
        <span style={{ marginRight: "10px" }}>Select a color</span>
        <select onChange={(e) => setColor(e.target.value)} value={color}>
          {colors.map((color) => (
            <option key={color}>{color}</option>
          ))}
        </select>
      </div>
      <h4>
        Your selected a {car} {color}
      </h4>
    </div>
  );
}
