import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import { EmployeeList, Profile, SignUp } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "profile", element: <Profile /> },
      { path: "employees", element: <EmployeeList /> },
      { path: "signup", element: <SignUp /> },
    ],
  },
]);

export default router;
