import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AlertComponent from "./components/AlertComponent/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AlertComponent text="Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại." />
  </React.StrictMode>
);
