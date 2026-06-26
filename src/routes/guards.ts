// import { useAuthStore } from "../store/authStore";

import { redirect } from "react-router";

const token = false;

export const publicOnlyRoute = () => {
  if (token) {
    throw redirect("/");
  }

  return null;
};

export const protectedRoute = () => {
  if (!token) {
    throw redirect("/auth/login");
  }

  return null;
};
