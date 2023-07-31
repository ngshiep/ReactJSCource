import { createBrowserRouter } from "react-router-dom";
import Home from "../modules/home/index.jsx";
import Login from "../modules/authentication/login/index.jsx";
import EmployeeTable from "../modules/employee/components/EmployeeTable/index.jsx";

const router2 = createBrowserRouter([
  {
    path: "/",
    element: <EmployeeTable></EmployeeTable>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);

export default router2;
