import { createBrowserRouter } from "react-router-dom";
import Home from "../modules/home/index.jsx";
import Posts from "../modules/posts/index.jsx";
import { routers } from "./routers.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: routers.web.posts,
    element: <Posts></Posts>,
  },
]);

export default router;
