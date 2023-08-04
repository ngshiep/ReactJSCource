import { createBrowserRouter } from "react-router-dom";
import Home from "../modules/home/index.jsx";
import Posts from "../modules/posts/index.jsx";
import { routers } from "./routers.js";
import ManageBook from "../modules/manageBook/index.jsx";
import AddBook from "../modules/manageBook/components/AddBook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: routers.web.posts,
    element: <Posts></Posts>,
  },
  {
    path: routers.web.books.books,
    element: <ManageBook></ManageBook>,
  },
  {
    path: routers.web.books.addBooks,
    element: <AddBook></AddBook>,
  },
]);

export default router;
