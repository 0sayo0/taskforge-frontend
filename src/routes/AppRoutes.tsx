import { createBrowserRouter, Outlet } from "react-router";
import AuthLayout from "../components/Layouts/AuthLayout";
import { publicOnlyRoute, protectedRoute } from "./guards";
import DashboardLayout from "../components/Layouts/DashboardLayout";

export const router = createBrowserRouter([
  {
    Component: Outlet,
    loader: publicOnlyRoute,
    children: [
      {
        path: "/auth",
        Component: AuthLayout,
      },
    ],
  },
  {
    Component: Outlet,
    loader: protectedRoute,
    children: [
      {
        path: "/",
        Component: DashboardLayout,
      },
    ],
  },
]);
