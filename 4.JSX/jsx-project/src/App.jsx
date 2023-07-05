import { useState } from "react";
import "./App.css";
import Fruit from "./components/Fruit";

function App() {
  const initFruits = [
    "Apple",
    "Banana",
    "Orange",
    "Apricot",
    "Black rowan",
    "Cranberry",
  ];

  const [fruits, setFruits] = useState(initFruits);
  const handleDelete = () => {
    setFruits((prev) => {
      const copyPrev = [...prev];
      copyPrev.pop();
      return copyPrev;
    });
  };

  const handleAdd = () => {
    setFruits((prev) => {
      const copyPrev = [...prev];
      copyPrev.push(Math.random());
      return copyPrev;
    });
  };
  return (
    <div>
      <h1>List of fruits</h1>
      <ul>
        {fruits.map((item, index) => (
          <Fruit name={item} key={index}></Fruit>
        ))}
      </ul>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleAdd}>add</button>
    </div>
  );
}

export default App;
