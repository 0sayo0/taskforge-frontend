import { create } from "zustand";

type State = {
  isAuth: boolean;
  userID: string;
  token: string;
};

export const useAuthStore = create<State>((set) => ({
  isAuth: false,
  userID: "",
  token: "",
}));
