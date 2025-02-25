import { create } from "zustand";

interface UserInputData {
  inputData: {
    userInput: string;
    password: string;
  }[];
  addInputData: (userInput: string, password: string) => void;
}

export const useUserInputDataStore = create<UserInputData>((set) => ({
  inputData: [],

  addInputData: (userInput, password) =>
    set((state) => ({
      inputData: [
        ...state.inputData,
        {
          userInput,
          password
        }
      ]
    }))
}));
