import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Dashboard from "@/pages/dashboard";
import UserInfo from "@/pages/user-info";

export const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    { path: "/:userName", element: <UserInfo /> },
  ]);
  return <RouterProvider router={router} />;
};
