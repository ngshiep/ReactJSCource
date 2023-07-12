import { useState } from "react";

export default function TodoList() {
  const [item, setItem] = useState("");
  const [tasks, setTasks] = useState([]);
  const handleAddItem = () => {
    if (item !== "") setTasks([...tasks, item]);
    setItem("");
  };
  console.log(tasks);
  return (
    <>
      <h1>TodoList</h1>

      <div>
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        ></input>
        <button onClick={handleAddItem}>Add</button>
      </div>
      <ul>
        {tasks.length !== 0 &&
          tasks.map((task, index) => <li key={index}> {task} </li>)}
      </ul>
    </>
  );
}
