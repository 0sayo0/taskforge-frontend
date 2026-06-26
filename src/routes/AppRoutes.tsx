import { createBrowserRouter, Outlet } from "react-router";
import AuthLayout from "../components/Layouts/AuthLayout";
import { publicOnlyRoute, protectedRoute } from "./guards";
import DashboardLayout from "../components/Layouts/DashboardLayout";
import LoginPage from "../features/auth/pages/LoginPage";
import RegirsterPage from "../features/auth/pages/RegirsterPage";
import NotFoundPage from "../pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    Component: Outlet,
    loader: publicOnlyRoute,
    children: [
      {
        Component: AuthLayout,
        children: [
          { path: "/auth/login", Component: LoginPage },
          { path: "/auth/register", Component: RegirsterPage },
        ],
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
  { path: "*", Component: NotFoundPage },
]);
