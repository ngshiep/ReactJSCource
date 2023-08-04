import React, { useEffect, useRef, useState } from "react";
import { todoApiServices } from "./services/todolist.api";

export default function TodoList() {
  const [listTodos, setListTodos] = useState([]);
  const inputRef = useRef(null);
  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await todoApiServices.getAllTodo();
        setListTodos(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);
  const handleSubmit = async () => {
    try {
      const inputValue = inputRef.current.value;
      if (inputValue !== "") {
        const res = await todoApiServices.addTodo({
          userId: 1,
          title: inputValue,
          completed: false,
        });
        if (res.status === 201) {
          alert("update post success");
        } else {
          alert("update post failed");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "center",
      }}
    >
      <input
        ref={inputRef}
        type="text"
        style={{ width: "300px", padding: "6px" }}
      ></input>
      <button
        style={{
          padding: "10px",
          maxWidth: "150px",
          backgroundColor: "gray",
          color: "white",
        }}
        onClick={handleSubmit}
      >
        Submit
      </button>
      <ul>
        {listTodos &&
          listTodos.length > 0 &&
          listTodos.map((todo) => (
            <li style={{ textAlign: "left", listStyle: "none" }} key={todo.id}>
              {todo.title}
            </li>
          ))}
      </ul>
    </div>
  );
}
