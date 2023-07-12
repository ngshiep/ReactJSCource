import { useState } from "react";
import HelloComponent from "../HelloComponent";

export default function MainComponent() {
  const [display, setDisplay] = useState(true);
  const handleDeleteComponent = () => {
    setDisplay(false);
  };
  return (
    <div style={{ textAlign: "center" }}>
      {display && <HelloComponent></HelloComponent>}
      <button onClick={handleDeleteComponent}>Delete the component</button>
    </div>
  );
}
