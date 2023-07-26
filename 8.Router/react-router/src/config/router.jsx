import { createBrowserRouter } from "react-router-dom";
import Home from "../modules/home/index.jsx";
import Login from "../modules/authentication/login/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);

export default router;
