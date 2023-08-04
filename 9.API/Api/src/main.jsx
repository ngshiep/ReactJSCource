import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routers/router.jsx";
import TodoList from "./modules/totolist";
import TableBooks from "./modules/manageBook/components/TableBooks";
import AddBook from "./modules/manageBook/components/AddBook";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <TableBooks></TableBooks> */}
    {/* <AddBook></AddBook> */}
  </React.StrictMode>
);
