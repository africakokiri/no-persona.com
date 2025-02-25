import { create } from "zustand";

interface UserInputData {
  inputData: {
    user_input: string;
    password: string;
  }[];
  addInputData: (user_input: string, password: string) => void;
}

export const useUserInputDataStore = create<UserInputData>((set) => ({
  inputData: [],

  addInputData: (user_input, password) =>
    set((state) => ({
      inputData: [
        ...state.inputData,
        {
          user_input,
          password
        }
      ]
    }))
}));
