import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import { EmployeeList, Profile } from "../pages";
import SignUp from "../components/Auth/SignUp/SignUp";
import Login from "../components/Auth/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "profile", element: <Profile /> },
      { path: "employees", element: <EmployeeList /> },
      { path: "signup", element: <SignUp /> },
      { path: "login", element: <Login /> },
    ],
  },
]);

export default router;
