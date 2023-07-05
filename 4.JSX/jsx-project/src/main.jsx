import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

// const name = "Hiep Nguyen";

// root.render(
//   React.createElement("h1", { style: { textAlign: "center" } }, name)
// );

// root.render(<h1 style={{ textAlign: "center" }}>{name}</h1>);

// const fruits = [
//   "Apple",
//   "Banana",
//   "Orange",
//   "Apricot",
//   "Black rowan",
//   "Cranberry",
// ];

// root.render(
//   <div>
//     <h1>List of fruits</h1>
//     <ul>
//       {fruits.map((item) => (
//         <li key={item}>{item}</li>
//       ))}
//     </ul>
//   </div>
// );
