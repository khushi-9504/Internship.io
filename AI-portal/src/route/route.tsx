import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import { EmployeeList, Profile } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "profile", element: <Profile /> },
      { path: "employees", element: <EmployeeList /> },
    ],
  },
]);

export default router;
